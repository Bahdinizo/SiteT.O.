//FUNÇÃO PARA VERIFICAR IDADE DO DESFRALDE
function VerificaIdade() {
  var idade = parseInt(document.getElementById("idade").value);

  if (idade <= 2) {
    alert(
      "Seu filho ainda não está na idade de iniciar o desfralde, mas você já pode estimula-lo com vídeos e músicas e incentivar de outras formas!"
    );
  } else if (idade > 2 && idade <= 4) {
    alert(
      "Seu filho já está em idade para iniciar o processo do desfralde, porém, verifique se ele possui os pré-requisitos!"
    );
  } else {
    alert(
      "Seu filho está acima da idade para iniciar o desfralde, porém, verifique se ele possui os pré-requisitos!"
    );
  }
}
