import {getBooksByTitle} from "../api/booksApi"
import { booksAction, searchValueAction, loadingAction, totalBooksAction } from "./store";

export const getBooksByTitleAction = (title) => { //по запросу получаем книги
  return function(dispatch) {
      dispatch(searchValueAction(title));
      dispatch(loadingAction(true));
      getBooksByTitle(title)
        .then(({books, totalBooks}) => {
          dispatch(booksAction(books));
          dispatch(totalBooksAction(totalBooks));
          dispatch(loadingAction(false));
        });
  }
}

export const getMoreBooksAction = () => { // получить больше книг.
    return function(dispatch, getState) {
      const {searchValue, books} = getState();
        dispatch(loadingAction(true));
        getBooksByTitle(searchValue, books.length)
            .then(({books}) => {
                dispatch(booksAction(books));
                dispatch(loadingAction(false));
      });
    }
}
