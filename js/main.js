// Lista de personas con sus datos
const empleados = [
    {
        nombreCompleto: "Juan Pérez",
        dni: "45899974",
        fechaVencimientoContrato: "2024-12-31",
        vacacionesPendientes: 10, 
        saldoPrestamos: 1500.00 
    },
    {
        nombreCompleto: "María López",
        dni: "75432158",
    fechaVencimientoContrato: "2025-06-15",
        vacacionesPendientes: 5,
        saldoPrestamos: 300.50
    },
    {
        nombreCompleto: "Carlos Gómez",
        dni: "78456931",
        fechaVencimientoContrato: "2024-09-20",
        vacacionesPendientes: 12,
        saldoPrestamos: 0
    },
    {
        nombreCompleto: "Ana Morales",
        dni: "69874512",
        fechaVencimientoContrato: "2024-11-10",
        vacacionesPendientes: 8,
        saldoPrestamos: 1200.75
    }
];

const btnSend = document.getElementById('btn-send')

btnSend.addEventListener('click',(event)=>{
    event.preventDefault();

    const dni = document.getElementById('cod-bar').value
    
    if (!dni || dni.length !== 8){
        alert('Ingrese un dni valido')
    } else{
        
        empleados.forEach(empleado => {

            if (dni === empleado.dni){
                sessionStorage.setItem('dni',empleado.dni)
                sessionStorage.setItem('full-names',empleado.nombreCompleto)
            sessionStorage.setItem('contract',empleado.fechaVencimientoContrato)
            sessionStorage.setItem('vacations',empleado.vacacionesPendientes)
            sessionStorage.setItem('loans',empleado.saldoPrestamos)
            
            window.location.href='./view/details.html'
        }
    })
};
})
