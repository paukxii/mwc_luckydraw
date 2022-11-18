
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataEntryPage from './components/DataEntryPage';
import DataPage from './components/DataPage';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<DataEntryPage />} />
        <Route path="/all" element={<DataPage />} />
      </Routes>
    </>
  );
}

export default App;
