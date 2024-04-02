const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");

const meses = ['Ene','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

const mostrarReloj = ()=>{
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hora.innerHTML = `${(hour<10) ? '0'+hour:hour}:${(minutes<10) ? '0'+minutes:minutes}:${(seconds<10) ? '0'+seconds:seconds}`
    if(hour === 0 && minutes === 0 && seconds === 0){
        mostrarFecha(date)
    }
}

const mostrarFecha = (date)=>{
    let dia = date.getDay()
    let mes = date.getMonth()
    let year = date.getFullYear()
    fecha.innerHTML = `${(dia < 10) ? '0'+ dia : dia}-${meses[mes]}-${year}`
}

setInterval(mostrarReloj,1000);

let date = new Date();
mostrarFecha(date);


