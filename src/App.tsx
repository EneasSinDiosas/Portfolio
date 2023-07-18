import { useNavigate } from 'react-router-dom';
import { Abutton } from "./components/atoms/Abutton/Abutton.component"
import linkImageProfile from './assets/images/profilePhoto.jpg'
import linkImage from './assets/images/linkedIn.png';
import linkImageGit from './assets/images/github.png';
import { NavButton } from './components/atoms/Button/NavButton.component.tsx';


const App = () => {

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen items-center flex flex-col  bg-gradient-to-b from-emerald-600 to-teal-950" >
      <nav className="w-screen h-fit text-green-200 text-xl p-3 flex flex-row bg-neutral-100 bg-opacity-5">
        <NavButton text='Login' className='hover:scale-95' onClick={() => navigate('/login')} />
        <NavButton text='Registro' className='hover:scale-95' onClick={() => navigate('/register')} />
        <NavButton text='Contact me' className='hover:scale-95' onClick={() => navigate('/contactme')} />
        <NavButton text='Weather' className='hover:scale-95' onClick={() => navigate('/weather5days')} />
          <Abutton href="https://www.linkedin.com/in/maria-garzo-6a8831260/" src={linkImage} />
          <Abutton href="https://github.com/EneasSinDiosas" src={linkImageGit} />
      </nav>
      <div className='w-5/6 flex flex-col m-4 p-2  '>
      <div className="grid grid-cols-3 m-4">
        <header className=" w-5/6 m-2 grid grid-cols-3 px-5 py-3 col-span-2">
          <img src={linkImageProfile} alt="profilePhoto" className="rounded-2xl mr-6 my-1.5 shadow-lg content-start col-start-1 col-end-1"></img>
          <h1 className="text-green-200 text-3xl p-1.5 pt-8 font-semibold col-start-2 col-end-3 content-center text-center subpixel-antialiased tracking-wider">
            María Garzo Pulido
            <figcaption className="italic text-xl mt-3 font-normal text-emerald-100">Desarrollo FullStack</figcaption>
          </h1>
        </header>
        <main className="bg-emerald-900 w-5/6 shadow-2xl flex rounded-xl px-5 py-4 col-start-3 col-end-3 flex-col">
          <h1 className="text-green-200 text-lg">About me</h1>
          <p className="text-emerald-100 pt-1.5">Estudié Filología hispánica, pero mi interés siempre ha estado enfocado en el ámbito de la programación.
            Durante la carrera estudié humanidades digitales y ahora me estoy especializando en desarrollo de páginas web con bases de datos relacionales. Soy una persona trabajadora, creativa y proactiva. Ambiciosa, entusiasta en seguir creciendo y evolucionando en la profesión, sobre todo en desarrollar constantemente nuevas habilidades y capacidades</p>
        </main>
      </div>
      <footer className="my-10 p-10 items-center text-center ">
        <h1 className="text-green-200">Contact me </h1>
        <div className="flex flex-row mt-1.5 items-center justify-center">
          <Abutton href="https://www.linkedin.com/in/maria-garzo-6a8831260/" src={linkImage} />
          <Abutton href="https://github.com/EneasSinDiosas" src={linkImageGit} />
        </div>
      </footer>
    </div>
      </div>
  )
}

export default App
