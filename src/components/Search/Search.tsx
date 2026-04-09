import { useWeatherStor } from '../../store/weatherStore'
import { useState, useCallback } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import './Search.css'



function Search() {
    const [ search, setSearch ] = useState("");
    const { setCity, setWeather } = useWeatherStor()
    const key = "b1c3afe011d6f345179bc77f5f7c6d56"
    const { refetch, isLoading } = useQuery({
        queryKey: ['city', search],
        queryFn: async () => {
            const { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric&lang=ru`
            )
            setCity(search)
            setWeather(data)
            return data;
        },
        enabled: false, 
        retry: false
    })
    

    const handleSearch = useCallback(() => {
        if (search.trim()) {
            refetch();
        }
    }, [search, refetch])



    return (
        <div className="search">
            <input 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="inputSearch"
                placeholder="city"
                type="text" />
            <button onClick={() => handleSearch()} className="btnSeach">{isLoading ? '...' : 'Search'}</button>
        </div>
    )
}

export default Search
