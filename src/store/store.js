import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const defaultState = { //дефолтное состояние, присваивается в момент как пользователь открыл приложение
    books: [],
    totalBooks: undefined,
    selectedBook: undefined,
    loading: false,
    searchValue: "",
};

const SELECT_BOOK = "SELECT_BOOK";
const BOOKS = "GET_BOOK";
const TOTALBOOKS = "GET_TOTAL_BOOKS";
const LOADING = "GET_LOADING";
const SEARCH_VALUE = "SEARCH_VALUE";
const GET_BOOKS = "GET_MORE_BOOKS"; //не подгружать книги в тот же массив
const ADD_BOOKS = "ADD_BOOKS"; //добавлять в тот же массив книги

export const reducer = (state = defaultState, action) => { //создали редюсер(обычная ф-ция). принимает 2 параметра: состояние и экшн(просто js обьект с полем type по которму определять как состояние будет изменяться). 
  switch (action.type) { //в зависимости от типа отрабатывает case
    case SELECT_BOOK:
      return {...state, selectedBook: action.payload}//состояние не изменяемое, поэтому мы каждый раз создаем новый обьект с старым состоянием и изменяем поле.
    case BOOKS:
      return {...state, books: [...state.books, ...action.payload]}
    case TOTALBOOKS:
      return {...state, totalBooks: action.payload}
    case LOADING:
      return {...state, loading: action.payload}
    case SEARCH_VALUE:
      return {...state, searchValue: action.payload}
    case GET_BOOKS:
      return {...state, books: [...action.payload]}
    case ADD_BOOKS:
      return {...state, books: [...state.books, ...action.payload]}
    default:
      return state //по дефолту возвращает состояние(текущее)
  }
}

export const selectBookAction = (payload) => ({type: SELECT_BOOK, payload});
export const booksAction = (payload) => ({type: BOOKS, payload});
export const totalBooksAction = (payload) => ({type: TOTALBOOKS, payload});
export const loadingAction = (payload) => ({type: LOADING, payload});
export const searchValueAction = (payload) => ({type: SEARCH_VALUE, payload});
export const getBooksAction = (payload) => ({type: BOOKS, payload});
export const addBooksAction= (payload) => ({type: GET_BOOKS, payload});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); //cоздали стор. Обьект сожержит методы полчения состояния getState, изменить состояние - диспатч.