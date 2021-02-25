import React from 'react';
import Layout from './components/Layout';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
