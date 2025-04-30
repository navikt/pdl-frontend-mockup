import { ReactNode } from 'react'

interface FormWrapperProps {
    children: ReactNode
}

export const FormWrapper = ({ children }: FormWrapperProps) => {
    return (
        <div className="flex flex-col max-w-[750px] w-full mt-6 px-4">
            {children}
        </div>
    )
}
