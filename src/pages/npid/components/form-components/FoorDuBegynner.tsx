import { Heading, HStack, Link, ReadMore } from '@navikt/ds-react'
import { ExternalLinkIcon } from '@navikt/aksel-icons'

const FoorDuBegynner = () => {
    return (
        <div className="flex flex-col gap-2">
            <Heading size="xsmall">Før du begynner</Heading>
            <HStack align="center" gap="2">
                <Link className="navds-body-short--small" href="/">
                    Har du sjekket om personen allerede er opprettet?
                    <ExternalLinkIcon fontSize="18" />
                </Link>
            </HStack>
            <ReadMore size="small" header="Skal personen opprettes som NPID?">
                <ul className="list-disc list-inside">
                    <li>
                        Navs personidentifikator (NPID) brukes bare internt i
                        Nav.
                    </li>
                    <li>
                        Det bør være avklart at ditt fagområde skal benytte
                        NPID.
                    </li>
                    <li>
                        NPID skal ikke brukes når personen har selvstendige
                        rettigheter i Norge, eller er medlem av folketrygden.
                    </li>
                </ul>
            </ReadMore>
        </div>
    )
}

export default FoorDuBegynner
