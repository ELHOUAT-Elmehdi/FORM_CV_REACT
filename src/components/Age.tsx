
export const Age=()=>{
    return(
        <div>
            <label htmlFor="age">Age :</label>
            <input type="number" id="age" min="18" max="99" value="18" name="age"  required/>
        </div>
    )
}