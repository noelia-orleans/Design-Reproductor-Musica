import imagenAlbum from './assets/imagen_album.jpg';

function Cancion(){
    return (
        <div class="cancion">
            <div class="imagen">
            <img src={imagenAlbum}></img> 
            </div>

            <div class="letra">
                <h2>Ese último momento</h2>
                <p>
                    Ahora que tengo la ocasión, quiero que hablemos los dos<br />
                    Tú de mí, yo de ti, del corazón que sí<br />
                    <p id="frase-actual">Que nunca es bueno el momento, hasta que no hay otra opción</p>
                    Siempre es el mismo cuento<br />
                    Ese último momento
                </p>
            </div>
            
        </div>

    );
}

export default Cancion;