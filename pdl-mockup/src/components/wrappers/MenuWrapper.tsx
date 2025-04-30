import { ReactNode } from 'react'

interface MenuWrapperProps {
    children: ReactNode
}

export const MenuWrapper = ({ children }: MenuWrapperProps) => {
    return <div className="flex justify-center">{children}</div>
}
