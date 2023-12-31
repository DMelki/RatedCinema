import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, } from 'react-icons/bs'

import MovieCard from "../components/MovieCard"

import './Movie.css'
import Footer from "../components/Footer"
import { MdFolderCopy } from "react-icons/md"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data)
    };

    const fromatCurrency = (number) => {
        return number.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })
    }
     
    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-br`
        getMovie(movieUrl)
    }, []);

    return(
        <>
        <div className="movie-page">
            {movie && <>
            <MovieCard movie={movie} showLink={false}/>
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3><BsWallet2 />Orçamento:
                </h3>
                <p>{fromatCurrency(movie.budget * 4.89)}</p>
            </div>
            <div className="info">
                <h3><BsGraphUp />Faturamento:
                </h3>
                <p>{fromatCurrency(movie.revenue * 4.89)}</p>
            </div>
            <div className="info">
                <h3><BsHourglassSplit />Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
            </div>
            <div className="info description">
                <h3 ><BsFillFileEarmarkTextFill />Descrição:
                </h3>
                <p>{movie.overview}</p>
            </div>
            </>}
        </div>
        <Footer />
        </>
    )
}

export default Movie