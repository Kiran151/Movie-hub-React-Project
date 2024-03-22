import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { SimpleGrid, Text } from '@chakra-ui/react';
import MovieCard from './MovieCard';
import GameCardSkeleton from './GameCardSkeleton';


interface Movie {
    genre_ids: any;
    id: number;
    original_title: string;
    poster_path: string;
}

interface FetchMoviesResponse {
    page: number;
    results: Movie[]
}
interface Genre {
    id: number;
    name: string;
}
interface Props {
    selecedGenre: Genre | null;
    selectedType: string;
}
const MovieGrid = ({ selecedGenre, selectedType }: Props) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 4, 15, 16, 17, 18, 19]

    useEffect(() => {
        setLoading(true)
        let param = 'now_playing'
        if (selectedType == 'Now Playing') {
            param = 'now_playing'
        } else if (selectedType == 'Popular') {
            param = 'popular'
        } else if (selectedType == 'Top Rated') {
            param = 'top_rated'
        } else if (selectedType == 'Upcoming') {
            param = 'upcoming'
        }
        
        apiClient.get<FetchMoviesResponse>(`movie/${param}`)
            .then((res) => {
                if (selecedGenre) {
                    const filteredMovies = res.data.results.filter(movie => movie.genre_ids.includes(selecedGenre?.id));
                    setMovies(filteredMovies)

                } else {
                    setMovies(res.data.results)

                }
                setLoading(false)


            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [selecedGenre, selectedType])
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={4} padding={5}>
                {isLoading && skeletons.map((i) => <GameCardSkeleton key={i} />)}
                {isLoading == false && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </SimpleGrid>
        </>
    )
}

export default MovieGrid

function elseif(arg0: boolean) {
    throw new Error('Function not implemented.');
}
