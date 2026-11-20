import { useState } from 'react';

function Barras(){
    const [volumen, setVolumen] = useState(50);
    const [reproduciendo, setReproduciendo] = useState(false);

    function cambiarVolumen(evento) {
        setVolumen(evento.target.value);
    }
    
    function alternarPlay() {
        setReproduciendo(!reproduciendo);
    }

    return(
        <div className="barras">
    
            <div className="barras-cancion">
                <p onClick={alternarPlay}>{reproduciendo ? '⏸️' : '▶️'}</p>
                <input type="range" min="0" max="100" defaultValue="50" />
                <p>🔊</p>
            </div>

            <div className="barras-sonido">
                <p>{volumen}</p>
                <input type="range" min="0" max="100" value={volumen} onChange={cambiarVolumen}/>
                <p>⏪</p>
                <p onClick={alternarPlay}>{reproduciendo ? '⏸️' : '▶️'}</p>
                <p>⏩</p>
                <p>🔊</p>
                
            </div>

    </div>
    );
}

export default Barras;