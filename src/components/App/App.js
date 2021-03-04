import Header from '../Header/Header';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import CategoriesFeed from '../CategoriesFeed/CategoriesFeed';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import './App.css';
import Hero from '../Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Clients/>
      <Services/>
      <CategoriesFeed/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
