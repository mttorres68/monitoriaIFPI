import { useRef, useEffect, InputHTMLAttributes } from 'react'
import { useField} from '@unform/core'
import '/src/styles/main.css';


export interface Props{
    name: string;
    label?: string;
    value?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

export function Input({ name, type, label, value, ...rest }: InputProps) {
    
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error , clearError} = useField(name);

    const defaultInputValue = value || defaultValue;

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, newValue) => {
                ref.current.value = newValue
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])

    return (

        <div className="w-full relative mb-3 ">
            <label
                htmlFor= {fieldName}
                className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            >
                {label}
            </label>

            <input 
                type={type || 'text'}
                id={fieldName}
                ref={inputRef}
                onFocus={clearError}
                defaultValue={defaultInputValue}
                {...rest}
                className="appearance-none block w-full bg-gray-100 text-gray-900 border-0 text-sm shadow rounded py-4 px-4 mb-3 leading-tight placeholder-gray-400 focus:ring-1 focus:outline-none focus:bg-white focus:border-gray-800 pl-1 error ? 'has-error' : '' "
            />
                {error && <span className='error text-red-900'>{error}</span>}
        </div>
    )

}

