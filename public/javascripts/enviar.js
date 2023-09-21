document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("title");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
    const nombre = document.getElementsById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const celular = document.getElementById("celular").value;
    const date = document.getElementById("date").value;
    const genero = document.getElementById("genero").value;
    const direccion = document.getElementById("direccion").value;
    const codigoPostal = document.getElementById("CodigoPostal").value;
    const NumeroExterior = document.getElementById("NumeroExterior").value;
    const NumeroInterior= document.getElementById("NumeroInterior").value;
    const Delegacion = document.getElementById("Delegacion").value;
    const Colonia = document.getElementById("Colonia").value;
    const opcionesP = document.getElementById("opcionesP").value;
    const preguntaUno = document.getElementById("preguntaUno").value;
    const preguntaDos = document.getElementById("preguntaDos").value;
    const opcionC = document.getElementById("opcionC").value;
    const preguntaDesc = document.getElementById("preguntaDesc").value;
    const opcionIngles = document.getElementById("opcionIngles").value;
    const opcionComunicacion = document.getElementById("opcionComunicacion").value;
    const situacionSuperada = document.getElementById("situacionSuperada").value;
    const preguntaPrefieres= document.getElementById("preguntaPrefieres").value;
    console.log(nombre);

    const datos = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        celular: celular,
        date: date,
        genero: genero,
        direccion: direccion,
        codigoPostal: codigoPostal,
        NumeroExterior:NumeroExterior,
        NumeroInterior: NumeroInterior,
        Delegacion: Delegacion,
        Colonia: Colonia,
        opcionesP: opcionesP,
        preguntaUno: preguntaUno,
        preguntaDos: preguntaDos,
        opcionC: opcionC,
        preguntaDesc: preguntaDesc,
        opcionIngles: opcionIngles,
        opcionComunicacion: opcionComunicacion,
        situacionSuperada: situacionSuperada,
        preguntaPrefieres: preguntaPrefieres

    };

    const datosJSON = JSON.stringify(datos);
    const blob = new Blob([datosJSON], {type: "aplication/json"});
    const a = document.createElement("a");
    a.download = "datos.json";
    a.style.display = "none";
    document.body.appendChild(a);

    a.click();
    
    formulario.reset();
});
  });
  
