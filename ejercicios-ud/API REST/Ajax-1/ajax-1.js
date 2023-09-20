
const ajax = new XMLHttpRequest() //Variable ajax que instancia del objeto XMLHttpRequest

ajax.addEventListener("readystatechange", () => { 

    if (ajax.readyState !== 4) return; 

    console.log(ajax)


    console.log(ajax.responseText)
    console.log(`La URL de la peticion es: ${ajax.responseURL}`)
    console.log(`El estado de la peticion es: ${ajax.readyState}`)
    console.log(`Estado de respuesta HTTP: ${ajax.status}`)
});

ajax.open("GET", "https://jsonplaceholder.typicode.com/posts/26");
ajax.send();
