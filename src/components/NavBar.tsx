import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { useState } from 'react'
interface Props {
    setKeyword: (type: string) => void;
}
const NavBar = ({setKeyword}:Props) => {
    
    return (
        <HStack justifyContent="space-between" paddingX={5} marginBottom={8} marginTop={3}>
            <Image src={logo} boxSize="60px" />
            <SearchInput onSearch={(keyword) => setKeyword(keyword)} />
            <ColorModeSwitch></ColorModeSwitch>

        </HStack>
    )
}

export default NavBar