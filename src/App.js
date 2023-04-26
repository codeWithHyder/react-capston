import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Header from './components/Header';
import Details from './pages/Details';
import Home from './pages/Home';
import NoMatch from './pages/noMatch';
import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>

        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:coinId" element={<Details />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </div>

      </Provider>
    </Router>
  );
}

export default App;
