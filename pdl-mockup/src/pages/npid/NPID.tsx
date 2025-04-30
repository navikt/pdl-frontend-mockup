import { PageWrapper } from '../../components/wrappers/PageWrapper.tsx'
import { FormWrapper } from '../../components/wrappers/FormWrapper.tsx'
import { Heading } from '@navikt/ds-react'
import NPIDTabs from './components/tabs/NPIDTabs.tsx'

function Npid() {
    return (
        <PageWrapper>
            <FormWrapper>
                <Heading
                    size="large"
                    className="text-Brand-magenta-strong-default mb-8"
                >
                    Opprett NPID
                </Heading>
                <NPIDTabs />
            </FormWrapper>
        </PageWrapper>
    )
}

export default Npid
