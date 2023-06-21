//FUÇÃO TROCA PÁGINA
function funcao2() {
  alert("Você será redirecionado para a página de integração sensorial");
}
function funcao1() {
  alert("Você será redirecionado para a página de início");
}

//FUNÇÃO CARROSEL
var carrosel = document.querySelector(".manual");
var cont = 1;
document.getElementById("carrosel1").checked = true;

function proximaImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }
  document.getElementById("carrosel" + cont).checked = true;
}

setInterval(() => {
  proximaImg();
}, 3000);
