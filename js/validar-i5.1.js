function validacion()
{
	user= document.getElementById('usser').value;
	passw = document.getElementById('pass').value; 

	if(user !== 'pepito')
	{
		alert('Error.. debe ingresar usuario registrado');
		document.getElementById('usser').value="";
		document.datos.user.focus();
		return false;
	}

	if(passw !== '1234' )
	{
		alert('Error.. debe ingresar una contraseña válida');
		document.getElementById('pass').value="";
		document.datos.passw.focus();
		return false;
	}return true; 
}