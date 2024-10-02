import Navbar from "../layout/Navbar";
import { useState } from 'react';

function CadastroAula() {
    const [dataAula, setDataAula] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [turma, setTurma] = useState('');
    const [instrutor, setInstrutor] = useState('');
    const [unidadeCurricular, setUnidadeCurricular] = useState('');
    const [ambiente, setAmbiente] = useState('');
    const [infoAula, setInfoAula] = useState({});

    function cadastrarAula(e) {
        e.preventDefault();
        console.log(dataAula)
    }
    return (
        <div>
            <Navbar />
            <div className='container col-sm-12 col-md-6  col-lg-3 mt-3'>
                <h2 className='text-center'>Cadastro Aula</h2>
                <form onSubmit={cadastrarAula}>
                    <label className="form-label" htmlFor="">Data:</label>
                    <label className="form-control" type="date" name="" id="" value={dataAula} onChange={(e) => (setDataAula(e.target.value))} />

                    <label className="form-label" htmlFor="">Hora Início:</label>
                    <label className="form-control" type="time" name="" id="" value={horaInicio} onChange={(e) => (setHoraInicio(e.target.value))} />

                    <label className="form-label" htmlFor="">Hora Fim:</label>
                    <label className="form-control" type="time" name="" id="" value={horaFim} onChange={(e) => (setHoraFim(e.target.value))}/>

                    <label className="form-label" htmlFor="">Turma:</label>
                    <label className="form-control" type="text" name="" id="" value={turma} onChange={(e) => (setTurma(e.target.value))}/>

                    <label className="form-label" htmlFor="">Instrutor:</label>
                    <label className="form-control" type="text" name="" id="" value={instrutor} onChange={(e) => (setInstrutor(e.target.value))}/>

                    <label className="form-label" htmlFor="">Unidade Curricular:</label>
                    <label className="form-control" type="text" name="" id="" value={unidadeCurricular} onChange={(e) => (setUnidadeCurricular(e.target.value))}/>

                    <label className="form-label" htmlFor="">Ambiente:</label>
                    <label className="form-control" type="text" name="" id="" value={ambiente} onChange={(e) => (setAmbiente(e.target.value))}/>

                    <a className="btn btn-danger mt-3 float-start" href="">Cancelar</a>
                    <button className="btn btn-success mt-3 float-end" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    )
}

export default CadastroAula;