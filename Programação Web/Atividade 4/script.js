function consultarCampos(){
    let ret = true;
    let nome = document.getElementById("input-nome");
    let endereco = document.getElementById("input-endereco");
    let telefone = document.getElementById("input-telefone");
    valorNome = nome.value;
    valorEndereco = endereco.value;
    valorTelefone = endereco.value;
    
    if((valorNome == null) || (valorNome == "")){
        document.getElementById("span1").textContent="O campo Nome é obrigatório";
        ret = false;
    }else{
        document.getElementById("span1").textContent="";
    }

    if((valorTelefone == null) || (valorTelefone == "")){
        document.getElementById("span2").textContent="O campo Telefone é obrigatório";
        ret = false;
    }else{
        document.getElementById("span2").textContent="";
    }

    if((valorEndereco == null) || (valorEndereco == "")){
        document.getElementById("span3").textContent="O campo Endereço é obrigatório";
        ret = false;
    }else{
        document.getElementById("span3").textContent="";
    }
    
    return ret;
}