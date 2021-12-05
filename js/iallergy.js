function EnviarF() {
    if (document.getElementById("GetValue1").value === "") {
        alert("Por favor, digite seu nome");
    } else if (document.getElementById("GetValue2").value === "") {
        alert("Por favor, digite um feedback");
    } else {

        var criarHR = document.createElement("hr");
        var criarN = document.createElement("div");
        var pular = document.createElement("br");
        var criarM = document.createElement("div");
        criarN.innerHTML=document.getElementById("GetValue1").value + ":";
        criarM.innerHTML=document.getElementById("GetValue2").value;
        document.body.appendChild(pular);
        document.body.appendChild(pular);
        document.body.appendChild(pular);
        document.body.appendChild(criarN);
        document.body.appendChild(pular);
        document.body.appendChild(criarM);
        document.body.appendChild(pular);
        document.body.appendChild(pular);
        document.body.appendChild(criarHR);
            
    }
}