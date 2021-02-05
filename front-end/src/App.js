import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';

function App() {
  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inpuTitulo, setInpuTitulo] = React.useState("");

  //Redux
  const frutas = useSelector((state) => state.frutasReducer.frutas);
  const titulo = useSelector((state) => state.tituloReducer.titulo);
  
  const dispatch = useDispatch();

  function adicionarFruta(event) {
    event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }

    dispatch({type:"ADICIONAR", value: objFruta})

  }

  function alterarTitulo(event){
    setInpuTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value })
  }

  return (
    <div>
      
      <Menu />

      <form>
      <label>Título   </label>
      <input 
      placeholder="Digite um título!" 
      value={inpuTitulo}
      onChange={alterarTitulo}
      />

      </form>

      <h1>{titulo}</h1>

      <form onSubmit ={adicionarFruta}> 

        <input 
        placeholder="Por favor, digite uma fruta." 
        value={inputFrutas}
        onChange={(event) => setInputFrutas(event.target.value)}
        />

        <button className="botao">
          Enviar
        </button>

      </form>
     {frutas.map((fruta, index) => {
       return(
         <li key={index}>{fruta.nome}</li>
       )
     })}
    </div>
  );
}

export default App;
