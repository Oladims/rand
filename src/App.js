import Header from  './components/Header';
import Banner from  './components/Banner';
import Image from  './components/Image';
import Company from  './components/Company';
import Jobs from  './components/Jobs';
import Footer from  './components/Footer';
import './App.css';
function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="" alt="logo" /> */}

      <Header />
      <Banner />
      <Image />
      <Company />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
