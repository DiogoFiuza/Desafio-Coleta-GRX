import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext({});

export function Provider({ children }) {
  const [enableButton, setEnableButton] = useState(true);
  const [formdata, setFormData] = useState({
    Pergunta1: '',
    Pergunta2: '',
    Pergunta3: '',
    Pergunta4: '',
  });

  const values = {
    formdata,
    setFormData,
    enableButton,
    setEnableButton,
  };

  return (
    <Context.Provider value={values} displayName="General-Context">
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
