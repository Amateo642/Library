import React from "react";
import './stylesheets/style.css';
import Search from "./components/Search";
import BooksList from "./components/BooksList";
import BookPreview from "./components/BookPreview";
import Preloader from "./components/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { selectBookAction } from "./store/store";
import { getBooksByTitleAction, getMoreBooksAction } from "./store/asyncActions";

function App() { //приложение
  const dispatch = useDispatch(); //создали диспач чтобы изменить состояние. В него передается экшн. То как менять состояние определенно внутри редюсера
  const loading = useSelector(state => state.loading);//с помощью хука который принимает ф-цию, которая в свою очередь принимает состояние, получили нужные переменные
  const books = useSelector(state => state.books);
  const totalBooks = useSelector(state => state.totalBooks);
  const selectedBook = useSelector(state => state.selectedBook);


  function handleBookSelect(book) { //обработчик выбранной книги
    dispatch(selectBookAction(book)) //передали экшн с книгой
  }

  function handleLoadMore() { //обработчик загрузки дополнительных книг
   dispatch(getMoreBooksAction()) //передали экшн доп.книг
  }
            //render
  return (
    <div className="App">
      <Search />

      {totalBooks !== undefined && <label>Found {totalBooks} books</label>}

      {selectedBook ? (<BookPreview book={selectedBook}/>) : (<BooksList books={books} onBookSelect={handleBookSelect} />)}

      {loading && <Preloader /> }
      
      {totalBooks - books.length > 0 && !loading &&
        <div className="pagination">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      }
    </div>
  );
}

export default App;
//пройтись по коду, прокомментировать
//кнопка лоад мор и тотал букс в превью. Стилизовать превью
//фильтр и сортировка.
//адаптив
//TypeScript