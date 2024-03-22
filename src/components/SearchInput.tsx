import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { CiSearch } from "react-icons/ci";

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onChange={event => {
            event.preventDefault()
            if (ref.current) onSearch(ref.current.value)
        }} style={{ width: '50%' }}>
            <InputGroup>
                <InputLeftElement children={<CiSearch />} />
                <Input ref={ref} placeholder='Search Movies...' borderRadius={20} variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchInput