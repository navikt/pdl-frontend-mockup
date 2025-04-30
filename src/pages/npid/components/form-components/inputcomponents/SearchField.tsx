import { UNSAFE_Combobox } from '@navikt/ds-react'
import '../../../NPIDForm.css'

interface SearchFieldProps {
    options: string[]
    label: string
}

const SearchField = ({ options, label }: SearchFieldProps) => {
    return (
        <UNSAFE_Combobox
            label={label}
            options={options}
            size="small"
            className="input-component-medium"
            shouldAutocomplete
        />
    )
}

export default SearchField
