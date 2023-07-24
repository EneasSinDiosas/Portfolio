
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch.hook';
import { CardLayout } from '../components/atoms/CardWeather/CardLayout.component';
import { CardDay } from '../components/atoms/CardWeather/CardDay.component';
import { Input } from '../components/atoms/Input/Input.component';
import { Button } from '../components/atoms/Button/Button.component';
import { Logout } from '../components/atoms/Button/Logout.component';
import { HomeButton } from '../components/atoms/Button/HomeButton.component';
import SearchIcon from '@mui/icons-material/Search';


export interface Weather {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: Text;
  icon: Icon;
  code: number;
}

export enum Icon {
  CDNWeatherapiCOMWeather64X64Day113PNG = "//cdn.weatherapi.com/weather/64x64/day/113.png",
  CDNWeatherapiCOMWeather64X64Day116PNG = "//cdn.weatherapi.com/weather/64x64/day/116.png",
  CDNWeatherapiCOMWeather64X64Day122PNG = "//cdn.weatherapi.com/weather/64x64/day/122.png",
  CDNWeatherapiCOMWeather64X64Night113PNG = "//cdn.weatherapi.com/weather/64x64/night/113.png",
  CDNWeatherapiCOMWeather64X64Night116PNG = "//cdn.weatherapi.com/weather/64x64/night/116.png",
}

export enum Text {
  Clear = "Clear",
  Overcast = "Overcast",
  PartlyCloudy = "Partly cloudy",
  Sunny = "Sunny",
}

export enum WindDir {
  Nw = "NW",
  Sw = "SW",
  W = "W",
  Wnw = "WNW",
  Wsw = "WSW",
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}


export const Weather5days = () => {
  
    const [location, setLocation] = useState<string>('Cáceres')
    const {data, fetchData} = useFetch<Weather>({url: `https://api.weatherapi.com/v1/forecast.json?key=d2a0aa31e609406ca8382121231307&q=${location}&days=5&aqi=no&alerts=no&lang=es`})
  
    return (
      <div className='w-screen h-screen overflow-y-auto items-center justify-center flex flex-col bg-gradient-to-b from-lime-100 to-green-200 dark:bg-gradient-to-b dark:from-emerald-800  dark:to-teal-950'>
        <CardLayout>
          <h1 className='text-6xl antialiased font-bold text-teal-700 dark:text-green-200'>{data?.location.name}</h1>
          <h2 className='text-lg font-semibold text-teal-700 dark:text-green-200'>{data?.location.country}</h2>
          <img src={data?.current.condition.icon} alt={data?.current.condition.text} className='w-28 align-center' />
          <h3 className='text-5xl font-semibold text-teal-700 dark:text-green-200'>{data?.current.temp_c}</h3>
          <div className=' flex px-4 py-5 flex-row items-center w-full justify-between bg bg-contain overflow-x-auto'>
            {data?.forecast.forecastday.map((day) => (<CardDay day={day}/>))}
          </div>
            <div className='flex flex-row'>
              <Input value={location} onChange={(e) => setLocation(e.target.value)}>Ciudad y país</Input>
              <Button onClick={fetchData}>
                  <SearchIcon/>
              </Button>
            </div>
            <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
              <HomeButton/>
              <Logout>Sing out</Logout>
            </div>
            
        </CardLayout>
      </div>
    )
  }