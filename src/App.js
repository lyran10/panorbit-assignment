import './App.css';
import { Route,Routes } from 'react-router-dom';
import { MainPage } from './component/pages/mainPage';
import { HomePage } from './component/pages/homePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/home/:id" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
