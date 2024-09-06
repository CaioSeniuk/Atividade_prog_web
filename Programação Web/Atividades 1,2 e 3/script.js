function consultarCampos(){
    let ret = true;
    let nome = document.getElementById("input-nome");
    valorNome = nome.value;
    
    if((valorNome == null) || (valorNome == "")){
        document.getElementById("span").textContent="O campo nome é obrigatório";
        ret = false;
    }else{
        document.getElementById("span").textContent="";
    }
    return ret;
}