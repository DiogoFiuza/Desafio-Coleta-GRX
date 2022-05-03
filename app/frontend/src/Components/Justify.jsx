import { FormControl, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Context } from '../Context/context';

export default function Justify() {
  const { setFormData } = useContext(Context);
  const [textLength, setTextLegth] = useState(200);

  const handleChange = ({ target }) => {
    const values = target.value;
    setFormData((prevState) => ({ ...prevState, Pergunta4: values }));
    setTextLegth(200 - target.value.length);
  };

  return (
    <FormControl>
      <TextField
        variant="filled"
        label="Justify"
        fullWidth
        onChange={(event) => handleChange(event)}
        inputProps={{ minLength: 15, maxLength: 200 }}
        required
      />
      <span className="contador">
        {textLength}
        /200
      </span>
    </FormControl>
  );
}
