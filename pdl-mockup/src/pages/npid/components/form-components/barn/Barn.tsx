import OtherDetailsExpandable from '../../other-details/OtherDetailsExpandable.tsx'
import {
    Detail,
    Heading,
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
    BoyIcon,
    DadIcon,
    GirlIcon,
    MomIcon,
} from '../../../../../assets/icons/PersonCardIcons.tsx'

const Barn = () => {
    return (
        <div>
            <OtherDetailsExpandable label="Barn">
                <BarnTabs />
            </OtherDetailsExpandable>
        </div>
    )
}

export default Barn

const BarnTabs = () => {
    const [children, setChildren] = useState(['Barn 1'])
    const [valueState, setValueState] = useState('Barn 1')
    const [inputValue, setInputvalue] = useState('')
    const inputRef = useRef(null)

    const handleAddChild = () => {
        const newChild = `Barn ${children.length + 1}`
        setChildren([...children, newChild])
        setValueState(newChild)
    }

    const handleRemoveChild = (childToRemove: string) => {
        setChildren(children.filter((child) => child !== childToRemove))
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputvalue(e.target.value)
    }

    const name1 = 'test 1'
    const name2 = 'test 2'
    const name3 = 'test 3'

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
                {children.map((child, index) => (
                    <Tabs.Tab
                        key={index}
                        value={child}
                        label={`Barn ${index + 1}`}
                        className="pl-1 w-fit text-nowrap"
                        icon={
                            <XMarkIcon
                                onClick={() => handleRemoveChild(child)}
                                className="hover:bg-bg-subtle rounded"
                            />
                        }
                    />
                ))}

                <Tabs.Tab
                    value="legg til barn"
                    label="Legg til barn"
                    icon={<PlusCircleIcon aria-hidden />}
                    onClick={(e) => {
                        e.preventDefault()
                        handleAddChild()
                    }}
                    className="pl-2 text-nowrap"
                />
            </Tabs.List>
            {children.map((child, index) => (
                <Tabs.Panel key={index} value={child} className="w-full py-6">
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
                                icon={<BoyIcon />}
                                name="Torjus Andersen"
                                birthdate="02.02.2014"
                            />
                        ) : null}
                        {inputValue === name2 ? (
                            <PersonCard
                                icon={<GirlIcon />}
                                name="Cecilie Arntsen"
                                birthdate="06.11.2010"
                            />
                        ) : null}
                        {inputValue === name3 ? (
                            <>
                                <PersonCard
                                    icon={<GirlIcon />}
                                    name="Cecilie Arntsen"
                                    birthdate="06.11.2010"
                                />
                                <VStack gap="2">
                                    <Heading size="small">
                                        Foreldre registrert i Folkeregisteret
                                    </Heading>
                                    <PersonCard
                                        name="Kåre Sebastian Andersen"
                                        birthdate="02.02.1987"
                                        icon={<DadIcon />}
                                        tag
                                        tagtitle="Far"
                                    />
                                    <PersonCard
                                        name="Mona Turid Arntsen"
                                        birthdate="12.05.1989"
                                        icon={<MomIcon />}
                                        tag
                                        tagtitle="Mor"
                                    />
                                </VStack>
                            </>
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
