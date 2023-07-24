import {FC} from "react";
import { Forecastday } from '../../../pages/Wheather5days.page';


interface CardDayProps{
    day?: Forecastday,
}

export const CardDay: FC<CardDayProps> = ({day}) =>{

    return (
        <div className='flex flex-row sm:flex-col bg-green-500 bg-opacity-5  dark:bg-emerald-50 dark:bg-opacity-20 items-center rounded-xl px-10 py-1.5 sm:px-16 m-8 sm:m-10 shadow-lg hover:scale-110 h-3/6 sm:h-auto'>
            <h1 className='text-sm sm:text-lg text-center text-teal-700 dark:text-green-200 text-opacity-80 font-bold antialiased tracking-widest items-center'>{day?.date}</h1>
            <img src={day?.day.condition.icon} alt={day?.day.condition.text} className='w-8 sm:w-12 align-center' />
            <div className='flex flex-col sm:flex-row'>
              <div className="m-1.5 items-center">
                <h2 className='text-xs sm:text-base text-start text-teal-700 dark:text-green-200'>Máximas   </h2>
                <p className='text-xs sm:text-base font-semibold text-teal-700 dark:text-teal-200'>{day?.day.maxtemp_c}</p>
              </div>
              <div className="m-1.5 items-center">
                <h2 className='text-xs sm:text-base  text-start text-teal-700 dark:text-green-200'>Mínimas   </h2>
                <p className='text-xs sm:text-base font-semibold text-teal-700 dark:text-teal-200'> {day?.day.mintemp_c}</p>
              </div>
            </div>
        </div>
    )
}