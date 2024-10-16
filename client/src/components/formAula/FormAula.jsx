import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormAula({ titulo, textoBotao, handleSubmit, id, tipo }) {
  const navigate = useNavigate();

  const [dataAula, setDataAula] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [turma, setTurma] = useState('');
  const [instrutor, setInstrutor] = useState('');
  const [unidadeCurricular, setUnidadeCurricular] = useState('');
  const [ambiente, setAmbiente] = useState('');

  useEffect(() => {
    if (id) {
      baixarAula(id);
    }
  }, [id]);

  async function baixarAula(id) {
    try {
      const resposta = await fetch(`http://localhost:5000/aulas/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!resposta.ok) {
        throw new Error('Erro ao buscar aula');
      } else {
        const respostaJSON = await resposta.json();
        setTurma(respostaJSON.turma);
        setInstrutor(respostaJSON.instrutor);
        setUnidadeCurricular(respostaJSON.unidade_curricular);
        setAmbiente(respostaJSON.ambiente);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function submit(e) {
    e.preventDefault();
    const aula = {
      data: dataAula,
      data_hora_inicio: horaInicio,
      data_hora_fim: horaFim,
      turma: turma,
      instrutor: instrutor,
      unidade_curricular: unidadeCurricular,
      ambiente: ambiente,
      chave: null
    };
    handleSubmit(aula, id);
    navigate(`/gestao_aulas/${tipo}`);
  }

  return (
    <>
      <div className="container col-sm-12 col-md-6 col-lg-3 mt-3">
        <h2 className="text-center">{titulo}</h2>
        <form onSubmit={submit}>
          <label className="form-label">Nome completo:</label>
          <input
            className="form-control"
            type="text"
            value={dataAula}
            onChange={(e) => setDataAula(e.target.value)}
          />

          <label className="form-label">Telefone:</label>
          <input
            className="form-control"
            type="text"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
          />

          <label className="form-label">Email:</label>
          <input
            className="form-control"
            type="text"
            value={horaFim}
            onChange={(e) => setHoraFim(e.target.value)}
          />

          <label className="form-label">CPF:</label>
          <input
            className="form-control"
            type="text"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
          />

          <label className="form-label">Matrícula (profissionais):</label>
          <input
            className="form-control"
            type="text"
            value={instrutor}
            onChange={(e) => setInstrutor(e.target.value)}
          />

          <label className="form-label">Data de nascimento:</label>
          <input
            className="form-control"
            type="date"
            value={unidadeCurricular}
            onChange={(e) => setUnidadeCurricular(e.target.value)}
          />

          <label className="form-label">Crie uma senha:</label>
          <input
            className="form-control"
            type="password"
            value={ambiente}
            onChange={(e) => setAmbiente(e.target.value)}
          />

          <label className="form-label">Confirme sua senha:</label>
          <input
            className="form-control"
            type="password"
            value={ambiente}
            onChange={(e) => setAmbiente(e.target.value)}
          />

          <a className="btn btn-danger mt-3 float-start" href="">Cancelar</a>
          <button className="btn btn-success mt-3 float-end" type="submit">{textoBotao}</button>
        </form>
      </div>
    </>
  );
}

export default FormAula;