import {
  Button, ButtonGroup, FormControl,
} from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../Context/context';

export default function AskLogic() {
  const { formdata, setFormData } = useContext(Context);

  const handleChange = ({ target }) => {
    const value = target.innerText;
    setFormData((prevState) => ({ ...prevState, Pergunta1: value }));
  };

  return (
    <FormControl>
      <ButtonGroup>
        <Button
          onClick={(event) => handleChange(event)}
          size="large"
          variant={formdata.Pergunta1 === 'SIM' ? 'contained' : 'outlined'}
        >
          Sim
        </Button>
        <Button
          onClick={(event) => handleChange(event)}
          size="large"
          variant={formdata.Pergunta1 === 'NÃO' ? 'contained' : 'outlined'}
        >
          Não
        </Button>
      </ButtonGroup>
    </FormControl>
  );
}
