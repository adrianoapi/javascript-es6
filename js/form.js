
var adicionar = document.querySelector("#adicionar-paciente");

adicionar.addEventListener('click', function(){

  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = montaTr(paciente);



  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();

});

function obtemPacienteDoFormulario(form) {
    var paciente = {
      nome   : form.nome.value,
      peso   : form.peso.value,
      altura : form.altura.value,
      gordura: form.gordura.value,
      nome   : form.nome.value,
      imc    : calcularImc(form.peso.value, form.altura.value),
    }

    return paciente;
}

// Aqui ele cria a td independente, só posteriomente ela é adicionada a
// uma tabela qualquer à ser definida
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");


    var nomeTd     = montaTd(paciente.nome,    "info-nome");
    var pesoTd     = montaTd(paciente.peso,    "info-peso");
    var alturaTd   = montaTd(paciente.altura,  "info-altura");
    var gorduraTd  = montaTd(paciente.gordura, "info-gordura");
    var imcTd      = montaTd(paciente.imc,     "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(data, _class) {
  var td = document.createElement("td");
  td.textContent = data;
  td.classList.add(_class);
  return td;
}
