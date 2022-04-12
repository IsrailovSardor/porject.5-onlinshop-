import './App.css';
import Header from './page/Header/Header';

import { Route, Routes } from 'react-router-dom';
import About from './page/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Collection from './page/Collection/Collection';
import CollectionId from './page/CollectionId/CollectionId';
import SaleCard from './page/SaleCard/SaleCard';
import News from './page/News/News';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collectionId/:id" element={<CollectionId />} />
        <Route path="/card/:id" element={<SaleCard />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;