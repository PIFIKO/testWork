import useService from '../../services/Service'

import { useState, useEffect } from 'react';

import AppInfo from '../app-info/app-info';
import ViewComponent from '../view-component/view-component';
import CurrencyExchange from '../currencyExchange-form/currencyExchange-form';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage'

import './app.css';

const App = () => {

  const {getAllCharacters, loading, error} = useService();


  const [current, setCurrent] = useState([])
  const [fin, setFin] = useState([])
  
  useEffect(() => {
    onGetCurrent();
  }, [])

  const onGetCurrent = () => {
    getAllCharacters()
        .then(setCurrent)
        
}

const onCharSelected = (newArr) => {
    setFin(newArr);
}
  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error) ? <ViewComponent fin = {fin} /> : null;

  return (
    <div className="app">
        <AppInfo current = {current} />
         {errorMessage}
         {spinner}
         {content}
        <CurrencyExchange current = {current} onCharSelected={onCharSelected}/>
    </div>
  );
}

export default App;
