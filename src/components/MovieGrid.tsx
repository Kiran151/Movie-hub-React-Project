import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import MovieCard from './MovieCard';
import GameCardSkeleton from './MovieCardSkeleton';
import ReactPaginate from 'react-paginate';
import MovieCardSkeleton from './MovieCardSkeleton';


interface Movie {
    genre_ids: any;
    id: number;
    original_title: string;
    poster_path: string;
}

interface FetchMoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
}
interface Genre {
    id: number;
    name: string;
}
interface Props {
    selecedGenre: Genre | null;
    selectedType: string;
    searchInput: string;
}
const MovieGrid = ({ selecedGenre, selectedType, searchInput }: Props) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [currentPage, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(10)


    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 4, 15, 16, 17, 18, 19]

    function handlePageClick(data: any) {
        setPage(data.selected + 1)
    }





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
        if (searchInput) {
            apiClient.get<FetchMoviesResponse>(`search/movie?query=${searchInput}&page=${currentPage}`)
                .then((res) => {
                    if (selecedGenre) {
                        const filteredMovies = res.data.results.filter(movie => movie.genre_ids.includes(selecedGenre?.id));
                        setMovies(filteredMovies)

                    } else {
                        setMovies(res.data.results)

                    }
                    setPageCount(res.data.total_pages)
                    setLoading(false)


                })
                .catch((err) => {
                    setError(err.message)
                    setLoading(false)
                })
        } else {
            apiClient.get<FetchMoviesResponse>(`movie/${param}?&page=${currentPage}`)
                .then((res) => {
                    if (selecedGenre) {
                        const filteredMovies = res.data.results.filter(movie => movie.genre_ids.includes(selecedGenre?.id));
                        setMovies(filteredMovies)

                    }
                    // else if (searchInput) {
                    //     const filteredMovies = res.data.results.filter(movie => movie.original_title.match(searchInput));
                    //     setMovies(filteredMovies)
                    // }
                    else {
                        setMovies(res.data.results)

                    }
                    setPageCount(res.data.total_pages)
                    setLoading(false)


                })
                .catch((err) => {
                    setError(err.message)
                    setLoading(false)
                })
        }


    }, [selecedGenre, selectedType, currentPage, searchInput])
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={4} padding={5}>
                {isLoading && skeletons.map((i) => <MovieCardSkeleton key={i} />)}
                {isLoading == false && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </SimpleGrid>
            {/* pagination */}
            {movies.length !== 0 && <Flex justifyContent='end' paddingRight={5}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="previous"
                    containerClassName='pagination justify-content-end'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-link'
                    nextClassName='page-link'
                    breakClassName='page-link'
                    activeClassName='active'

                // renderOnZeroPageCount={null}
                />
            </Flex>}

        </>
    )
}

export default MovieGrid
