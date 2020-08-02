import React, { useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'


function CadastroCategoria(){
  

const valoresIniciais = {

  nome: '',
  descricao: '',
  cor: '',

}
const[categorias, setCategorias] = useState([]);
const[values, setValue]=useState(valoresIniciais);

function setValues(chave,valor){

  setValue( {
      ...values,
      [chave]: valor,
    })
}


function handleChange(InfosdoEvento) {
  const{getAttribute,value} = InfosdoEvento.target;
  setValues(
  getAttribute('name'),
  InfosdoEvento.target.value
  );
  }

    return(
      <PageDefault>
       <h1> Cadastro de categoria: {values.nome} </h1>

      

        <form onSubmit={function handleSubmit(InfosdoEvento){
          InfosdoEvento.preventDefault();
          setCategorias ([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais)
        }}>

        <FormField 
        label='Nome da Categoria'
        type='text'
        name ='nome'
        value= {values.nome}
        onChange={handleChange}
        />

        <FormField
        label = "Descrição"
        type='text'
        name ='descricao'
        value= {values.descricao}
        onChange={handleChange}
        />

        <FormField 
        label="Cor"
        type ='color'
        name= 'cor'
        value= {values.cor}
        onChange={handleChange}
        />
      



        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria, indice)=> {
          return(
            <li key= {`${categoria} ${indice}`}>
              {categoria.nome}
            </li>
          )

          })}

        </ul>

      <Link to="/">
      Ir para home
      </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria; 