import logo from './logo.svg';
import NavbarComponent from './components/NavbarComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className='container mt-3'>
        <MainComponent />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
