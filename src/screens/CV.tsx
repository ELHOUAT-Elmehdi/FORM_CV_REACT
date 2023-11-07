import '../components/Moncv.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Pr } from '../components/Pr';
import { Informationsp } from '../components/Informationsp';
import { Photoo } from '../components/Photoo';
import { Intérêts } from '../components/Intérêts';
import { Fr } from '../components/Fr';
import { Competencesling } from '../components/Competencesling';
import { Compeetences } from '../components/Compeetences';
import { Competencestech } from '../components/Competencestech';
import { Descriptiondelobjectifprofessionnel } from '../components/Descriptiondelobjectifprofessionnel';
import { Titredelapage } from '../components/Titredelapage';

export const  CV = () => {
  return (
      <>
      <Titredelapage />
      <body className='cvbody'>
        <div className='cv-container'>  
          <div className='cv-column1'>
            <Photoo />
            <Header name='ELHOUAT' />
            <Pr />
            <Informationsp />
            <Fr />
          </div>
          <div className='cv-column2'>
            <Descriptiondelobjectifprofessionnel />
            <Compeetences />
            <Competencestech />
            <Competencesling />
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


