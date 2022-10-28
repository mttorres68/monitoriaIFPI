import { useRef, useEffect, ReactNode, SelectHTMLAttributes } from 'react'
import { useField } from '@unform/core'

interface SelectProps {
    name: string  
    label: string
    children: ReactNode
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & SelectProps


export function Select({ name, label, children, ...rest }: Props) {
    const selectRef = useRef<HTMLSelectElement>(null)

    const { fieldName, defaultValue, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            ref: selectRef,
            name: fieldName,
            getValue: ref => {
                return ref.current?.value
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
        <div className='w-full relative mb-3'>
            <label 
                htmlFor={fieldName}
                className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
            >
                {label}
            </label>

            <select
                id={fieldName}
                ref={selectRef}
                defaultValue={defaultValue}
                {...rest}
                className="appearance-none block w-full bg-gray-200 text-gray-900 border-0 text-sm shadow rounded py-3 px- mb-3 leading-tight placeholder-gray-400 focus:ring-1 focus:outline-none focus:bg-white focus:border-gray-800"

            >
                {children}
            </select>

            {error && <span className="error">{error}</span>}
        </div>
    )
}