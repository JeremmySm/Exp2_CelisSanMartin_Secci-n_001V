const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones ={
    primer__nombre: /^[a-zA-ZÀ-ÿ]{1,40}$/, //verificar si la \s era el espacio...
    segundo__nombre: /^[a-zA-ZÀ-ÿ]{1,40}$/, //verificar si la \s era el espacio...
    primer__apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    segundo__apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	nom__emp: /^[a-zA-ZÀ-ÿ.\s]{1,40}$/,
	rut__emp: /^\d{8,9}$/,
    edad: /^\d{1,3}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/
}

const campos = {
	primer__nombre: false,
	segundo__nombre: false,
	primer__apellido: false,
	segundo__apellido: false,
	nom__emp: false,
	rut__emp: false,
	edad: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "primer__nombre":
			validarCampo(expresiones.primer__nombre, e.target, 'primer__nombre');
		break;
		case "segundo__nombre":
			validarCampo(expresiones.segundo__nombre, e.target, 'segundo__nombre');
		break;
        case "primer__apellido":
			validarCampo(expresiones.primer__apellido, e.target, 'primer__apellido');
		break;
        case "segundo__apellido":
			validarCampo(expresiones.segundo__apellido, e.target, 'segundo__apellido');
		break;
		case "nom__emp":
			validarCampo(expresiones.nom__emp, e.target, 'nom__emp');
		break;
		case "rut__emp":
			validarCampo(expresiones.rut__emp, e.target, 'rut__emp');
		break;
		case "edad":
			validarCampo(expresiones.edad, e.target, 'edad');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.primer__nombre && campos.segundo__nombre && campos.primer__apellido && campos.segundo__apellido && campos.nom__emp && campos.rut__emp &&campos.edad && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

function validar()
{	
	serv = document.getElementById('servicio').selectedIndex;
	text = document.getElementById('texto').value;
	
	if ( serv == null ||serv == 0 )
	{
		alert('Seleccione un servicio');
		document.datos.servicio.focus();
		return false;
	}
	if( text==null || text.length ==0 )
	{
		alert('Agregue una breve descripcion');
		document.getElementById('texto').value="";
		document.datos.text.focus();
		return false;		
	}
	return true
}