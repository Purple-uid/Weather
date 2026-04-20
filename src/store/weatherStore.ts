import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { WeatherData } from "../types/types"

interface WeatherStor {
    city: string
    weather: WeatherData | null
    setCity: (name:  string) => void
    setWeather: (data: WeatherData) => void
}

export const useWeatherStore = create<WeatherStor>()(
  persist(
    (set) => ({
      city: 'Los Angeles',
      weather: null,
      setCity: (name) => set({ city: name }),
      setWeather: (data) => set({ weather: data }),
    }),
    { name: 'weather-store' }
  )
)