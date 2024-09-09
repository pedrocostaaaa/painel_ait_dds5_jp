import { useEffect, useState } from "react";

//criando função saudação
function Saudacao() {
    //criando estado da sudação e definindo um intervalo de 1 segundo
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');
    useEffect(()=>{
        atualizaSaudacao();
        const intervalo = setInterval(atualizaSaudacao,1000);
        return ()=>{
            clearInterval(intervalo);
        }

    },[])

    //criando texto da saudação do cabeçalho
    function atualizaSaudacao(){
        //declarando objeto do tipo date
        const agora = new Date();
        //declarando hora em inteiro exemplo 07:35:00 retorna 7
        const hora = agora.getHours();
        //obtendo dia da semana em inteiro, iniciando em domingo que retorna 0 e sábado que retorna 6
        const dia = agora.getDay();
        //declarando variável do texto da saudação
        let textoSaudacao = '';
        //definindo array com dias da semana
        const diaSemana = [
            'Domingo',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feira',
            'Sexta-feira',
            'Sábado'
        ];

        //adicionando o dia da semana ao texto saudação
        textoSaudacao += diaSemana[dia];
        //adiconando saudação ao texto saudação
        if (hora>= 18){
            textoSaudacao += ' Boa noite';
        }else if(hora>=12){
            textoSaudacao += ' Boa tarde';
        }else{
            textoSaudacao += ' Bom dia';
        }

        //chamando função de atribuição
        setSaudacaoPeriodo(textoSaudacao);
    }


    return (
        <div>{saudacaoPeriodo}</div>
    )
}

export default Saudacao;