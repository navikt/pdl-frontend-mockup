import OtherDetailsExpandable from '../other-details/OtherDetailsExpandable.tsx'
import {
    Alert,
    Heading,
    Radio,
    RadioGroup,
    Select,
    TextField,
    VStack,
} from '@navikt/ds-react'

const Sivilstand = () => {
    const handleChange = (val: string) => console.info(val)

    return (
        <OtherDetailsExpandable label="Sivilstand">
            <VelgSivilstand />
            <RadioGroup
                legend="Datotype (påkrevd)"
                onChange={handleChange}
                size="small"
            >
                <Radio value="sivilstandsdato">Sivilstandsdato</Radio>
                <Radio value="bekreftelsesdato">Bekreftelsesdato</Radio>
            </RadioGroup>
            <TextField
                label="Dato (påkrevd)"
                size="small"
                description="dd.mm.åååå"
                className="input-component-small"
            />
            <VStack gap="4" className="mt-2">
                <Heading size="small">Legg til ektefelle/partner</Heading>
                <TextField
                    label="Ektefelle/partners identitetsnummer"
                    size="small"
                    className="input-component-medium"
                ></TextField>
                <Alert variant="info" className="w-full">
                    Ektefelle/partner kan legges til på et senere tidspunkt.
                </Alert>
                <Alert variant="info" className="w-full">
                    Ektefelle/partner kan ikke registreres for sivilstandstypen.
                    Du kan fortsatt registrere sivilstanden.
                </Alert>
            </VStack>
        </OtherDetailsExpandable>
    )
}

export default Sivilstand

const VelgSivilstand = () => {
    return (
        <Select
            label="Velg sivilstand"
            size="small"
            className="input-component-medium"
        >
            <option value="">- Velg -</option>
            <option value="gift">Gift</option>
            <option value="enke/enkemann">Enke/Enkemann</option>
            <option value="gjenlevende partner">Gjenlevende partner</option>
            <option value="registrert partner">Registrert partner</option>
            <option value="separert">Separert</option>
            <option value="separert partner">Separert partner</option>
            <option value="skilt">Skilt</option>
            <option value="skilt partner">Skilt partner</option>
            <option value="ugift">Ugift</option>
        </Select>
    )
}
