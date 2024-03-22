import React from 'react'
import useGenre from './hooks/useGenre'
import { Button, HStack, List, ListItem, SkeletonCircle, Spinner, Text } from '@chakra-ui/react'
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
        <List>
            {genres.map(genre => <ListItem key={genre.id} paddingY={3}>
                <HStack>
                    <SkeletonCircle borderRadius={0} />
                    <Button onClick={() => onSelectGenre(genre)
                    } fontSize="lg" variant='ghost' fontWeight={genre.id == selectedGenre?.id ? 'bold' : 'normal'}>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList