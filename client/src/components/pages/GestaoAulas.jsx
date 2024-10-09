import { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import { Link, useParams } from 'react-router-dom';

function GestaoAulas() {
  // {tipo} faz uso do useParams que é uma variável passada via url
  // useParams deve ser declarado na rota em App.jsx como exemplo o
  // /gestao_aulas/:tipo
  const { tipo } = useParams();
  // bababababab
  const [exibeAlerta, setExibeAlerta] = useState(false);
  const [tipoMensagem, setTipoMensagem] = useState(tipo);
  const [classeMensagem, setClasseMensagem] = useState('');
  const [textoMensagem, setTextoMensagem] = useState('');
  // bibibibibi
  useEffect(() => {
    if (tipoMensagem) {
      setExibeAlerta(true);
      atualizaMensagem();
      setTimeout(() => {
        setExibeAlerta(false);
      }, 5000);
    }
  }, [tipoMensagem]);
  // lindo sou
  function mensagemDelete() {
    setTipoMensagem('deletada');
  }

  function atualizaMensagem() {
    switch (tipoMensagem) {
      case 'cadastrada':
        setClasseMensagem('alert alert-success');
        setTextoMensagem('Aula cadastrada');
        break;
      case 'deletada':
        setClasseMensagem('alert alert-danger');
        setTextoMensagem('Aula deletada');
        break;
      case 'editada':
        setClasseMensagem('alert alert-primary');
        setTextoMensagem('Aula editada');
        break;
    }
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='text-center mt-3'>Gestão de Aulas</h1>
        {exibeAlerta && <div className={classeMensagem}>Aula cadastrada</div>}
        <div className='col-12 text-end my-2'>
          <Link to='/cadastro_aula' className='btn btn-primary ms-auto'>Cadastro aula</Link>
        </div>
        <TabelaAulas tipo='edit' onDeleteSuccess={mensagemDelete} />
      </div>
    </>
  )
}

export default GestaoAulas;