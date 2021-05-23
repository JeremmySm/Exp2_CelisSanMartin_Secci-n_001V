function bigImg(x) {
  x.style.height = "550px";
  x.style.width = "700px";
}

function normalImg(x) {
  x.style.height = "423px";
  x.style.width = "623px";
}

function boton(){
    alert("Se está procesando la descarga")
}

let url="https://apis.digital.gob.cl/fl/feriados"
$.get(url,function(respuesta)
{
    /*
    respuesta.forEach(function(item)
    {
        console.log(item);    
    })*/ //muestra cada item de feriados
    
    let feriado=respuesta[respuesta.length-1];
    let feriado2=respuesta[0];
    $("#feriado").text(feriado.nombre + "-" + feriado.fecha);
    $("#feriado2").text(feriado2.nombre + "-" + feriado2.fecha);
    



}, "json")