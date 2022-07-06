let pin = "73915";
let entrar = false;

for (let i = 4; i >= 0; i--) {
    let pinIngresado = prompt("Ingresa tu Pin. Tienes " + (i + 1) + " intentos.");
    if (pinIngresado == pin) {
        entrar = true;
        break;
    } else {
        alert("Error. Te quedan " + i + " intentos.");
        console.log("Hay " + i + " intentos más.");
    }
}

//Call the Police

if (entrar) {
    alert("Bienvenido a Casa");
    console.log("Bienvenido a Casa");
} else {
    document.getElementById("h1").textContent = "ALARMA";
    document.getElementById("h2").textContent = "ALARMA";
    document.getElementById("h3").textContent = "SE ESTÁ LLAMANDO A LA POLICÍA";
    alert("Estoy llamando a la Policía");
    console.log("Llamando a la Policía");
}