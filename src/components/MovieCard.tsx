import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import placeholder from '../assets/placeholder.jpg'
import { FaRegStar } from 'react-icons/fa';


interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

interface Props {
    movie: Movie
}

const MovieCard = ({ movie }: Props) => (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : placeholder} />
        <CardBody alignContent={'end'}>
            <Text fontWeight='bold' fontSize={{
                base: '18px',  // base (mobile devices)
                sm: '18px',    // small devices (sm and above)
                md: '18px',    // medium devices (md and above)
                lg: '20px',    // large devices (lg and above)
                xl: '24px'     // extra-large devices (xl and above)
            }}>{movie.original_title}</Text>
            <HStack justifyContent="space-between">
                <Text fontSize={13} fontWeight='bold' color={'gray'}>{movie.release_date}</Text>
                <Text fontSize={13} fontWeight='bold' color={'gray'} whiteSpace='nowrap'><FaRegStar color='gold' />{movie.vote_average}</Text>
            </HStack>
        </CardBody>
    </Card>
)

export default MovieCard