import './App.css';

function App() {
  return (
    <div className="App">
      <header className='cabecalho'>
        <nav className='container navbar navbar-expand'>
          <div className='logo'>
            <span className='navbar-brand'>Logo</span>
          </div>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><a className='nav-link rosa' href="">Home</a></li>
            <li className='nav-item'><a className='nav-link rosa' href="">Sobre Nós</a></li>
            <li className='nav-item'><a className='nav-link rosa' href="">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className='conteudo pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 artigos p-4'>
              <h2>Artigos</h2>
              <div className='produto'>
                <div>
                  <h4>Body Splash</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas amet possimus? Harum asperiores a saepe iusto id enim sapiente quae sint eius hic ipsa, quisquam voluptas et aliquam nihil!</p>
                  <button className='btn btn-warning me-2'>Favoritar</button>
                  <button className='btn btn-success'>Comprar</button>
                </div>
              </div>
              <div className='produto'>
                <div>
                  <h4>Desodorante</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptas amet possimus? Harum asperiores a saepe iusto id enim sapiente quae sint eius hic ipsa, quisquam voluptas et aliquam nihil!</p>
                  <button className='btn btn-warning me-2'>Favoritar</button>
                  <button className='btn btn-success'>Comprar</button>
                </div>
              </div>
            </div>
            <div className='col-2 perfumaria'>
              <h3>Perfumaria</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
