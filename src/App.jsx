import { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Categorias from './components/Categorias/Categorias'
import ModalFilter from './components/Modal/ModalFilter'
import Cards from './components/Modal/HouseCards/Cards'
import Placeholder from './components/Placeholder'
import Registro from './components/Registro/Registro'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importando Material Design Icons
import '@mdi/font/css/materialdesignicons.css'


export default function App() {

  //estados do app
  const [isLoading, setIsLoading] = useState(true);
  const [catID, setCatID] = useState(1);
  const [allHouses, setAllHouses] = useState([]);
  const [filterHouses, setFilterHouses] = useState([]);


  //filtrar os dados da API por categoria (usar como evento onClick em Categorias.jsx)
  const filterByID = (id) => {
    const newList = allHouses.filter((item) => {
      return item.categoria === id;
    })
    setFilterHouses(newList);
  }

  useEffect(() => {
    if (allHouses.length > 0) {
      filterByID(catID);
    }
  }, [catID, allHouses]);


  const changeCat = (id) => {
    setCatID(id);
    filterByID(id);
  }

  //primeira renderização. useEffect para pegar dados de uma API e colocar em um estado para filtrar os cards em Cards.jsx
  useEffect(() => {
    //pegar os dados da API para os cards
    fetch('https://curso.programacaoweb.com.br/api-airbnb/')
      //criar um arquivo JSON com os dados da API
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //erro caso a API não responda
        throw new Error('Não foi possível obter os dados');
      })
      //colocar os dados da API no estado allHouses
      .then((responseJSON) => {
        setAllHouses(responseJSON);

        //filtrar os dados da API por categoria antes de encerrar o loading
        setFilterHouses(responseJSON.filter((item) => item.categoria === catID));
        setIsLoading(false);
      })
      //erro caso nada funcione
      .catch((error) => {
        console.log(error);
      })
  }, []);

  //filtrar por preço
  const filterByPrice = (CatID, min, max) => {
    const newPriceList = allHouses.filter((item) => {
      return item.categoria === catID && item.preco >= min && item.preco <= max;
    })
    setFilterHouses(newPriceList);
  }

  //resetar filtros no Modal
  const resetFilters = (id) => {
    filterByID(id);
  }



  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Categorias changeCat={changeCat} />
              {
                isLoading ?
                  <Placeholder />
                  :
                  <Cards dados={filterHouses} isLoading={isLoading} />
              }
              <ModalFilter resetFilters={resetFilters} catID={catID} filterByPrice={filterByPrice} itens={filterHouses} />
            </>
          } />
          <Route path="/Registro" element={
            <>
              <Registro />
            </>
          } />
        </Routes>
      </BrowserRouter >
      <Footer />
    </>
  )
}
