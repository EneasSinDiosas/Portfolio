import { FC } from 'react';

interface SquareProps{
    value?: string,
    onClick?: () => void,
}

export const Square: FC<SquareProps> = ({value, onClick})  => {
  return (
    <button id='square' onClick={onClick} className='flex basis-1/3 items-center justify-center text-3xl font-bold text-teal-800 border-2 border-green-300 font-sans dark:text-lime-200 dark:border-green-700'>
        {value}
    </button>
  )
}

