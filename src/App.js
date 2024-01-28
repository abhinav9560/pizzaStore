import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Navigation from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="*" element={<Container />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
