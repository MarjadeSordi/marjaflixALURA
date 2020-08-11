import {useState} from 'react';

function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
  
      });
    }
  
    function handleChange(InfosdoEvento) {
      setValue(
        InfosdoEvento.target.getAttribute('name'),
        InfosdoEvento.target.value,
      );
    }
  
    function clearForm(){
      setValues(valoresIniciais);
    };
  
    return{
      values,
      handleChange,
      clearForm, 
    };
  }

  export default useForm; 