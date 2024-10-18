const nombresCompletos = sessionStorage.getItem('full-names')
const dni = sessionStorage.getItem('dni')
const diasPendientesVac = sessionStorage.getItem('vacations')
const fechaVencContrato = sessionStorage.getItem('contract')
const saldoPrestamo = sessionStorage.getItem('loans')



if (dni){
    const txtDNI = document.getElementById('dni')
    const txtNombresCompletos = document.getElementById('name')
    const txtVacaciones = document.getElementById('vacations')
    const txtContracto = document.getElementById('contract')
    const txtSaldoPrestamo = document.getElementById('loans')
    
   txtDNI.value = dni
   txtNombresCompletos.value = nombresCompletos
   txtVacaciones.value = diasPendientesVac
   txtContracto.value = fechaVencContrato
   txtSaldoPrestamo.value = saldoPrestamo 
   
}
