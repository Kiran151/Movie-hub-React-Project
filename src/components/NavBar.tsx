import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" paddingX={5}>
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default NavBar