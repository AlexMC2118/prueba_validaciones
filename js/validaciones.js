'use strict';

console.log('Cargado JS');

let input = document.getElementById('sCurso');
input.addEventListener('change', seleccionCurso);

let boton = document.getElementById('btnCero');
boton.addEventListener('click', ponerCero);

function seleccionCurso(){
  let seleccion = document.getElementById('sCurso');
  let primero = ['Programación', 'Base de datos', 'Sistemas informaticos', 'Fol', 'Lenguaje de marca', 'Entorno'];
  let segundo = ['DWEC', 'DWES', 'EIE', 'Despliegue', 'DIW'];

  let p = document.getElementById('selectP');
  let select = document.createElement('select');

  if(seleccion.value == '1DAW'){
    for (let i = 0;i < 6;i++){
      let option = document.createElement('option');
      option.setAttribute('value', primero[i]);
      let texto = document.createTextNode(primero[i]);
      option.appendChild(texto);
      select.appendChild(option);
    }
    select.setAttribute('id', 'primero');

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
}
