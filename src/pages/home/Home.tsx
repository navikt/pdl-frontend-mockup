import { PageWrapper } from '../../components/wrappers/PageWrapper.tsx'
import { VStack } from '@navikt/ds-react'
import MenuCard from '../../components/cards/menucards/MenuCard.tsx'
import { MenuWrapper } from '../../components/wrappers/MenuWrapper.tsx'
import { PersonPlusFillIcon } from '@navikt/aksel-icons'

function Home() {
    return (
        <PageWrapper>
            <MenuWrapper>
                <VStack className="max-w-2xl w-full px-4">
                    <MenuCard to="/npid" icon={PersonPlusFillIcon} />
                </VStack>
            </MenuWrapper>
        </PageWrapper>
    )
}

export default Home
