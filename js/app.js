var Calculadora = {
  init: function () {
    var tipoclase='.teclado img';
    this.buscarTeclasyAplicarEvento(tipoclase);
  },

  buscarTeclasyAplicarEvento: function(selector) {
    var TeclasPagina = document.querySelectorAll(selector);
    for (var i=0; i< TeclasPagina.length; i++){
      TeclasPagina[i].onmousedown = this.eventoReducirTecla;
      TeclasPagina[i].onmouseup = this.eventoAumentarTecla;
      TeclasPagina[i].onclick= this.eventoObtenerDigito;
    }
  },

  eventoReducirTecla: function(event) {
    elemento=(event.target);
    var clase=elemento.parentElement.className;
    switch (clase){
      case 'teclado':
        elemento.style.width = "21.75%";
        elemento.style.height = "62px";
        break;
      case 'col1':
        elemento.style.width = "28.75%";
        elemento.style.height = "62px";
        break;
      case 'col2':
        elemento.style.width = "89.75%";
        elemento.style.height = "99.75%";
        break;
    }
  },

  eventoAumentarTecla: function(event) {
    elemento=(event.target);
    var clase=elemento.parentElement.className;
    switch (clase){
      case 'teclado':
        elemento.style.width = "22%";
        elemento.style.height = "62.91px";
        break;
      case 'col1':
        elemento.style.width = "29%";
        elemento.style.height = "62.91px";
        break;
      case 'col2':
        elemento.style.width = "90%";
        elemento.style.height = "100%";
        break;
    }
  },

  eventoObtenerDigito: function(event){
    elemento=(event.target);
    var digito = elemento.id;
    if (digito=='on'){
      display.innerHTML="0";
    }
    if (display.innerHTML.length<8){
      switch(digito){
        case '1':
          if (display.innerHTML=="0"){
            display.innerHTML= "1";
            } else {
            display.innerHTML= display.innerHTML+"1";
          }
        break;
        case '2':
          if (display.innerHTML=="0"){
            display.innerHTML= "2";
            } else {
            display.innerHTML= display.innerHTML+"2";
          }
        break;
        case '3':
          if (display.innerHTML=="0"){
            display.innerHTML= "3";
            } else {
            display.innerHTML= display.innerHTML+"3";
          }
        break;
        case '4':
          if (display.innerHTML=="0"){
            display.innerHTML= "4";
            } else {
            display.innerHTML= display.innerHTML+"4";
          }
        break;
        case '5':
          if (display.innerHTML=="0"){
            display.innerHTML= "5";
            } else {
            display.innerHTML= display.innerHTML+"5";
          }
        break;
        case '6':
          if (display.innerHTML=="0"){
            display.innerHTML= "6";
            } else {
            display.innerHTML= display.innerHTML+"6";
          }
        break;
        case '7':
          if (display.innerHTML=="0"){
            display.innerHTML= "7";
            } else {
            display.innerHTML= display.innerHTML+"7";
          }
        break;
        case '8':
          if (display.innerHTML=="0"){
            display.innerHTML= "8";
            } else {
            display.innerHTML= display.innerHTML+"8";
          }
        break;
        case '9':
          if (display.innerHTML=="0"){
            display.innerHTML= "9";
            } else {
            display.innerHTML= display.innerHTML+"9";
          }
        break;
        case '0':
          if (display.innerHTML=="0"){
            display.innerHTML= "0";
            } else {
            display.innerHTML= display.innerHTML+"0";
          }
        break;
        case 'punto':
          var numero = Number(display.innerHTML);
          if (display.innerHTML=="0"){
            display.innerHTML= "0.";
            } else {
              if (Math.round(numero)==numero&&display.innerHTML!="0."){
              display.innerHTML= display.innerHTML+".";
              }
          }
        break;
        case 'sign':
          var numero = Number(display.innerHTML);
          if (display.innerHTML=="0"){
            display.innerHTML="0";
          } else {
            display.innerHTML=-numero;
          }
        break;
      }
    }
    switch (digito){
      case 'mas':
      case 'menos':
      case 'por':
      case 'dividido':
        valor1 = Number(display.innerHTML),
        sessionStorage.setItem("valor1",valor1);
        sessionStorage.setItem("digito",digito);
        display.innerHTML="";
      break;
      case 'igual':
        var val2 = Number(display.innerHTML);
        var val1 = Number(sessionStorage.getItem("valor1"));
        var oper = sessionStorage.getItem("digito");
        switch (oper){
          case 'mas':
          var resultado = val1+val2;
          resultado.toPrecision(8);
          break;
          case 'menos':
          var resultado = val1-val2;
          resultado.toPrecision(8);
          break;
          case 'por':
          var resultado = val1*val2;
          resultado.toPrecision(8);
          break;
          case 'dividido':
          var resultado = val1/val2;
          resultado.toPrecision(8);
          break;
        }
        var respuesta = resultado.toString();
        var resp = respuesta.substring(0, 8);
        display.innerHTML= resp;

      break;
    }
  },
}
Calculadora.init();
