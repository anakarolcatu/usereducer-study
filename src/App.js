import './App.css';
import { useReducer, useState } from 'react';
import reducer, { ADICIONAR_FRASE, EXCLUIR_FRASE } from './reducer';

function App() {

  const [frase, setFrase] = useState('');
  //const [frases, setFrases] = useState([])
  //o reducer é o arquivo reducer criado, e o estado inicial será um array vazio(são os dois argumentos do hook)
  const [frases, dispatch] = useReducer(reducer, [])
  //retorna um array de 2 posições, o primeiro é o estado, que são as frases, e uma função que permite "despachar" ações.

  function salvarFrase (evento) {
    evento.preventDefault()
    //no lugar de faser o setFrase, usamos o dispatch passando um objeto do tipo que criamos no switch e a frase que quer adicionar(que é a do estado)
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase
    })
    //setFrases([...frases, frase])
  }

  function excluir (fraseExcluida) {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida
    })
  }

  return (
    <div className="App">
      <form onSubmit={salvarFrase}>
        <textarea 
          value={frase}
          onChange={evento => setFrase(evento.target.value)}
          placeholder='Type your phrase'
          required/>
        <br />
        <button>Save</button>
      </form>
      {frases.map((fraseAtual, index) => <p key={index}>{fraseAtual} - <button onClick={() => excluir(fraseAtual) }>delete</button></p>)}
    </div>
  );
}

export default App;
