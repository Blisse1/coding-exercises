const $descripcion = document.getElementById("descripcion");
console.log($descripcion);

const $descripcionP = document.querySelector("#descripcion");
console.log($descripcionP);

const $elementosLi = document.querySelectorAll("li");
console.log(`Hay ${$elementosLi.length} elementos en la lista.`);

for(let elemento of $elementosLi){
    console.log(elemento.outerHTML);
}


const $nuevoP = document.createElement("p");

document.body.appendChild($nuevoP);

const textoPegar = `En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de
Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas
finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis
programas tuvieron que interactuar con los 12 jueces manteniendo una conversación
mediante un computador durante cinco minutos en donde se plantean una serie de preguntas
con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno
logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa
Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12
jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.`;

$nuevoP.innerHTML = textoPegar;

$elem_ul = document.querySelector("body");
$elem_ul.insertAdjacentHTML("beforeend",`<a href="#">Enlace Principal</a>`);




const $h3 = document.createElement("h3");
document.body.appendChild($h3);
$h3.insertAdjacentHTML("beforeend", "Meses del año");

const $ul = document.createElement("ul");
document.body.appendChild($ul);

const mesesAño =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
"Noviembre", "Diciembre"];

mesesAño.forEach((mes) => { //Por cada elemento del arreglo agregar un li para agregarlo dentro del ul
  const $li = document.createElement("li");
  $li.textContent = mes; //el contenido de texto de la etiqueta li va a ser el elemento del arreglo
  $ul.appendChild($li); //Agregar los li al elemento ul
});



