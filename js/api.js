

import * as UI from './interfaz.js';

class Api{
     constructor(artista, cancion){
          this.artista = artista;
          this.cancion = cancion;
     }

     consultarAPI(){
          const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
          UI.divResultado.textContent = '';
          UI.headingResultado.innerHTML = `<div class="spinner">
          <div class="cube1"></div>
          <div class="cube2"></div>
          </div>`;

          fetch(url)
               .then( respuesta => respuesta.json())
               .then( resultado => {
                    if(resultado.lyrics){
                         const {lyrics} = resultado;
                         UI.divResultado.textContent = lyrics;
                         UI.headingResultado.textContent = `${this.cancion} / ${this.artista}`; 
                         UI.formularioBuscar.reset();
                    }else{
                         UI.divMensaje.textContent ='No se encontró la cancion';
                         UI.divMensaje.classList.add('error');
                         setTimeout(() => {
                              UI.divMensaje.textContent = '';
                              UI.divMensaje.classList.remove('error');
                         }, 2000);
                    }

       
               })
               .catch(error => {   //no funciona
                    console.log(`hubo un error ${error}`);
 
               })

     }

}

export default Api;