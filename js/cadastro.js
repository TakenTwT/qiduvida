const form = document.querySelector("#form");
const spans = document.querySelectorAll('.span-requerid');
const campos = document.querySelectorAll('.requerid');
const CPF = valor.replace(/\D/g, '');

function erro(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}
function resolvido(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';

}

function namev(){
    var tamanho = campos[0].value.length;
    if(tamanho < 4){
        erro(0);
    }
    else{
        resolvido(0);
    }
}
function sobrenomev(){
    var tamanho = campos[1].value.length;
    if(tamanho < 5){
        erro(1);
    }
    else{
        resolvido(1);
    }
}
function email(){
    var tamanho = campos[2].value.length;
    if(tamanho < 5){
        erro(2);
    }
    else{
        resolvido(2);
    }
}
function cpf(){
    var tamanho = campos[3].value.length;
    if(tamanho < 11){
        erro(3);
    }
    else{
        if(tamanho >= 12){
            erro(3);  
        }
        else{
            if(!CPF.test(campos[3].value)){
                resolvido(3);
            }
            else{
                erro(3);
            }

        }
    }
}