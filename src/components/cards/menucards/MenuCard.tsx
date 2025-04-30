import { BodyShort, Heading, VStack } from '@navikt/ds-react'
import { Link } from 'react-router-dom'

interface MenuCardProps {
    to: string
    icon: React.ComponentType<{ fontSize: string }>
}

const MenuCard = ({ to, icon: Icon }: MenuCardProps) => {
    return (
        <Link to={to}>
            <div className="border-border-subtle border-1 rounded-lg px-3 py-5 hover:border-border-default hover:border-1 group flex">
                <div className="flex gap-2">
                    <div className="magneta-strong">
                        <Icon fontSize="40" />
                    </div>
                    <VStack className="gap-1">
                        <Heading size="small" className="group-hover:underline">
                            Registrer Nav-person
                        </Heading>
                        <BodyShort className="text-text-default hover:decoration-0">
                            Opprett en person med opplysninger som bare skal
                            brukes internt i Nav.
                        </BodyShort>
                    </VStack>
                </div>
            </div>
        </Link>
    )
}

export default MenuCard
