var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {

      var errorAjax = document.querySelector("#erro-ajax");

      if(xhr.status == 200){
        errorAjax.classList.add("hide");
        var response = xhr.responseText;
        //console.log(typeof xhr.responseText);
        var pacientes = JSON.parse(response);

        pacientes.forEach(function(paciente){
          adicionaPaciente(paciente);
        });
      }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        errorAjax.classList.remove("hide");
      }
    });
    xhr.send();
});
