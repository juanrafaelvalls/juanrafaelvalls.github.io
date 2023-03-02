// HTML DOM

// declaración de contantes de almacenamiento de datos
const   persona=
            {
            nombre:"Juan Rafael",
            apellido:"Valls",
            genero:"Masculino",
            edad:30,
            nacionalidad:"Argentina",
            profesion:"Ingeniero Industrial"
            },
        direccion=
            {
            nombre_via:"Pasaje Dr. Ramón Carrillo",
            numero_via:33,
            ciudad:"Santiago del Estero",
            departamento:"Capital",
            provincia:"Santiago del Estero",
            pais:"República Argentina",
            codigopostal:"4200"
            },
        contacto=
            {
            email:"juan.rafael.valls@gmail.com",
            telefono:"+54 385 421-3443",
            celular:"+54 385 532-4554"
            },
        resumen=
            {
            parraf1:"Ingeniero Industrial dedicado al desarrollo de proyectos de ingeniería para la industria del gas y del petróleo.",
            parraf2:"Experiencia en planificación de actividades y coordinación entre las distintas especialidades que participan en los proyectos"
            },
        proyectos=
            {
            fecha:["2022-12","2022-06","2021-08","2021-03","2020-09","2020-02"],
            nombre:["La Pampita","El Rincón","La Vuelta","El Mangrullo","Los Sauces","La Escondida"],
            cliente:["PetroSur","Transur","Boreal","SuperTech","PetroNor","TranSur"],
            descripción:["Planta de Separación",'Poliducto de 16"',"Estación de Compresión","Estación de Bombeo","Planta DPA ",'Gasoducto de 10"']
            },
        clave=["Manejo de Proyectos","Ingeniería","Coordinación","Energía","Gas y Petróleo","Gas No Convencional"];

// título de la página web
document.getElementById('titulo').innerHTML="CV "+persona.nombre+" "+persona.apellido;

// nombre completo en el encabezado
document.getElementById('nombre_completo').innerHTML=persona.nombre+" "+persona.apellido;

// profesión en el encabezado
document.getElementById('profesion').innerHTML=persona.profesion;

// mensaje inicial
document.getElementById('eleccion').innerHTML="Elija un ícono";

// asignar una función al botón 1
document.getElementById('boton1').addEventListener('click',funcion1);

// asignar una función al botón 2
document.getElementById('boton2').addEventListener('click',funcion2);

// asignar una función al botón 3
document.getElementById('boton3').addEventListener('click',funcion3);

// asignar una función al botón 4
document.getElementById('boton4').addEventListener('click',funcion4);

// asignar una función al botón 5
document.getElementById('boton5').addEventListener('click',funcion5);

// asignar una función al botón 6
document.getElementById('boton6').addEventListener('click',funcion6);

// definir la función del botón 1
function funcion1()
    {
    // elección
    document.getElementById('eleccion').innerHTML="Información Personal";
    // información
    document.getElementById('Info1').innerHTML="Nombre:       "+persona.nombre;
    document.getElementById('Info2').innerHTML="Apellido:     "+persona.apellido;
    document.getElementById('Info3').innerHTML="Profesión:    "+persona.profesion;
    document.getElementById('Info4').innerHTML="Edad:         "+persona.edad;
    document.getElementById('Info5').innerHTML="Género:       "+persona.genero;
    document.getElementById('Info6').innerHTML="Nacionalidad: "+persona.nacionalidad;
    }

// definir la función del botón 2
function funcion2()
    {
    // elección
    document.getElementById('eleccion').innerHTML="Reseña Profesional";
    // información
    document.getElementById('Info1').innerHTML=resumen.parraf1;
    document.getElementById('Info2').innerHTML="";
    document.getElementById('Info3').innerHTML="";
    document.getElementById('Info4').innerHTML=resumen.parraf2;
    document.getElementById('Info5').innerHTML="";
    document.getElementById('Info6').innerHTML="";
    }

// definir la función del botón 3
function funcion3()
    {
    // elección
    document.getElementById('eleccion').innerHTML="Palabras Clave";
    // información
    document.getElementById('Info1').innerHTML=clave[0];
    document.getElementById('Info2').innerHTML=clave[1];
    document.getElementById('Info3').innerHTML=clave[2];
    document.getElementById('Info4').innerHTML=clave[3];
    document.getElementById('Info5').innerHTML=clave[4];
    document.getElementById('Info6').innerHTML=clave[5];
    }

// definir la función del botón 4
function funcion4()
    {
    // elección
    document.getElementById('eleccion').innerHTML="Proyectos Desarrollados";
    // información
    document.getElementById('Info1').innerHTML=proyectos.fecha[0]+" - "+proyectos.nombre[0]+" - "+proyectos.cliente[0]+" - "+proyectos.descripción[0];
    document.getElementById('Info2').innerHTML=proyectos.fecha[1]+" - "+proyectos.nombre[1]+" - "+proyectos.cliente[1]+" - "+proyectos.descripción[1];
    document.getElementById('Info3').innerHTML=proyectos.fecha[2]+" - "+proyectos.nombre[2]+" - "+proyectos.cliente[2]+" - "+proyectos.descripción[2];
    document.getElementById('Info4').innerHTML=proyectos.fecha[3]+" - "+proyectos.nombre[3]+" - "+proyectos.cliente[3]+" - "+proyectos.descripción[3];
    document.getElementById('Info5').innerHTML=proyectos.fecha[4]+" - "+proyectos.nombre[4]+" - "+proyectos.cliente[4]+" - "+proyectos.descripción[4];
    document.getElementById('Info6').innerHTML=proyectos.fecha[5]+" - "+proyectos.nombre[5]+" - "+proyectos.cliente[5]+" - "+proyectos.descripción[5];
    }

// definir la función del botón 5
function funcion5()
    {
    // elección
    document.getElementById('eleccion').innerHTML="Dirección Postal";
    // información
    document.getElementById('Info1').innerHTML="Dirección:     "+direccion.nombre_via+" #"+direccion.numero_via;
    document.getElementById('Info2').innerHTML="Localidad:     "+direccion.ciudad+" - "+direccion.departamento;
    document.getElementById('Info3').innerHTML="Provincia:     "+direccion.provincia;
    document.getElementById('Info4').innerHTML="País:          "+direccion.pais;
    document.getElementById('Info5').innerHTML="Código Postal: "+direccion.codigopostal;
    document.getElementById('Info6').innerHTML="";
    }
    
// definir la función del botón 6
function funcion6()
    {
    // elección
    document.getElementById('eleccion').innerHTML="Datos de Contacto";
    // información
    document.getElementById('Info1').innerHTML="Celular:  "+contacto.celular;
    document.getElementById('Info2').innerHTML="Teléfono: "+contacto.telefono;
    document.getElementById('Info3').innerHTML="E-mail:   "+contacto.email;
    document.getElementById('Info4').innerHTML="";
    document.getElementById('Info5').innerHTML="";
    document.getElementById('Info6').innerHTML="";
    }