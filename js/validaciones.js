//author amorenocamacho.guadalupe@alumnado.fundacionloyola.net
'use strict';

console.log('Cargado JS');

//Añadimos un escuchador de eventos para el select de cursos
let input = document.getElementById('sCurso');
input.addEventListener('change', seleccionCurso);

//Añadimos un escuchador de eventos para el boton para poner a 0
let boton = document.getElementById('btnCero');
boton.addEventListener('click', ponerCero);

//Añadimos un escuchador de eventos para los distintos campos numericos
document.getElementById('iCalculo1').addEventListener('change', ponerMedia);
document.getElementById('iCalculo2').addEventListener('change', ponerMedia);
document.getElementById('iCalculo3').addEventListener('change', ponerMedia);

function seleccionCurso(){
  let seleccion = document.getElementById('sCurso');
  let primero = ['Programación', 'Base de datos', 'Sistemas informaticos', 'Fol', 'Lenguaje de marca', 'Entorno'];
  let segundo = ['DWEC', 'DWES', 'EIE', 'Despliegue', 'DIW'];

  let p = document.getElementById('selectP');
  let select = document.createElement('select');

  //Desarrollamos las posibilidades añadiendo un select con los distintos cursos
  //Estos cursos son options dentro del select, su contenido se expresa con
  //TextNode ya que esta dentro de la etiqueta y no como atributo de esta
  if(seleccion.value == '1DAW'){
    for (let i = 0;i < 6;i++){
      let option = document.createElement('option');
      option.setAttribute('value', primero[i]);
      let texto = document.createTextNode(primero[i]);
      option.appendChild(texto);
      select.appendChild(option);
    }
    select.setAttribute('id', 'primero');

    //Borramos el select segundo si existiera por si el usuario cambiara
    //su seleccion
    let segundo = document.getElementById('segundo')
    if(segundo){
      p.removeChild(segundo);
    }
  }
  else if (seleccion.value == '2DAW'){
      for (let j = 0;j < 5;j++){
        let option = document.createElement('option');
        option.setAttribute('value', segundo[j]);
        let texto = document.createTextNode(segundo[j]);
        option.appendChild(texto);
        select.appendChild(option);
        select.setAttribute('id', 'segundo');
      }
      select.setAttribute('id', 'segundo');

      //Borramos el select primero si existiera por si el usuario cambiara
      //su seleccion
      let primero = document.getElementById('primero')
      if(segundo){
        p.removeChild(primero);
      }
  }
  p.appendChild(select);
}

function ponerCero(){
  document.getElementById('iCalculo1').value = 0;
  document.getElementById('iCalculo2').value = 0;
  document.getElementById('iCalculo3').value = 0;
  while (document.getElementById('spanMedia').firstChild) {
    document.getElementById('spanMedia').removeChild(document.getElementById('spanMedia').lastChild);
  }
  document.getElementById('spanMedia').appendChild(document.createTextNode('0'));
}

function ponerMedia(){
  let suma = parseFloat(document.getElementById('iCalculo1').value) + parseFloat(document.getElementById('iCalculo2').value) + parseFloat(document.getElementById('iCalculo3').value);
  let media = document.createTextNode(suma /= 3);
  //borramos todos los hijos para que no se acoplen las medias
  while (document.getElementById('spanMedia').firstChild) {
    document.getElementById('spanMedia').removeChild(document.getElementById('spanMedia').lastChild);
  }
  document.getElementById('spanMedia').appendChild(media);
}
