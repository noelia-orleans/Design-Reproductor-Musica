function Checkbox(){
    return(
        <div className="checkbox">
            <div className="checkizda">
                <label>
                   <input type="checkbox" defaultChecked /> Mostrar foto álbum 
                </label>
                <label>
                    <input type="checkbox" defaultChecked /> Mostrar letra
                </label>
                <label>
                   <input type="checkbox" /> Modo oscuro 
                </label>
                
                
            </div>

            <div className="checkdcha">
                <label>
                    <input type="checkbox" /> Reverberación
                </label>
                <label>
                   <input type="checkbox" /> Ecualizador 
                </label>
                <label>
                    <input type="checkbox" /> BassMode
                </label>
                
            </div>
        </div>
    );

}

export default Checkbox;