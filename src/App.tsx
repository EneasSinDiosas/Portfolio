import { useNavigate } from 'react-router-dom';
import { Abutton } from "./components/atoms/Abutton/Abutton.component"
import linkImageProfile from './assets/images/profilePhoto.jpg'
import linkedInLight from './assets/images/linkedinLightMode.svg';
import linkedIndark from './assets/images/linkedinDarkMode.svg'
import githubLight from './assets/images/githubLightMode.svg';
import githubDark from './assets/images/github.png'
import { NavButton } from './components/atoms/Button/NavButton.component.tsx';
import { ButtonTheme } from './components/atoms/Button/ButtonTheme.component.tsx';
import { AppContext } from './context/App.context.tsx';
import { useContext } from 'react';
import { WeatherButton } from './components/atoms/Button/WeatherButton.component.tsx';
import LoginIcon from '@mui/icons-material/Login';
//colorMode === 'light' ?  :
/**/
const App = () => {
  const {colorTheme} = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen overflow-y-auto items-center flex flex-col bg-gradient-to-b from-lime-100 to-green-200 dark:bg-gradient-to-b dark:from-emerald-800  dark:to-teal-950" >
      <nav className="w-screen h-30 text-teal-700 text-base font-semibold p-3 flex flex-row justify-between bg-green-300 bg-opacity-20 content-center dark:text-green-200">
      <div className='justify-start flex flex-row items-center h-30'>
        <NavButton text='Sign in' className='hover:scale-95' onClick={() => navigate('/login')}>
          <LoginIcon/>
        </NavButton>
        <NavButton text='Sing up' className='hover:scale-95' onClick={() => navigate('/register')} />
        <NavButton text='Contact me' className='hover:scale-95' onClick={() => navigate('/contactme')} />
        <WeatherButton className='hover:scale-95'/>
      </div>
        <div className='justify-end flex flex-row items-center h-30'>
          <Abutton href="www.linkedin.com/in/maria-garzo-pulido" src={colorTheme === 'dark' ? linkedIndark : linkedInLight} />
          <Abutton href="https://github.com/EneasSinDiosas" src={colorTheme === 'dark' ? githubDark : githubLight} />
          <ButtonTheme/>
        </div>
         
      </nav>
      <div className='w-5/6 flex flex-col m-4 p-2  '>
      <div className="flex flex-col
                      md:grid md:grid-cols-3 md:m-4">
        <header className=" w-5/6 m-2 px-5 py-3
                            md:grid md:grid-cols-3 md:col-span-2">
          <img src={linkImageProfile} alt="profilePhoto" className="rounded-2xl mr-6 my-1.5 shadow-lg content-start col-start-1 col-end-1"></img>
          <h1 className="text-teal-700 font-serif text-3xl p-1.5 pt-8 font-semibold col-start-2 col-end-3 content-center text-center subpixel-antialiased tracking-wider dark:text-green-200">
            María Garzo Pulido
            <figcaption className="italic text-xl mt-3 font-normal dark:text-emerald-100">Desarrollo FullStack</figcaption>
          </h1>
        </header>
          <main className="bg-green-600 bg-opacity-5 w-5/6 shadow-lg rounded-lg flex px-6 py-4 md:col-start-3 md:col-end-3 flex-col dark:bg-emerald-900 dark:shadow-3xl">
            <h1 className="text-emerald-700 text-lg font-bold dark:text-green-200">About me</h1>
            <p className="text-teal-700 pt-1.5 dark:text-emerald-100 indent-3">Estudié Filología hispánica, pero mi interés siempre ha estado enfocado en el ámbito de la programación.
              Durante la carrera estudié humanidades digitales y ahora me estoy especializando en desarrollo de páginas web con bases de datos relacionales. Soy una persona trabajadora, creativa y proactiva. Ambiciosa, entusiasta en seguir creciendo y evolucionando en la profesión, sobre todo en desarrollar constantemente nuevas habilidades y capacidades.</p>
          </main>
      </div>
      <div className='flex flex-col items-center justify-center my-6 md:my-3'>
            <h1 className='text-emerald-700 text-lg font-bold dark:text-green-200'>Mis proyectos</h1>
            <NavButton className='hover:scale-95 italic font-bold text-emerald-700 hover:text-teal-600 hover:underline dark:text-green-200 dark:hover:text-lime-200 dark:hover:underline' onClick={() => navigate('/TikTakToe')}><h1>Tres en raya</h1></NavButton>
      </div>
      <footer className="my-10 p-10 items-center text-center ">
        <h1 className="text-teal-700 dark:text-green-200">Contact me </h1>
        <div className="flex flex-row mt-1.5 items-center justify-center">
          <Abutton href="www.linkedin.com/in/maria-garzo-pulido" src={colorTheme === 'dark' ? linkedIndark : linkedInLight}/>
          <Abutton href="https://github.com/EneasSinDiosas" src={colorTheme === 'dark' ? githubDark : githubLight} />
        </div>
      </footer>
    </div>
      </div>
  )
}

export default App
