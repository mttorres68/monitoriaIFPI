import { Form} from '@unform/web';
import { useField, SubmitHandler, FormHandles, FormProps } from '@unform/core';
import {Input} from '../components/form/input';
import {Select} from '../components/form/select';
import { useRef, useEffect, useState, FormEvent } from 'react';
import { Button } from "@material-tailwind/react";
import * as Yup from 'yup';
import '/src/styles/main.css';
import type { Asserts } from 'yup';
import axios from 'axios';

interface FormData{
    name: string;
    password: string;
}

interface YupError{
    error?:string;
}

interface Usuario{
    name: string;
    email: string;
    matricula: string;
    cursor: string;
    cpf: string;
    senha: string;
}


export function Cadastro(){

    const formRef = useRef<FormHandles>(null)
    const [usuario, setUsuario] = useState<Usuario[]>([])

    useEffect(() => {
        axios('http://localhost:3000/usuario').then(response => {
            setUsuario(response.data)     
        })
    }, [])


    async function handleUsuarioCreate(event: FormProps){
        event.defaultValue
    }


    const handleSubmit: SubmitHandler <FormData> = async (data, {reset}) =>{
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Digite um -email válido')
                    .required('O e-email é obrigatório.'),
                matricula: Yup.string().required('A matricula é obrigatório.')
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            formRef.current?.setErrors({});

            console.log(data);   

            reset();
        } catch (err){
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach ((error) => {
                    errorMessages[error.path] = error.message;
                    console.log(error,'erro aqui');
                    
                })

                formRef.current?.setErrors(errorMessages);
            }
        }
    }

    const selectOptions = [
        { value: 'tads', label: 'Tecnologo em Anal. e Desn. de Sistemas' },
        { value: 'biologia', label: 'Biologia' },
        { value: 'matematica', label: 'Mátematica' },
    ]
    

    return(
        <>
            <section className='w-full h-full absolute '>            
                <div className='bg-gray-900 absolute top-0 w-full h-full'>
                </div>
                <div className='container mx-auto px-4 h-full'>
                    <div className='flex items-center h-full justify-center content-center'>
                        <div className='w-full lg:w-4/12 px-4'>
                            <div className='relative flex flex-col min-w-0 w-full break-words mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
                                <div className='rounded-t mb-0 px-6 py-6'>
                                    <div className='text-center mb-3'>
                                        <h6 className='text-gray-600 text-sm font-bold uppercase'>
                                            Cadastro
                                        </h6>
                                    </div>
                                    <hr className='mt-2 border-b-2 border-gray-600'/>
                                </div>
                                <div className='flex-auto py-4 px-4 lg:px-5  pt-0'>                                        
                                    <Form ref={formRef} onSubmit={handleSubmit}>
                                        <Input 
                                            label='Nome' 
                                            name='nome' 
                                            placeholder='Maria Miranda'
                                        />
                                        <Input 
                                            label='Matricula' 
                                            name='matricula'    
                                            placeholder='2022113tads16' 
                                        />
                                        <Select 
                                            name='curso' 
                                            label='Qual é seu curso?'
                                        >
                                            {selectOptions.map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                                ))}
                                        </Select>
                                    
                                        <Input
                                            label='Email' 
                                            type='email' 
                                            name='email' 
                                            placeholder='caflo.2022114abc@aluno.ifpi.edu.br'
                                        />
                                        <Input 
                                            label='CPF' 
                                            type='text' 
                                            name='cpf' 
                                            placeholder='123.321.456-78' 
                                        />
                                        <Input 
                                            label='senha' 
                                            type='password' 
                                            name='senha' 
                                            placeholder='**********'
                                        />
                                        <div className='text-center'>
                                            <Button 
                                                color='blue-gray' 
                                                type='submit' 
                                                variant='gradient' 
                                            >
                                                Enviar
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}