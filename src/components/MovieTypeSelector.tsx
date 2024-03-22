import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa';

interface Props {
    onSelectType: (type: string) => void;
    selectedType: string;
}

const MovieTypeSelector = ({ onSelectType, selectedType }: Props) => {
    const types = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming'];

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FaCaretDown />}>{selectedType || 'Type'}</MenuButton>
            <MenuList>
                {types.map(type => <MenuItem onClick={() => onSelectType(type)}>{type}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default MovieTypeSelector