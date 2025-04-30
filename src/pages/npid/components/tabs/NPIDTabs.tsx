import {
    BarChartIcon,
    ClockDashedIcon,
    PersonPlusIcon,
} from '@navikt/aksel-icons'
import { Tabs } from '@navikt/ds-react'
import RegisterNPIDForm from '../../RegisterNPIDForm.tsx'

const NPIDTabs = () => {
    return (
        <Tabs defaultValue="opprett person" size="medium">
            <Tabs.List>
                <Tabs.Tab
                    value="opprett person"
                    label="Opprett person"
                    icon={<PersonPlusIcon aria-hidden />}
                />
                <Tabs.Tab
                    value="statusliste"
                    label="Statusliste"
                    icon={<ClockDashedIcon aria-hidden />}
                />
                <Tabs.Tab
                    value="statistikk"
                    label="Statistikk"
                    icon={<BarChartIcon aria-hidden />}
                />
            </Tabs.List>
            <Tabs.Panel value="opprett person" className="h-24 w-full py-8">
                <RegisterNPIDForm />
            </Tabs.Panel>
            <Tabs.Panel value="inbox" className="h-24 w-full bg-gray-50 p-4">
                Inbox-tab
            </Tabs.Panel>
            <Tabs.Panel value="sendt" className="h-24 w-full bg-gray-50 p-4">
                Sendt-tab
            </Tabs.Panel>
        </Tabs>
    )
}

export default NPIDTabs
