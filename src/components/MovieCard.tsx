import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react'

interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
}

interface Props {
    movie: Movie
}

const MovieCard = ({ movie }: Props) => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={'https://image.tmdb.org/t/p/original' + movie.poster_path} />
            <CardBody>
                <Heading fontSize={'16px'}>{movie.original_title}</Heading>
            </CardBody>
        </Card>
    )
}

export default MovieCard