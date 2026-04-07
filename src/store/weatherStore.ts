import { create } from "zustand"
import type { WeatherData } from "../types/types"

interface WeatherStor {
    city: string
    weather: WeatherData | null
    setCity: (name:  string) => void
    setWeather: (data: WeatherData) => void
}

export const useWeatherStor = create<WeatherStor>((set) => ({
    city: localStorage.getItem('city') || 'Los Angeles',

    weather: JSON.parse(localStorage.getItem('weather') || ('null')),

    setCity: (name) => set(() => {
        localStorage.setItem('city', (name));
        return { city: name };
    }),

    setWeather: (data) => set(() => {
        localStorage.setItem('weather', JSON.stringify(data));
        return { weather: data };
    })
}))