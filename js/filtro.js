
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0){
    for(var i = 0; i < pacientes.length; i++){

      var paciente  = pacientes[i];
      var nome      = paciente.querySelector(".info-nome").textContent;
      var expressao = new RegExp(this.value, "i");

      if(!expressao.test(nome)){
        paciente.classList.add("hide");
      }else{
        paciente.classList.remove("hide");
      }

    }
  }else{
    for(var i = 0; i < pacientes.length; i++){
      pacientes[i].classList.remove("hide");
    }
  }



});
