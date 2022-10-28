import { useField, SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { Input } from '../components/form/input';


import '/src/styles/main.css';



export function Login (){

    const formRef = useRef<FormHandles>(null)

    const handleSubmit: SubmitHandler <FormData> = data =>{
        console.log(data);   
    }


    return (        
        <>
            <main>
                <section className="absolute w-full h-full">
                    <div className="absolute top-0 w-full h-full bg-gray-800">
                    </div>
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                    <div className="rounded-t mb-0 px-6 py-6">
                                        <div className="text-center mb-3">
                                            <h6 className="text-gray-800 text-sm font-bold uppercase">
                                                Entrar
                                            </h6>
                                        </div>
                                        <hr className="mt-6 border-b-1 border-gray-400" />
                                    </div>
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        
                                        <Form ref={formRef} onSubmit={handleSubmit}>
                                            <div className="relative w-full mb-3">
                                                <Input
                                                    label='Matricula'
                                                    type="text"
                                                    name='matricula'
                                                    placeholder="Matricula"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="relative w-full mb-3">
                                                <Input
                                                    label='Senha'
                                                    type="password"
                                                    name='senha'
                                                    placeholder="Senha"
                                                    style={{ transition: "all .15s ease" }}
                                                />
                                            </div>
                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 w-full"
                                                    type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Acessar
                                                </button>
                                            </div>
                                            <div className='text-center '>   
                                                    <button 
                                                        type='button'
                                                        className="text-sm w-full font-semibold text-gray-700 uppercase shadow hover:shadow-gray-900 rounded outline-none focus:outline-none mr-1 mb-1 px-6 py-3 active:bg-gray-400 "
                                                        style={{ transition: "all .15s ease" }}
                                                    >
                                                        Cadastrar-se
                                                    </button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};