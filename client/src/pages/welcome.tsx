import '../styles/welcome.css';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';
import ButtonPrimary from '../components/buttons.tsx';
import { Link } from 'react-router-dom';
function Welcome() {

  return (
    <>
      <Header />
      <div className="containerOne">
        <div className="leftSide">
          <h1>Seccion de empleados</h1>
          <h3>Este programa fue creado independientemente como practica de programacion y para adicion a portafolio curricular.</h3>
          <Link to="/login"><ButtonPrimary>Iniciar Sesion</ButtonPrimary></Link>

        </div>

        <div className="rightSide">
          <img src="/imgs/icons/workerDuck.png" alt="WorkerDuck" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Welcome;
