import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <button className="close">Закрыть</button>
    </div>
  );
}

export default App;
