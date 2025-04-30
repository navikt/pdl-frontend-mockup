import { ReactNode } from 'react'
import { PageBlock } from '@navikt/ds-react/Page'
import Header from '../header/Header.tsx'
import { VStack } from '@navikt/ds-react'

interface PageWrapperProps {
    children: ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <PageBlock>
            <VStack gap="4" className="items-center">
                <Header />
                {children}
            </VStack>
        </PageBlock>
    )
}
