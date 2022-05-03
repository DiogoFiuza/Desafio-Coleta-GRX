import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from '../Context/context';
import Forms from '../Pages/Forms';
import DataResults from '../Pages/DataResults';

export default function Router() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/dados" element={<DataResults />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
