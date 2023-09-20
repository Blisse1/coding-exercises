const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
$lista = document.getElementById("lista"), //variable que hace referencia al nodo ol del HTML id="lista"
$fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange", () => { 

    if (ajax.readyState !== 4) return; 

    if (ajax.status >= 200 && ajax.status < 300) { //Si la respuesta es satisfactoria
        // json de arreglos
        let json = JSON.parse(ajax.responseText); //Convierte la respuesta Ajax en un objeto

        // console.log("La variable json es de tipo: " +  Array.isArray(json));

        //json es arr de objetos

        json.forEach(object => {
            console.log(object.name, object.username, object.email);
        })
        for (const key in json) { //recorre el objeto
            const $li = document.createElement("li"); //Crea el elemento li 
            $li.innerHTML = `${key}: ${json[key]}`; //Le asigna los valores del objeto al elemento li
            document.getElementsByName("ul");
            $fragmento.appendChild($li); //Agrega el elemento li al framento para luego insertarlo en el HTML
        }
        $lista.appendChild($fragmento); //Cuando termina de recorrer el objeto agrega los elementos li guardados en el fragmento al elemento lista
    } else { //Si la respuesta no es satisfactoria manda un mensaje de error
        let message = ajax.statusText || "Ocurrió un error";
        $lista.innerHTML = `Error ${ajax.status}: ${message}`;
    }
});

/*Abre la petición con el método GET.*/
    ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
/*envia la peticioN*/
    ajax.send();
