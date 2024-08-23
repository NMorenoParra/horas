document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de tiempo de los inputs
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    // Convertir los tiempos a objetos Date
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    // Calcular la diferencia en milisegundos
    let diffMs = end - start;
    // Si la diferencia es negativa, añadir 24 horas
    if (diffMs < 0) {
        diffMs += 24 * 60 * 60 * 1000;
    }

    // Convertir la diferencia de milisegundos a horas (punto flotante)
    const diffHrs = diffMs / (1000 * 60 * 60);

    // Mostrar la diferencia en el DOM
    document.getElementById('timeDifference').textContent = diffHrs.toFixed(2);

    document.getElementById('valor').textContent = diffHrs.toFixed(2)*8000;
});
