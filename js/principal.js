/*ENUNCIADO

    Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante (nombre,
    edad y sexo). El dato sexo es una letra F o M (femenino - masculino). Se desean procesar estos
    registros de estudiantes para determinar: a. la edad promedio, b. el nombre del estudiante con
    mayor edad, c. el porcentaje de chicas que son mayor de edad.
    El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18), la salida
    requerida presenta el siguiente formato:
    Edad promedio: 18.25
    Estudiante con mayor edad: José
    Porcentaje de chicas mayor de edad: 100%*/

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Salón from "./Cl_Salón.js";

let est1=new Cl_Estudiante( "Luis", 16, "M" )
let est2=new Cl_Estudiante( "Ana", 19, "F" )
let est3=new Cl_Estudiante( "Jose", 20, "M")
let est4=new Cl_Estudiante( "Carmen", 18, "F" )
let salon=new Cl_Salón()
salon.pEst(est1)
salon.pEst(est2)
salon.pEst(est3)
salon.pEst(est4)

let salida = document.getElementById("salida");
    salida.innerHTML= `Edad promedio: ${salon.promEd()} 
    <br>Estudiante de mayor edad: ${salon.nME()} 
    <br>Porcentaje de chicas mayores de edad: ${salon.gPChic()}%.`