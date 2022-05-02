import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from '../Context/context';
import Forms from '../Pages/Forms';

export default function Router() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
