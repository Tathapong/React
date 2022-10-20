import Layout from './components/Layout'
import Home from './pages/Home'
import TransactionAction from './pages/TransactionAction'

import {Routes,Route,Navigate} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route path='home' element={<Home />} />
        <Route path='new' element={<TransactionAction/>} />
        <Route path='transaction/:transactionId' element={<TransactionAction/>} />
        <Route index element={<Navigate to='/home'></Navigate>}/>
      </Route>
        <Route path='*' element={<Navigate to='/home/'/>}/>
    </Routes>

  );
}

export default App;
