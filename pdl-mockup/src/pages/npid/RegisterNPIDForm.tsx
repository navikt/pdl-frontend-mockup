import FoorDuBegynner from './components/form-components/FoorDuBegynner.tsx'
import SearchField from './components/form-components/inputcomponents/SearchField.tsx'
import { land, navenheter } from './utils/SearchFieldOptions.ts'
import './NPIDForm.css'
import {
    Heading,
    HStack,
    Label,
    Select,
    TextField,
    VStack,
} from '@navikt/ds-react'
import Sivilstand from './components/form-components/Sivilstand.tsx'
import UtenlandskIDNummer from './components/form-components/Utenlandsk ID-nummer.tsx'
import Foreldre from './components/form-components/foreldre/Foreldre.tsx'
import BarnV2 from './components/form-components/barn/BarnV2.tsx'

const RegisterNPIDForm = () => {
    return (
        <VStack gap="10" className="pb-96">
            <FoorDuBegynner />
            <SearchField options={navenheter} label="Velg Nav-enhet" />
            <Personopplysninger />
            <AndreOpplysninger />
        </VStack>
    )
}

export default RegisterNPIDForm

const Personopplysninger = () => {
    return (
        <>
            <VStack gap="3" className="mt-4">
                <div className="w-[20px] h-[4px] magneta-subtle"></div>
                <Heading
                    size="medium"
                    className="text-Brand-magenta-strong-default"
                >
                    Personopplysninger
                </Heading>
            </VStack>
            <VStack gap="8">
                <VStack gap="2">
                    <Label size="medium">
                        Fornavn og/eller etternavn (påkrevd)
                    </Label>
                    <HStack gap="4">
                        <TextField
                            label="Fornavn"
                            size="small"
                            className="input-component-medium text-text-subtle"
                        ></TextField>
                        <TextField
                            label="Etternavn"
                            size="small"
                            className="input-component-medium text-text-subtle"
                        ></TextField>
                    </HStack>
                </VStack>
                <HStack>
                    <VStack gap="2" className="w-full">
                        <Label size="small">
                            Fødselsdato og/eller fødselsår (påkrevd)
                        </Label>
                        <VStack gap="6">
                            <HStack gap="4" className="w-full">
                                <TextField
                                    label="dd.mm.åååå"
                                    size="small"
                                    className="input-component-small text-text-subtle"
                                ></TextField>
                                <TextField
                                    label="åååå"
                                    size="small"
                                    className="input-component-small text-text-subtle"
                                ></TextField>
                                <div className="input-component-medium">
                                    <VelgKjønn />
                                </div>
                            </HStack>
                            <VStack gap="6">
                                <HStack gap="4">
                                    <SearchField
                                        options={land}
                                        label="Landet personen ble født"
                                    />
                                    <TextField
                                        label="Stedet personen ble født"
                                        size="small"
                                        className="input-component-medium"
                                    />
                                </HStack>
                                <SearchField
                                    options={land}
                                    label="Statsborgerskap"
                                />
                            </VStack>
                        </VStack>
                    </VStack>
                </HStack>
            </VStack>
        </>
    )
}

const VelgKjønn = () => {
    return (
        <Select
            label="Kjønn (påkrevd)"
            size="small"
            className="input-component-small"
        >
            <option value="">- Velg -</option>
            <option value="mann">Mann</option>
            <option value="kvinne">Kvinne</option>
            <option value="ukjent">Ukjent</option>
        </Select>
    )
}

const AndreOpplysninger = () => {
    return (
        <VStack>
            <VStack gap="3" className="mb-4">
                <div className="w-[20px] h-[4px] magneta-subtle"></div>
                <Heading
                    size="medium"
                    className="text-Brand-magenta-strong-default"
                >
                    Andre opplysninger
                </Heading>
            </VStack>
            <VStack gap="2">
                <UtenlandskIDNummer />
                <Sivilstand />
                {/*<Barn />*/}
                <BarnV2 />
                <Foreldre />
            </VStack>
        </VStack>
    )
}
