import '../components/moncv.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Pr } from '../components/Pr';
import { Informations_p } from '../components/Informations_p';
import { Photo } from '../components/Photo';
import { Intérêts } from '../components/Intérêts';
import { Fr } from '../components/Fr';
import { Compétences_ling } from '../components/Compétences_ling';
import { Compétences } from '../components/Compétences';
import { Compétences_tech } from '../components/Compétences_tech';
import { Description_de_l_objectif_professionnel } from '../components/Description_de_l_objectif_professionnel';
import { Titredelapage } from '../components/Titredelapage';
import {Routes,Route,NavLink} from "react-router-dom";
export const  CV = () => {
  return (
      <>
      <Titredelapage />
      <body className='cvbody'>
        <nav className="a">
            <NavLink to="/" >Cv d'Elmehdi </NavLink>
            <NavLink to="/Formulaire" >Ajouter votre CV </NavLink>
        </nav>
        <div className='cv-container'>  
          <div className='cv-column1'>
            <Photo />
            <Header name='ELHOUAT' />
            <Pr />
            <Informations_p />
            <Fr />
          </div>
          <div className='cv-column2'>
            <Description_de_l_objectif_professionnel />
            <Compétences />
            <Compétences_tech />
            <Compétences_ling />
            <Intérêts />
          </div>
        </div>
        <footer >
          <Footer />
        </footer>
      </body>
      </>
  );
}


