import { FormControl, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../Context/context';

export default function Justify() {
  const { setFormData } = useContext(Context);

  const handleChange = ({ target }) => {
    const values = target.value;
    setFormData((prevState) => ({ ...prevState, Pergunta4: values }));
  };

  return (
    <FormControl>
      <TextField
        variant="filled"
        label="Justify"
        fullWidth
        onChange={(event) => handleChange(event)}
        required
      />
    </FormControl>
  );
}
