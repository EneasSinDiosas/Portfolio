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
      <nav className="w-full h-fit text-green-200 text-xl p-3 flex flex-row">
        <NavButton text='Login' onClick={() => navigate('/login')} />
        <NavButton text='Registro' onClick={() => navigate('/register')} />
        <NavButton text='Contact me' onClick={() => navigate('/contactme')} />
        <NavButton text='Weather' onClick={() => navigate('/weather5days')} />
          <Abutton href="https://www.linkedin.com/in/maria-garzo-6a8831260/" src={linkImage} />
          <Abutton href="https://github.com/EneasSinDiosas" src={linkImageGit} />
      </nav>
      <div className="flex flex-col md:flex-row w-5/6">
        <header className=" w-5/6 m-2 px-5 py-3 flex flex-col md:flex-row">
          <img src={linkImageProfile} alt="profilePhoto" className="rounded-2xl mr-6 my-1.5 shadow-lg content-start"></img>
          <h1 className="text-green-200 text-3xl p-1.5 pt-8 font-semibold col-start-2 col-end-3 content-center text-center subpixel-antialiased tracking-wider">
            María Garzo Pulido
            <figcaption className="italic text-xl mt-3 font-normal text-emerald-100">Desarrollo FullStack</figcaption>
          </h1>
        </header>
        <main className="bg-emerald-900 w-5/6 shadow-2xl m- flex rounded-xl px-5 py-4  flex-col">
          <h1 className="text-green-200 text-lg">About me</h1>
          <p className="text-emerald-100 pt-1.5">Estudié Filología hispánica, pero mi interés siempre ha estado enfocado en el ámbito de la programación.
            Durante la carrera estudié humanidades digitales y ahora me estoy especializando en desarrollo de páginas web con bases de datos relacionales. Soy una persona trabajadora, creativa y proactiva. Ambiciosa, entusiasta en seguir creciendo y evolucionando en la profesión, sobre todo en desarrollar constantemente nuevas habilidades y capacidades</p>
        </main>
      </div>
      <footer className="grid my-10 p-10">
        <h1 className="text-green-200">Contact me </h1>
        <div className="flex flex-row mt-1.5">
          <Abutton href="https://www.linkedin.com/in/maria-garzo-6a8831260/" src={linkImage} />
          <Abutton href="https://github.com/EneasSinDiosas" src={linkImageGit} />
        </div>
      </footer>
    </div>
  )
}

export default App
