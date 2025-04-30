import { InternalHeader, Spacer } from '@navikt/ds-react'

const Header = () => {
    return (
        <InternalHeader>
            <InternalHeader.Title href="/">
                Personopplysninger
            </InternalHeader.Title>
            <Spacer />
            <InternalHeader.User name="Bendik Berntsen" />
        </InternalHeader>
    )
}

export default Header
