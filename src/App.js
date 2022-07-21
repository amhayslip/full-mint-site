import React from 'react';
import { useState } from 'react';
import MainMint from './MainMint';
import Navbar from './NavBar';

function App() {
  const [accounts, setAccounts] = useState([])
  return (
    <div className="App">
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
