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

function valida()
{
    nom= document.getElementById('nombre').value;
    fono = document.getElementById('telefono').value; 
    mail = document.getElementById('email').value;
    text = document.getElementById('texto').value;

    if(nom == null || nom.length==0 ||  /^\s+$/.test(nom))
    {
        alert('Error.. debe ingresar un nombre');
        document.getElementById('nombre').value="";
        document.dato.nom.focus();
        return false;
    }
    
    if(!(/^\d{9}$/.test(fono)) )
    {
        alert('Error...debe ingresar un teléfono válido');
        document.getElementById('telefono').value="";
        document.dato.fono.focus();
        return false;
    }

    if(mail == null || mail.length==0)
    {
        alert('Error.. debe ingresar un correo');
        document.getElementById('email').value="";
        document.dato.mail.focus();
        return false;
    }
    
    if(text==null || text.length==0)
	{
		alert('Agregue una breve descripcion');
		document.getElementById('texto').value="";
		document.dato.text.focus();
		return false;		
	}
    return true;      

    
}