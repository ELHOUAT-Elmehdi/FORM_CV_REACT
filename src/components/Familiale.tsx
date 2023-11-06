export const Familiale=()=>{
    return(
        <div>        
            <label htmlFor="familiale">La situation familiale :</label>    
            <label htmlFor="Célibataire">Célibataire</label>
            <input type="radio" id="Célibataire" name="familiale" value="Célibataire"/>
            <label htmlFor="Marié(e)">Marié(e)</label>
            <input type="radio" id="Marié(e)" name="familiale" value="Marié(e)"/>
            <label htmlFor="Divorcé(e)">Divorcé(e)</label>
            <input type="radio" id="Divorcé(e)" name="familiale" value="Divorcé(e)"/>
        </div>
    )
}