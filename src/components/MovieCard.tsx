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
            <Text fontWeight='bold'>{movie.original_title}</Text>
            <HStack justifyContent="space-between">
                <Text fontSize={13} fontWeight='bold' color={'gray'}>{movie.release_date}</Text>
                <Text fontSize={13} fontWeight='bold' color={'gray'} whiteSpace='nowrap'><FaRegStar color='gold' />{movie.vote_average}</Text>
            </HStack>
        </CardBody>
    </Card>
)

export default MovieCard