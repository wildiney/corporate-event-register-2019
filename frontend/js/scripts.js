function showHide(element) {
  const d = document.getElementById(element);
  (d.style.display == 'none') ? d.style.display = 'block' : d.style.display = 'none';
}

function validateForm(){
  const d = document.getElementsByClassName("required");
  for(let i=0;i<d.length;i++){
    if(d[i].value==""){
      d[i].focus();
      let field = d[i].getAttribute("name");
      alert("O campo "+field+" deve ser preenchido");
      return false;
    }
  }
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("ready");
  document.getElementById("outras_solucoes").style.display = 'none';
  document.getElementById("outros_interesses").style.display = 'none';

})