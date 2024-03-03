function validarSenha(){
    var flag = false;
    var senha = $('#senha').val();
    if(senha.length == 0)
    {
        $('#alertSenha').html("");
    }
    else
    {
        if(senha.length >= 8)
        {
            var i = 0;
            while(i < senha.length && !/[A-Z]/.test(senha[i]))
                i++;
            if(i < senha.length)
            {
                i = 0;
                while(i < senha.length && !/[a-z]/.test(senha[i]))
                    i++;
                if(i < senha.length)
                {
                    i = 0;
                    while(i < senha.length && !/[0-9]/.test(senha[i]))
                        i++;
                    if(i == senha.length)
                    {
                        $('#alertSenha').html("A senha deve conter no mínimo um número");
                    }
                    else
                    {
                        $('#alertSenha').html("");
                        flag = true;
                    }
                }
                else
                {
                    $('#alertSenha').html("A senha deve conter no mínimo uma letra minúscula");
                }
            }
            else
            {
                $('#alertSenha').html("*A senha deve conter no mínimo uma letra maiúscula");
            }
        }
        else
        {
            $('#alertSenha').html("*A senha deve conter no mínimo 8 caracteres");
        }
    }

    flag = flag && validarConfSenha();

    return flag;
}

function validarConfSenha(){
    var flag = false;
    var senha = $('#senha').val();
    var confSenha = $('#confSenha').val();
    if(confSenha.length > 0)
    {
        if(senha == confSenha)
        {
            $('#alertConfSenha').html("");
            flag = true;
        }
        else
        {
            $('#alertConfSenha').html("*Senhas diferentes");
        }
    }
    else
    {
        $('#alertConfSenha').html("");
    }
    return flag;
}

function validar(){
    var flag = validarSenha();
    if(flag)
        alert("Cadastro realizado!");
    return flag;
}

$('#senha').on('input', validarSenha);
$('#confSenha').on('input', validarConfSenha);