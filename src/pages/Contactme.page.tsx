import TelegramIcon from '@mui/icons-material/Telegram';
import emailjs from '@emailjs/browser';
import { Input } from '../components/atoms/Input/Input.component';
import { Button } from '../components/atoms/Button/Button.component';
import { Textarea } from '../components/atoms/Textarea/Textarea.component';
import { CardLayout } from '../components/atoms/CardWeather/CardLayout.component';
import { HomeButton } from '../components/atoms/Button/HomeButton.component';
import { useRef, useContext } from 'react';
import { FormEvent } from 'react';
import { Abutton } from '../components/atoms/Abutton/Abutton.component';
import { AppContext } from '../context/App.context';
import linkedInLight from '../assets/images/linkedinLightMode.svg';
import linkedIndark from '../assets/images/linkedinDarkMode.svg'
import githubLight from '../assets/images/githubLightMode.svg';
import githubDark from '../assets/images/github.png'
import RssFeedIcon from '@mui/icons-material/RssFeed';

export const Contactme = () => {
  const {colorTheme} = useContext(AppContext);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
    .sendForm(
        'service_2lol3fj', 
        'template_z6omz03', 
        form.current as HTMLFormElement, 
        'GisKrUbY4VmiqBrEq')
      .then(
        (result) => {
          console.log(result.text);
          alert('Mensaje enviado');
      }, 
        (error) => {
          console.log(error.text);
      });
  };
    return(
        <div className="w-screen h-screen overflow-y-auto items-center justify-center flex flex-col bg-gradient-to-b from-lime-100 to-green-200 dark:bg-gradient-to-b dark:from-emerald-800  dark:to-teal-950">
           <CardLayout>
            <h1 className="text-teal-700 font-bold dark:text-green-200">Contact me </h1>
                   <form ref={form} onSubmit={sendEmail}>
                   <input type="hidden" name="contact_number"/>
                   <Input type='text' name='contact-name'>Nombre</Input>
                    <Input type="email" name="user_email">Correo electrónico</Input>
                    <Textarea name="message">Escribeme</Textarea>
                    <div className='flex flex-row w-full mt-3 gap-2 justify-end items-end'>
                        <Button type='submit'>
                            <TelegramIcon/>
                        </Button>
                        <HomeButton/>
                    </div>
                   </form>
            
                <h1 className='text-teal-800 dark:text-green-200'><RssFeedIcon fontSize='large'/>Mis RRSS</h1>
            <div className='flex flex-row'>
                <Abutton href="https://www.linkedin.com/in/maria-garzo-6a8831260/" src={colorTheme === 'dark' ? linkedIndark : linkedInLight}/>
                <Abutton href="https://github.com/EneasSinDiosas" src={colorTheme === 'dark' ? githubDark : githubLight} />
            </div>
           </CardLayout>
        </div>
    )
}