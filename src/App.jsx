import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Curriculum from "./paginas/Curriculum";
import Proyectos from "./paginas/Proyectos";

import Header from './componentes/Header/Header';
import Avatar from './componentes/Avatar/Avatar'
import Footer from './componentes/Footer/Footer';

import styles from './App.module.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header>
          <Avatar src="avatar.jpeg"/>
        </Header>
        <div className={styles.contenedor}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App