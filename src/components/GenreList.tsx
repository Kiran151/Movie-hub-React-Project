import React from 'react'
import useGenre from './hooks/useGenre'
import { FaCaretDown } from 'react-icons/fa';
import { Button, HStack, List, ListItem, Menu, MenuButton, MenuItem, MenuList, SkeletonCircle, Spinner, Text } from '@chakra-ui/react'
interface Genre {
    id: number;
    name: string;
}
interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}


const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { genres, isLoading, error } = useGenre()
    if (isLoading) return <Spinner />
    if (error) return null


    return (
        <Menu>
            <MenuButton marginLeft={2} as={Button} rightIcon={<FaCaretDown />}>{selectedGenre ?selectedGenre.name:'Genre'}</MenuButton>
            <MenuList>
                {genres.map(genre => <MenuItem onClick={() => onSelectGenre(genre)
                } key={genre.id} paddingY={3}>
                    {genre.name}
                </MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default GenreList