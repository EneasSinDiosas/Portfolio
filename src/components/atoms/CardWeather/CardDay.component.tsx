import {FC} from "react";
import { Forecastday } from '../../../pages/Wheather5days.page';


interface CardDayProps{
    day?: Forecastday,
}

export const CardDay: FC<CardDayProps> = ({day}) =>{

    return (
        <div className='flex flex-col  bg-emerald-50 bg-opacity-20 items-center rounded-xl px-16 m-10 shadow-lg'>
            <h1 className='text-lg text-center text-green-200 text-opacity-80 font-bold antialiased tracking-widest'>{day?.date}</h1>
            <img src={day?.day.condition.icon} alt={day?.day.condition.text} className='w-12 align-center' />
            <div className='flex flex-row '>
              <h2 className='mr-1.5 text-start'>Máximas: </h2>
              <p className='font-semibold'>{day?.day.maxtemp_c}</p>
            </div>
            <div className='flex flex-row '>
              <h2 className='mr-1.5 text-start'>Mínimas: </h2>
              <p className='font-semibold'> {day?.day.mintemp_c}</p>
            </div>
        </div>
    )
}