import {
    Alert,
    BodyLong,
    Detail,
    HStack,
    Label,
    Radio,
    RadioGroup,
    TextField,
    VStack,
} from '@navikt/ds-react'
import { ReactNode, useEffect, useRef, useState } from 'react'
import {
    BoyIcon,
    DadIcon,
    GirlIcon,
    MomIcon,
} from '../../../../../assets/icons/PersonCardIcons.tsx'
import { MinusCircleIcon, PlusCircleIcon } from '@navikt/aksel-icons'
import {
    FolkeregisteretIcon,
    NavIcon,
} from '../../../../../assets/icons/DataLabelIcons.tsx'

const BarnV2 = () => {
    const [people, setPeople] = useState(['Barn 1'])
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (people.length === 0) {
            setIsActive(false)
        }
    }, [people])

    const handleAdd = () => {
        const newPerson = `Barn ${people.length}`
        setPeople([...people, newPerson])
    }

    const handleRemove = (personToRemove: string) => {
        setPeople(people.filter((person) => person !== personToRemove))
    }

    const handleNewAdd = () => {
        if (people.length === 0) {
            handleAdd()
            setIsActive(true)
        } else {
            setIsActive(true)
        }
    }

    return (
        <VStack>
            {!isActive && <AddButton onClick={handleNewAdd} />}
            {isActive &&
                people.map((person, index) => (
                    <>
                        <ChildrenExpanded
                            label={`Barn ${index + 1}`}
                            personToRemove={person}
                            key={index}
                            handleRemove={handleRemove}
                        />
                    </>
                ))}
            {isActive && (
                <div
                    className="p-1 w-full hover:bg-bg-subtle cursor-pointer group text-text-action"
                    onClick={handleAdd}
                >
                    <HStack align="center" gap="2">
                        <PlusCircleIcon fontSize="26" />
                        <Label
                            size="medium"
                            className="cursor-pointer group-hover:underline"
                        >
                            Legg til barn
                        </Label>
                    </HStack>
                </div>
            )}
        </VStack>
    )
}

export default BarnV2

interface ChildrenExpandedProps {
    label: string
    handleRemove: (personToRemove: string) => void
    personToRemove: string
}

const ChildrenExpanded = ({
    label,
    handleRemove,
    personToRemove,
}: ChildrenExpandedProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true)
        } else {
            handleRemove(personToRemove)
        }
    }

    return (
        <>
            <div
                className="p-1 w-full hover:bg-bg-subtle cursor-pointer group text-text-action"
                onClick={handleClick}
            >
                <HStack align="center" gap="2">
                    {!isOpen ? (
                        <PlusCircleIcon fontSize="26" />
                    ) : (
                        <MinusCircleIcon fontSize="26" />
                    )}

                    <Label
                        size="medium"
                        className="cursor-pointer group-hover:underline"
                    >
                        {label}
                    </Label>
                </HStack>
            </div>
            {isOpen && (
                <div className="border-l-1 border-border-subtle ml-4 w-full pr-4 flex-wrap">
                    <div className="pl-5 pt-2 pb-4 w-full flex flex-col gap-6">
                        <BarnForm />
                    </div>
                </div>
            )}
        </>
    )
}

interface AddButtonProps {
    onClick: () => void
}

const AddButton = ({ onClick }: AddButtonProps) => {
    return (
        <div
            className="p-1 w-full hover:bg-bg-subtle cursor-pointer group text-text-action"
            onClick={onClick}
        >
            <HStack align="center" gap="2">
                <PlusCircleIcon fontSize="26" />

                <Label
                    size="medium"
                    className="cursor-pointer group-hover:underline"
                >
                    Barn
                </Label>
            </HStack>
        </div>
    )
}

interface BarnFormProps {
    value?: string
}

const BarnForm = ({ value }: BarnFormProps) => {
    const [inputValue, setInputvalue] = useState('')
    const inputRef = useRef(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputvalue(e.target.value)
    }

    const test1 = 'test 1'
    const test2 = 'test 2'
    const test3 = 'test 3'

    const handleChange = (val: string) => console.info(val)

    return (
        <VStack gap="6" className="my-2" key={value}>
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
                label="Barnets identitetsnummer"
                size="small"
                className="input-component-medium"
            ></TextField>
            {inputValue === test1 ? (
                <PersonCard
                    icon={<BoyIcon />}
                    name="Torjus Andersen"
                    birthdate="02.02.2014"
                    tag={false}
                />
            ) : null}
            {inputValue === test2 ? (
                <PersonCard
                    icon={<GirlIcon />}
                    name="Cecilie Arntsen"
                    birthdate="06.11.2010"
                    variant="blue-bg"
                    tag={false}
                />
            ) : null}
            {inputValue === test3 ? (
                <div className="flex flex-col gap-8">
                    <VStack gap="2">
                        <PersonCard
                            icon={<GirlIcon />}
                            name="Cecilie Arntsen"
                            birthdate="06.11.2010"
                            variant="blue-bg"
                            tag={false}
                        />
                        <Alert variant="success" size="small">
                            Barnet er lagt til
                        </Alert>
                    </VStack>
                    <VStack className="w-full" gap="4">
                        <div className="flex flex-wrap gap-3">
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
                        </div>
                        <BodyLong size="small">
                            Personen er allerede registrert med en mor i
                            Folkeregisteret. Du kan fortsatt registrere
                            opplysningene i Nav, men du bør tipse
                            Folkeregisteret om avvik i opplysningene.
                        </BodyLong>
                    </VStack>
                </div>
            ) : null}
        </VStack>
    )
}

interface PersonCardProps {
    name: string
    birthdate: string
    icon: ReactNode
    tag: boolean
    tagtitle?: string
    variant?: 'blue-bg' | 'white-bg'
}

const PersonCard = ({
    name,
    icon,
    birthdate,
    tag,
    tagtitle,
    variant = 'white-bg',
}: PersonCardProps) => {
    const background =
        variant === 'white-bg' ? 'bg-bg-default' : 'bg-personcard-action'

    return (
        <div
            className={`py-4 px-3 border border-border-subtle rounded-md ${background} flex grow `}
        >
            <HStack gap="3" align="center">
                <VStack gap="2" align="center">
                    {icon}
                    {tagtitle === 'Far' ? (
                        <div className="bg-[#417DA0] px-1 text-white rounded-small">
                            <Detail>{tagtitle}</Detail>
                        </div>
                    ) : null}
                    {tagtitle === 'Mor' ? (
                        <div className="bg-[#B65781] px-1 text-white rounded-small">
                            <Detail>{tagtitle}</Detail>
                        </div>
                    ) : null}
                </VStack>
                <VStack className="h-full">
                    <Label>{name}</Label>
                    <Detail>{birthdate}</Detail>
                    {tag && (
                        <div className="flex h-full w-full">
                            <DataLabel variant="folkeregisterlabel" />
                        </div>
                    )}
                </VStack>
            </HStack>
        </div>
    )
}

interface DataLabelProps {
    variant: 'navlabel' | 'folkeregisterlabel'
}

interface DataLabelProps {
    variant: 'navlabel' | 'folkeregisterlabel'
}

const DataLabel = ({ variant }: DataLabelProps) => {
    return variant === 'folkeregisterlabel' ? (
        <HStack gap="1" align="center">
            <FolkeregisteretIcon />
            <Detail>Folkeregisteret</Detail>
        </HStack>
    ) : (
        <HStack gap="1" align="center">
            <NavIcon />
            <Detail>Nav</Detail>
        </HStack>
    )
}
