function convertMeasure() {
    let measure = document.getElementById("inputMeasure").value;
    let type = document.getElementById("inputType").value;
    let galones = document.getElementById("waterGalones");
    let litros = document.getElementById("waterLitros");
    let botellas = document.getElementById("waterBotellas");
    
    if (type === "G") {
        document.getElementById("galonesValue").textContent = measure + " G";
        document.getElementById("litrosValue").textContent = measure * 3.785 + " L";
        document.getElementById("botellasValue").textContent = measure * 7.57 + " B";
    } else if (type === "L") {
        document.getElementById("galonesValue").textContent = (measure / 3.785).toFixed(2) + " G";
        document.getElementById("litrosValue").textContent = measure + " L";
        document.getElementById("botellasValue").textContent = measure * 2 + " B";
    } else if (type === "B") {
        document.getElementById("galonesValue").textContent = (measure / 7.57).toFixed(2) + " G";
        document.getElementById("litrosValue").textContent = (measure / 2).toFixed(2) + " L";
        document.getElementById("botellasValue").textContent = measure + " B";
    }
    
    galones.style.height = (measure * 10) + "%";
    litros.style.height = (measure * 10) + "%";
    botellas.style.height = (measure * 10) + "%";
}