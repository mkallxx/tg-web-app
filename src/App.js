import './App.css';
import Welcome from './components/Welcome/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TwitterBlue from './pages/TwitterBlue/TwitterBlue';
import AccountPage from './pages/Account/AccountPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/twitter-blue" element={<TwitterBlue />} />
          <Route path="/twitter-accounts" element={<AccountPage />} />
          <Route path="/discord-accounts" element={<AccountPage />} />
          <Route path="/instagram-accounts" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
