import OtherDetailsExpandable from '../../other-details/OtherDetailsExpandable.tsx'
import {
    Detail,
    HStack,
    Label,
    Radio,
    RadioGroup,
    Tabs,
    Tag,
    TextField,
    VStack,
} from '@navikt/ds-react'
import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons'
import { ReactNode, useRef, useState } from 'react'
import {
    DadIcon,
    MomIcon,
} from '../../../../../assets/icons/PersonCardIcons.tsx'

const Foreldre = () => {
    return (
        <div>
            <OtherDetailsExpandable label="Foreldre">
                <ForeldreTabs />
            </OtherDetailsExpandable>
        </div>
    )
}

export default Foreldre

const ForeldreTabs = () => {
    const [parents, setParents] = useState(['Forelder 1'])
    const [valueState, setValueState] = useState('Forelder 1')
    const [inputValue, setInputvalue] = useState('')
    const inputRef = useRef(null)

    const handleAddChild = () => {
        const newChild = `Forelder ${parents.length + 1}`
        setParents([...parents, newChild])
        setValueState(newChild)
    }

    const handleRemoveChild = (parentToRemove: string) => {
        setParents(parents.filter((parent) => parent !== parentToRemove))
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputvalue(e.target.value)
    }

    const name1 = 'test 1'
    const name2 = 'test 2'

    const handleTabChange = (newValue: string) => {
        setValueState(newValue)
        setInputvalue('')
    }

    const handleChange = (val: string) => console.info(val)

    return (
        <Tabs
            value={valueState}
            onChange={handleTabChange}
            size="small"
            className="min-w-[305px]"
        >
            <Tabs.List className="flex items-end">
                {parents.map((parent, index) => (
                    <Tabs.Tab
                        key={index}
                        value={parent}
                        label={`Forelder ${index + 1}`}
                        className="pl-1 w-fit text-nowrap"
                        icon={
                            <XMarkIcon
                                onClick={() => handleRemoveChild(parent)}
                                className="hover:bg-bg-subtle rounded"
                            />
                        }
                    />
                ))}

                <Tabs.Tab
                    value="legg til forelder"
                    label="Legg til forelder"
                    icon={<PlusCircleIcon aria-hidden />}
                    onClick={(e) => {
                        e.preventDefault()
                        handleAddChild()
                    }}
                    className="pl-2 text-nowrap"
                />
            </Tabs.List>
            {parents.map((parent, index) => (
                <Tabs.Panel key={index} value={parent} className="w-full py-6">
                    <VStack gap="6">
                        <RadioGroup
                            legend="Foreldrerolle"
                            onChange={handleChange}
                            size="small"
                        >
                            <Radio value="10">Mor</Radio>
                            <Radio value="20">Medmor</Radio>
                            <Radio value="40">Far</Radio>
                        </RadioGroup>
                        <TextField
                            ref={inputRef}
                            onChange={handleInputChange}
                            label="Norsk identitetsnummer"
                            size="small"
                            className="input-component-medium"
                        ></TextField>
                        {inputValue === name1 ? (
                            <PersonCard
                                icon={<DadIcon />}
                                name="Lars-Kristian Rustad"
                                birthdate="02.02.1987"
                            />
                        ) : null}
                        {inputValue === name2 ? (
                            <PersonCard
                                icon={<MomIcon />}
                                name="Cecilie Arntsen"
                                birthdate="06.11.1989"
                            />
                        ) : null}
                    </VStack>
                </Tabs.Panel>
            ))}
        </Tabs>
    )
}

interface PersonCardProps {
    name: string
    birthdate: string
    icon: ReactNode
    tag?: boolean
    tagtitle?: string
}

const PersonCard = ({
    name,
    icon,
    birthdate,
    tag,
    tagtitle,
}: PersonCardProps) => {
    return (
        <div className="py-4 px-3 border border-border-subtle rounded-md">
            <HStack gap="2" align="start">
                {icon}
                <VStack>
                    <Label>{name}</Label>
                    <Detail>{birthdate}</Detail>
                    {tag && (
                        <div className="mt-2">
                            <Tag
                                variant="info"
                                size="xsmall"
                                className="w-fit tagstyling"
                            >
                                {tagtitle}
                            </Tag>
                        </div>
                    )}
                </VStack>
            </HStack>
        </div>
    )
}
