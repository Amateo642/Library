import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const defaultState = { //дефолтное состояние, присваивается в момент как пользователь открыл приложение
    books: [],
    totalBooks: undefined,
    selectedBook: undefined,
    loading: false,
    searchValue: "",
    orderBy: 'relevance',
    error: false,
    genre: 'All'
};

const SELECT_BOOK = "SELECT_BOOK";
const SET_BOOKS = "SET_BOOKS";
const ADD_BOOKS = "ADD_BOOKS";
const TOTALBOOKS = "GET_TOTAL_BOOKS";
const LOADING = "GET_LOADING";
const SEARCH_VALUE = "SEARCH_VALUE";
const RESET_SELECTED_BOOK = "RESET_SELECTED_BOOK";
const CHANGE_SORTING = "CHANGE_SORTING";
const ERROR = "ERROR";
const CHANGE_GENRE = "CHANGE_GENRE";

export const reducer = (state = defaultState, action) => { //создали редюсер(обычная ф-ция). принимает 2 параметра: состояние и экшн(просто js обьект с полем type по которму определять как состояние будет изменяться). 
  switch (action.type) { //в зависимости от типа отрабатывает case
    case SELECT_BOOK:
      return {...state, selectedBook: action.payload}//состояние не изменяемое, поэтому мы каждый раз создаем новый обьект с старым состоянием и изменяем поле.
    case SET_BOOKS:
      return {...state, books: action.payload}
    case ADD_BOOKS:
      return {...state, books: [...state.books, ...action.payload]}
    case TOTALBOOKS:
      return {...state, totalBooks: action.payload}
    case LOADING:
      return {...state, loading: action.payload}
    case SEARCH_VALUE:
      return {...state, searchValue: action.payload}
    case RESET_SELECTED_BOOK: 
      return {...state, selectedBook: undefined}
    case CHANGE_SORTING:
      return {...state, orderBy: action.payload}
    case ERROR:
      return {...state, error: action.payload}
    case CHANGE_GENRE:
      return {...state, genre: action.payload}
    default:
      return state //по дефолту возвращает состояние(текущее)
  }
}

//action creators 

export const selectBookAction = (payload) => ({type: SELECT_BOOK, payload});
export const setBooksAction = (payload) => ({type: SET_BOOKS, payload});
export const addBooksAction = (payload) => ({type: ADD_BOOKS, payload});
export const totalBooksAction = (payload) => ({type: TOTALBOOKS, payload});
export const loadingAction = (payload) => ({type: LOADING, payload});
export const searchValueAction = (payload) => ({type: SEARCH_VALUE, payload});
export const resetSelectedBookAction = () => ({type: RESET_SELECTED_BOOK});
export const changeSortingAction = (payload) => ({type: CHANGE_SORTING, payload});
export const errorAction = (payload) => ({type: ERROR, payload});
export const changeGenreAction = (payload) => ({type: CHANGE_GENRE, payload});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); //cоздали стор. Обьект содержит методы получения состояния getState, изменить состояние - диспатч.