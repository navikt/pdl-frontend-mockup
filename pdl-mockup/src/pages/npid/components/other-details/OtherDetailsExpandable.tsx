import { HStack, Label } from '@navikt/ds-react'
import { MinusCircleIcon, PlusCircleIcon } from '@navikt/aksel-icons'
import { ReactNode, useState } from 'react'

interface OtherDetailsExpandableProps {
    label: string | string[]
    children: ReactNode
    handleRemove?: (personToRemove: string) => void
}

const OtherDetailsExpandable = ({
    label,
    children,
    handleRemove,
}: OtherDetailsExpandableProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
            handleRemove?.(label as string)
        }
    }

    return (
        <>
            <div
                className="p-1 w-full hover:bg-bg-subtle cursor-pointer group text-text-action"
                onClick={handleClick}
            >
                <HStack align="center" gap="2">
                    {!isOpen ? (
                        <PlusCircleIcon fontSize="26" />
                    ) : (
                        <MinusCircleIcon fontSize="26" />
                    )}

                    <Label
                        size="medium"
                        className="cursor-pointer group-hover:underline"
                    >
                        {label}
                    </Label>
                </HStack>
            </div>
            {isOpen && (
                <div className="border-l-1 border-border-subtle ml-4 w-full pr-4 flex-wrap">
                    <div className="pl-5 pt-2 pb-4 w-full flex flex-col gap-6">
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default OtherDetailsExpandable
