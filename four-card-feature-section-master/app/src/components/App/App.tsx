import React from 'react';

import strings from '../../strings.json';
import { StringsContextProvider } from '../../context/StringsContext';
import './App.scss';

function App() {
  return (
    <StringsContextProvider value={strings}>
      <div className="App">
        App
      </div>
    </StringsContextProvider>
  );
}

export default App;
