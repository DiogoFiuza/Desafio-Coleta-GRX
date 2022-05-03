import React, { useContext } from 'react';
import {
  FormControl, Radio, RadioGroup, FormControlLabel,
} from '@mui/material';
import { Context } from '../Context/context';

export default function AskWorkGRX() {
  const { setFormData } = useContext(Context);

  const handleChange = (event) => {
    const value = event.target.defaultValue;
    setFormData((prevState) => ({ ...prevState, Pergunta3: value }));
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={(event) => handleChange(event)}
        row
      >
        <FormControlLabel value="SIM" control={<Radio />} label="Sim" />
        <FormControlLabel value="NÃO" control={<Radio />} label="Não" />
        <FormControlLabel value="Não sei" control={<Radio />} label="Não sei" />
        <FormControlLabel value="Agora!!" control={<Radio />} label="Agora!!" />
      </RadioGroup>
    </FormControl>
  );
}
