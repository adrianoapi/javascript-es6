
pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];
  var peso     = paciente.querySelector(".info-peso"   ).textContent;
  var altura   = paciente.querySelector(".info-altura" ).textContent;
  var gordura  = paciente.querySelector(".info-gordura").textContent;
  var imc      = paciente.querySelector(".info-imc"    );

  var pesoValido   = true;
  var alturaValida = true;

  if(peso < 0 || peso > 1000){
    pesoValido = false;
    imc.textContent = "Peso inválido!";
    paciente.classList.add('error');
  }

  if(altura < 0 || altura > 3){
    alturaValida = false;
    imc.textContent = "Altura inválida!";
    paciente.classList.add('error');
    //.style.backgroundColor = "red";
    //paciente.style.color = "white";
  }

  if(pesoValido && alturaValida){
    imc.textContent = calcularImc(peso, altura);
  }

}

function calcularImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
