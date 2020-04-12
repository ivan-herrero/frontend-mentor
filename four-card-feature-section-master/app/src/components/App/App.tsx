import React from 'react';

import strings from '../../strings.json';
import { StringsContextProvider } from '../../context/StringsContext';
import Header from '../Header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <StringsContextProvider value={strings}>
      <div className={styles.app}>
        <Header />
      </div>
    </StringsContextProvider>
  );
}

export default App;
