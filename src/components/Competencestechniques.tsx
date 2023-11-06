export const Competencestechniques=()=>{
    return(
        <div>
            <label htmlFor="competences">Compétences techniques :</label>
            <textarea id="competences" required></textarea>
            <br/>
            <label htmlFor="L'expression orale :" id="eo">L'expression orale :</label>
            <input type="checkbox" value="L'expression orale :"/>
            <label htmlFor="La compréhension orale :">La compréhension orale :</label>
            <input type="checkbox"  value="La compréhension orale :"/>
            <label htmlFor="L'expression écrite :">L'expression écrite :</label>
            <input type="checkbox"  value="L'expression écrite :"/>
            <label htmlFor="La compréhension écrite :">La compréhension écrite :</label>
            <input type="checkbox"  value="La compréhension écrite :"/>
        </div>
    )
}