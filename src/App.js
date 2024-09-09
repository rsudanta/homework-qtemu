import FooterTemplate from './templates/FooterTemplate';
import MainTemplate from './templates/MainTemplate';
import NavbarTemplate from './templates/NavbarTemplate';

function App() {
  return (
    <div>
      <NavbarTemplate />
      <div className='container mt-3'>
        <MainTemplate />
        <FooterTemplate />
      </div>
    </div>
  );
}

export default App;
