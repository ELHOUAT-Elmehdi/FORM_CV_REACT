export const Diplome=()=>{
    return(
        <div>
            <label htmlFor="Diplome">Diplome :</label>
            <select id="Diplome" name="Diplome" required>
                <option value="">Sélectionnez un diplôme</option>
                <option value="DEUST">DEUST</option>
                <option value="DEUT">DEUT</option>
                <option value="Master">Master</option>
                <option value="Ingénieur d'Etat">Ingénieur d'Etat</option>   
                <option value="Doctorat">Doctorat</option>
                <option value="Autre">Autre</option>                      
            </select>
    </div>
    )
}
