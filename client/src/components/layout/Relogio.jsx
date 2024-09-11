import { useEffect, useState } from "react";
import styles from './Relogio.module.css';

//declarando função relógio
function Relogio() {
    //declarando hora como estado
    const [hora, setHora] = useState('');

    
    useEffect(() => {
        //chamando função pós carregamento
        atualizaHorario();

        //declarando intervalo de 1 segundo para atualizar relógio
        const intervalo = setInterval(atualizaHorario,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    }, []);

    //declarando função que atribui a hora, minutos e segundos atuais
    function atualizaHorario() {
        //declarando o objeto do tipo date
        const agora = new Date();
        //pegando hora, minutos e segundos
        const horaMinutosSegundos = agora.toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        //atualizando o estado hora para hora, minutos e segundos atuais
        setHora(horaMinutosSegundos);
    }
    return (
        //retornando uma div com a hora, minutos e segundos de forma correta
        <div className={styles.Relogio}>{hora}</div>
    )
}

export default Relogio;