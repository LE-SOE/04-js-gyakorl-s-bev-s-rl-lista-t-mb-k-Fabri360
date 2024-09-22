
function hozzaad() {
    const cucc = document.getElementById("cucc").value;
    
    if (cucc.trim() !== "") {
        const lista = document.getElementById("kiv_lista");
        const li = document.createElement("li");
        li.textContent = cucc;
        lista.appendChild(li);
        document.getElementById("cucc").value = "";
        frissitDarab();
    }
}

function reset() {
    const lista = document.getElementById("kiv_lista");
    lista.innerHTML = "";  
    frissitDarab();
}

function frissitDarab() {
    const darab = document.getElementById("kiv_lista").getElementsByTagName("li").length;
    document.getElementById("darab").textContent = darab;
}
