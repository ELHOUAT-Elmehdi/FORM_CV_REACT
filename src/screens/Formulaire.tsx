import "../components/For.css";
import { TitreCv } from "../components/TitreCv";
import { Titredelapage } from "../components/Titredelapage";
import { Adr } from "../components/Adr";
import { Age } from "../components/Age";
import { Bday } from "../components/Bday";
import { Autre } from "../components/Autre";
import { Diplome } from "../components/Diplome";
import { Email } from "../components/Email";
import { Familiale } from "../components/Familiale";
import { Fname } from "../components/Fname";
import { Lname } from "../components/Lname";
import { Objectifs } from "../components/Objectifs";
import { Phone } from "../components/Phone";
import { Submit } from "../components/Submit";
import { Competences } from "../components/Competences";
import { Competencestechniques } from "../components/Competencestechniques";
import { Formation } from "../components/Formation";
import { Interets } from "../components/Interets";
import { Profil } from "../components/Profil";




export const  Formulaire = ()=>  {
  
  return (
    <>
      <head>
        <div><Titredelapage /></div>
      </head>
      <body className="formbody" >
        <h1 className="formh1">Formulaire-CV</h1>
        <div>
          <form>
            <div><TitreCv /></div><br />
            <div><Fname /></div><br />
            <div><Lname /></div><br />
            <div><Age /></div><br />
            <div><Bday /></div><br />
            <div><Adr /></div><br />
            <div><Phone /></div><br />
            <div><Email /></div><br />
            <div><Familiale /></div><br />
            <div><Diplome /></div><br />
            <div><Profil /></div><br />
            <div><Formation /></div><br />
            <div><Competences /></div><br />
            <div><Competencestechniques /></div><br />
            <div><Objectifs /></div><br />
            <div><Interets /></div><br />
            <div><Autre /></div><br />
            <div><Submit /></div><br />
          </form>
        </div>
      </body>
    </>
  );
}
