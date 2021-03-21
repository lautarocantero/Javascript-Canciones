//esto hace que todo lo que tengo en interfaz se exporte con UI adelante => UI.interfaz, etc
import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('click',buscarCancion);


function buscarCancion(e){

     e.preventDefault();

     const artista = document.querySelector('#artista').value;
     const cancion = document.querySelector('#cancion').value;
     
     if(artista === '' || cancion === ''){
          UI.divMensaje.textContent ='Debes llenar ambos campos!!';
          UI.divMensaje.classList.add('error');

          setTimeout(() => {
               UI.divMensaje.textContent = '';
               UI.divMensaje.classList.remove('error');
          }, 2000);

          return;
     }


     //consultar api

     const busqueda = new API(artista,cancion); 
     busqueda.consultarAPI();
}