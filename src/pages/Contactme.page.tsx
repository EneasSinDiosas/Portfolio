import { Input } from '../components/atoms/Input/Input.component';
import { Button } from '../components/atoms/Button/Button.component';
import { Textarea } from '../components/atoms/Textarea/Textarea.component';
import { CardLayout } from '../components/atoms/CardWeather/CardLayout.component';
import { HomeButton } from '../components/atoms/Button/HomeButton.component';

export const Contactme = () => {
    
    return(
        <div className="w-screen h-screen overflow-y-auto items-center justify-center flex flex-col bg-gradient-to-b from-lime-100 to-green-200 dark:bg-gradient-to-b dark:from-emerald-800  dark:to-teal-950">
           <CardLayout>
            <h1 className="text-teal-700 font-bold dark:text-green-200">Contact me </h1>
                    <Input>Nombre</Input>
                    <Input>Correo electrónico</Input>
                    <Textarea>Escribeme</Textarea>
                    <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
                        <Button>Envíar</Button>
                        <HomeButton/>
                    </div>
           </CardLayout>
        </div>
    )
}