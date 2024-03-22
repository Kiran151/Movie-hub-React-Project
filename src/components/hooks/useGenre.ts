import { useEffect, useState } from "react"
import apiClient from "../../services/api-client";

interface Genre {
    id: number;
    name: string;
}
interface FetchGenreResponse {
    genres: Genre[]
}
const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 4, 15, 16, 17, 18, 19]

    useEffect(() => {
        setLoading(true)

        apiClient.get<FetchGenreResponse>('/genre/movie/list')
            .then((res) => {
                setGenres(res.data.genres)
                setLoading(false)

            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return { genres, error, isLoading }
}

export default useGenre;