var suma=0,resta,multipli,division,opcion,numero,aux,aux2,sw=0,sw3=0,sw4=0,sw5=0,point=0;
var Calculadora = {
    Init: function(){ //esta función capta cada número o las teclas de las operaciones que se presionó
           Calculadora.Reducir("0");
           var teclarcero = document.getElementById("0");
           teclarcero.addEventListener("click" , function(){
                    numero=parseInt(teclarcero.id);
                    Calculadora.Agregar();
           });
          Calculadora.Reducir("1");
          var teclaruno = document.getElementById("1");
          teclaruno.addEventListener("click" , function(){
                   numero=parseInt(teclaruno.id);
                   Calculadora.Agregar();
          });
          Calculadora.Reducir("2");
          var teclardos = document.getElementById("2");
          teclardos.addEventListener("click" , function(){
                   numero=parseInt(teclardos.id);
                    Calculadora.Agregar();
          });
          Calculadora.Reducir("3");
          var teclartres = document.getElementById("3");
          teclartres.addEventListener("click" , function(){
                    numero=parseInt(teclartres.id);
                     Calculadora.Agregar();
          });
          Calculadora.Reducir("4");
          var teclarcuatro = document.getElementById("4");
          teclarcuatro.addEventListener("click" , function(){
                    numero=parseInt(teclarcuatro.id);
                     Calculadora.Agregar();
          });
          Calculadora.Reducir("5");
          var teclarcinco = document.getElementById("5");
          teclarcinco.addEventListener("click" , function(){
                    numero=parseInt(teclarcinco.id);
                     Calculadora.Agregar();
          });
          Calculadora.Reducir("6");
          var teclarseis = document.getElementById("6");
          teclarseis.addEventListener("click" , function(){
                    numero=parseInt(teclarseis.id);
                     Calculadora.Agregar();
          });
          var teclarsiete = document.getElementById("7");
          teclarsiete.addEventListener("click" , function(){
                    numero=parseInt(teclarsiete.id);
                    Calculadora.Reducir(numero);
                     Calculadora.Agregar();
          });
          Calculadora.Reducir("8");
          var teclarocho = document.getElementById("8");
          teclarocho.addEventListener("click" , function(){
                    numero=parseInt(teclarocho.id);
                     Calculadora.Agregar();
          });
          Calculadora.Reducir("9");
          var teclarnueve = document.getElementById("9");
          teclarnueve.addEventListener("click" , function(){
                    numero=parseInt(teclarnueve.id);
                     Calculadora.Agregar();
          });
          Calculadora.Reducir("punto");
          var teclarpunto = document.getElementById("punto");
          teclarpunto.addEventListener("click" , function(){
          if(point==0){
                          display.innerHTML = display.innerHTML + ".";point=1;
                      }
                      numero2=display.innerHTML;

          });
   },
   Suma:function(){
                Calculadora.Reducir("mas");
                var teclamas = document.getElementById("mas");
                teclamas.addEventListener("click" , function(){
                      display.innerHTML="";point=0;
                      opcion =1;aux2=Number(numero2); // aux2 primer numero ingresado de cualquiera que se oprima, igual para todos
                });
   },
   Resta:function(){
          Calculadora.Reducir("menos");
          var teclamenos = document.getElementById("menos");
          teclamenos.addEventListener("click" , function(){
              display.innerHTML="";point=0;
              opcion =2;aux2=Number(numero2);
          });
    },
    Multi:function(){
           Calculadora.Reducir("por");
           var teclamenos = document.getElementById("por");
           teclamenos.addEventListener("click" , function(){
               display.innerHTML="";point=0;
               opcion =3;aux2=Number(numero2);
           });
     },
     Division:function(){
            Calculadora.Reducir("dividido");
            var teclamenos = document.getElementById("dividido");
            teclamenos.addEventListener("click" , function(){
                display.innerHTML="";point=0;
                opcion =4;aux2=Number(numero2);
            });
      },
    Igual:function(){
           Calculadora.Reducir("igual");
           var teclaigual = document.getElementById("igual");
           teclaigual.addEventListener("click" , function(){
           aux = Number(numero2); // segundo numero ingresado
           Calculadora.Operaciones(opcion)
           });
     },
     Borrar:function(){ // esta funcion inicializa todas las variables con la tecla on/c
            Calculadora.Reducir("on");
            var teclaigual = document.getElementById("on");
            teclaigual.addEventListener("click" , function(){
            display.innerHTML ="0"; sw=0,sw4=0,sw5=0,sw3=0;
            suma=0;aux=0;aux2=0;point=0;
            });
      },
      Signo_masomenos:function(){
             Calculadora.Reducir("sign");
             var teclasign = document.getElementById("sign");
             teclasign.addEventListener("click" , function(){
             point==0
             if(display.innerHTML!=0){
                if(sw3==0) // este swithe permite agregar el signo menos en pantalla
                   {display.innerHTML = "-" + display.innerHTML;sw3=1;numero2=Number(display.innerHTML);}
                else{display.innerHTML = parseInt(display.innerHTML)*(-1);} // cuando se agrega otro signo menos el numero se convierte en positivo
             }
             });
       },
      Agregar:function(){
               if (display.innerHTML.length==8){
                   display.innerHTML = display.innerHTML
               }
               else
                    if(display.innerHTML =="0"){display.innerHTML = numero;}
                       else {display.innerHTML = display.innerHTML + numero }
               numero2=display.innerHTML;
       },
      Operaciones:function(opcion){
                  switch (opcion){ // para realizar las cuatro operaciones
                          case 1:
                                suma=aux2 + aux;
                                display.innerHTML =suma;numero2=suma;
                                break;
                         case 2:
                               resta=aux2 - aux;numero2=resta
                               display.innerHTML =resta;
                                break;
                         case 3:
                                multipli=aux * aux2;numero2=multipli
                                x=multipli.toString();
                                display.innerHTML =x.substr(0,8)
                                break;
                        default:
                                 division=aux2 / aux;divi=division.toFixed(2);numero2=divi
                                 display.innerHTML =divi;
                                break;
                }
      },
      Reducir:function(numero){
               var tecla = document.getElementById(numero);
               tecla.addEventListener('mousedown', function() {
               tecla.style.transform="scale(0.9)"

         });
              var tecla2= document.getElementById(numero);
              tecla2.addEventListener('mouseup', function() {
              tecla2.style.transform="scale(1.0)"
          });

      }
}
Calculadora.Init();
Calculadora.Suma();
Calculadora.Resta();
Calculadora.Multi();
Calculadora.Division();
Calculadora.Igual();
Calculadora.Borrar();
Calculadora.Signo_masomenos();
