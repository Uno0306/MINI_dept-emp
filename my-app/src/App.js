import './App.css';
import { Link, Outlet, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Domain from './components/Domain';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <div>
        <Outlet></Outlet>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
