import OtherDetailsExpandable from '../other-details/OtherDetailsExpandable.tsx'
import { HStack, TextField } from '@navikt/ds-react'
import SearchField from './inputcomponents/SearchField.tsx'
import { land } from '../../utils/SearchFieldOptions.ts'

const UtenlandskIDNummer = () => {
    return (
        <OtherDetailsExpandable label="Utenlandsk ID-nummer">
            <HStack gap="4">
                <SearchField options={land} label="Utstederland (påkrevd" />
                <TextField
                    label="Utenlandsk ID-nummer (påkrevd)"
                    size="small"
                    className="input-component-medium"
                />
            </HStack>
        </OtherDetailsExpandable>
    )
}

export default UtenlandskIDNummer
