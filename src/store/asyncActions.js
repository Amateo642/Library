import {getBooksByTitle} from "../api/booksApi"
import { setBooksAction, addBooksAction, loadingAction, totalBooksAction, errorAction } from "./store";

export const getBooksByTitleAction = (title) => { //по запросу получаем книги
  if (!title) {
    return;
  }

  return function(dispatch, getState) {
    const {orderBy} = getState();
      dispatch(loadingAction(true));
      dispatch(errorAction(false));
      getBooksByTitle(title, orderBy)
        .then(({books, totalBooks}) => {
          dispatch(setBooksAction(books));
          dispatch(totalBooksAction(totalBooks));
        })
        .catch(() => {
          dispatch(errorAction(true));
        })
        .finally(() => {
          dispatch(loadingAction(false));
        });
  }
}

export const getMoreBooksAction = () => { // получить больше книг.
    return function(dispatch, getState) {
      const {searchValue, books, orderBy} = getState();
        dispatch(loadingAction(true));
        dispatch(errorAction(false));
        getBooksByTitle(searchValue, orderBy, books.length)
            .then(({books}) => {
                dispatch(addBooksAction(books));
            })
            .catch(() => {
              dispatch(errorAction(true));
            })
            .finally(() => {
              dispatch(loadingAction(false));
            });
    }
}

// export const getSortingBooksAction = (sorting) => {
//   return function(dispatch, getState) {
//     const {books} = getState();
//       dispatch(loadingAction(true));
//       getBooksByTitle(books, sorting)
//       .then(({books}) => {
//         dispatch(sortingBooksAction(sorting))
//         dispatch(booksAction(books));
//         dispatch(loadingAction(false));
//       })
//   }
// }
