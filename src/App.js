import React from "react";
import './stylesheets/style.css';
import Search from "./components/Search";
import BookPreview from "./components/BookPreview";
import Preloader from "./components/Preloader";
import { useSelector } from "react-redux";
import BooksSearchResult from "./components/BooksSearchResult";

function App() { //приложение
  const loading = useSelector(state => state.loading);//с помощью хука который принимает ф-цию, которая в свою очередь принимает состояние, получили нужные переменные
  const selectedBook = useSelector(state => state.selectedBook);

            //render
  return (
    <div className="App">
      <Search />
      
      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksSearchResult />)}

      {loading && <Preloader /> }
    </div>
  );
}

export default App;
//пройтись по коду, прокомментировать
//Стилизовать превью
//фильтр и сортировка. Гугл апи.  getBooksByTitle и в action (title,categories,sorting) передавать обьект с этими параметрами.
//адаптив


//В юрл получить значения ордер бай. Сохранить в стор. Через селект менять сортировку. Для этого через диспатч экшн пейлоад.