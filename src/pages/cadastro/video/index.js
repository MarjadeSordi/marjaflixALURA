import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]); 
  const categoryTitles = categorias.map (( {titulo}) => titulo);
  const {handleChange,values} = useForm({
    titulo: 'Vídeo Padrão',
    url: 'www.url.com',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer)  => {
      setCategorias(categoriasFromServer);
    })
}, []);

    return(
      <PageDefault>
       <h1> Cadastro de Vídeo </h1>

       <form onSubmit={(event) => {
         event.preventDefault();

         const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
         });

         videoRepository.create({
           titulo: values.titulo,
           url: values.url,
           categoriasId: categoriaEscolhida.id,
         })
         .then(() => {
          console.log('Cadastrou com Sucesso!');
          history.push('/'); 
         })

      
       }}>

       <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />   

        <FormField
          label="Categoria do Vídeo"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions= {categoryTitles}
        />   

       <Button type="submit">
         Cadastrar
       </Button>

       </form>


        <Link to='/cadastro/categoria'>
        Cadastrar categoria 
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo; 