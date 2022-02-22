//Se crea la clase Persona
class Persona{

    constructor(nombre,sexo,edad){
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
    }
}

//Se crea la clase Alumno que hereda de la clase Persona

class Alumno extends Persona{

    constructor(nombre,sexo,edad,noControl){
        super(nombre,sexo,edad);
        this.noControl = noControl;
    }
}


//Se crea la clase Docente que hereda de la clase Persona

class Docente extends Persona{

    constructor(nombre,sexo,edad,idDocente){
        super(nombre,sexo,edad);
        this.idDocente = idDocente;
    }
}

//Se crea la clase Calificacion que hereda de la clase Alumno
class Calificacion extends Alumno{

    constructor(nombre,sexo,edad,noControl,promedio){
        super(nombre,sexo,edad,noControl);
        this.promedio = promedio;
    }
}

//Se crea la clase Asignatura que hereda de la clase Docente
class Asignatura extends Docente{
    constructor(nombre,sexo,edad,idDocente,materia){
        super(nombre,sexo,edad,idDocente);
        this.materia = materia;
    }
}

//Creación de las listas para almacenar las instancias
listaAlumnos = [];
listaDocentes = [];

//Creación de la función para agregar un alumno
function agregarAlumno(){
    //Recuperar información de los modales de Alumno
    //-----------------------Variables Alumno-----------------------
    var nombreAlumno = document.getElementById('nombreAlumno').value;
    var sexoAlumno = document.getElementById('sexoAlumno').value;
    var edadAlumno = document.getElementById('edadAlumno').value;
    var noControlAlumno = document.getElementById('noControlAlumno').value;
    var promedioAlumno = document.getElementById('promedioAlumno').value;

    //Se crea un objeto para almacenar los datos
    promedio = new Calificacion(nombreAlumno,sexoAlumno,edadAlumno,noControlAlumno,promedioAlumno);

    //Se guarda el objeto en una lista
    listaAlumnos.push(promedio);
    
    cleanAlumno();

    console.log("Alumno Agregado");
}

//Función para limpiar campos de modal Alumno
function cleanAlumno(){
    document.getElementById('nombreAlumno').value = "";
    document.getElementById('sexoAlumno').value = "";
    document.getElementById('edadAlumno').value = "";
    document.getElementById('noControlAlumno').value = "";
    document.getElementById('promedioAlumno').value = "";
}

//Creación de la función para agregar un docente
const agregarDocente = () =>{
    //Recuperar información de los modales de docente
    //-----------------------Variables Docente-----------------------
    var nombreDocente = document.getElementById('nombreDocente').value;
    var sexoDocente = document.getElementById('sexoDocente').value;
    var edadDocente = document.getElementById('edadDocente').value;
    var idDocente = document.getElementById('IdDocente').value;
    var materiaDocente = document.getElementById('materiaDocente').value;

    //Se crea un objeto para almacenar los datos
    materia = new Asignatura(nombreDocente,sexoDocente,edadDocente,idDocente,materiaDocente);

    //Se guarda el objeto en la lista
    listaDocentes.push(materia);

    cleanDocente();
    console.log("Docente Agregado");
}

//Función para limpiar campos de modal Docente
const cleanDocente =()=> {
    document.getElementById('nombreDocente').value = "";
    document.getElementById('sexoDocente').value = "";
    document.getElementById('edadDocente').value = "";
    document.getElementById('IdDocente').value = "";
    document.getElementById('materiaDocente').value ="";
}

    //------------------------------LLENAR TABLA ALUMNOS--------------------------------------
    const consultaAlumnos = () => {
        if (listaAlumnos.length > -1) {
            //blanqueamos la tabla
            document.getElementById('tab1').innerHTML = "";
            //Creación de los titulos de la tabla
            document.getElementById('tab1').innerHTML = '<thead><tr><th>Nombre</th><th>Sexo</th><th>Edad</th><th>NoControl</th><th>Promedio</th></tr></thead>';
            
            //Función de flecha para llenar la tabla de alumnos
            listaAlumnos.forEach(element => {
                document.getElementById('tab1').innerHTML += '<tbody><td>' + element.nombre + '</td><td>' + element.sexo + '</td><td>' + element.edad + '</td><td>' + element.noControl + '</td><td>' + element.promedio + '</td></tbody>';
            });
        }
    }

    //------------------------------LLENAR TABLA DOCENTES--------------------------------------
    const consultaDocentes = () => {
        if (listaDocentes.length > -1) {
            //blanqueamos la tabla
            document.getElementById('tab2').innerHTML = "";
            //Creación de los titulos de la tabla
            document.getElementById('tab2').innerHTML = '<thead><tr><th>Nombre</th><th>Sexo</th><th>Edad</th><th>IdDocente</th><th>Materia</th></tr></thead>';
            
            //Función de flecha para llenar la tabla de docentes
            listaDocentes.forEach(element => {
                document.getElementById('tab2').innerHTML += '<tbody><td>' + element.nombre + '</td><td>' + element.sexo + '</td><td>' + element.edad + '</td><td>' + element.idDocente + '</td><td>' + element.materia + '</td></tbody>';
            });
        }
    }







