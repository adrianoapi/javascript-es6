var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {
      var response = xhr.responseText;
      //console.log(typeof xhr.responseText);
      var pacientes = JSON.parse(response);

      pacientes.forEach(function(paciente){
        adicionaPaciente(paciente);
      });

    });
    xhr.send();
});
