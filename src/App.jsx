import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GrobalStyle';
import GraphScreen from './pages/GraphScreen';
import SensorPage from './pages/SensorPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SensorPage />} />
        <Route path='/graph' element={<GraphScreen />} />
      </Routes>
    </>
  );
}

export default App;
