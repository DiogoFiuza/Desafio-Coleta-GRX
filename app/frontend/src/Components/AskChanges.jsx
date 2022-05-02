import {
  Button, ButtonGroup, FormControl,
} from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../Context/context';

export default function AskChanges() {
  const { setFormData } = useContext(Context);

  const handleChange = ({ target }) => {
    const value = target.innerText;
    setFormData((prevState) => ({ ...prevState, Pergunta2: value }));
  };

  return (
    <FormControl>
      <ButtonGroup>
        <Button onClick={(event) => handleChange(event)} size="large">Sim</Button>
        <Button onClick={(event) => handleChange(event)} size="large">Não</Button>
      </ButtonGroup>
    </FormControl>
  );
}
