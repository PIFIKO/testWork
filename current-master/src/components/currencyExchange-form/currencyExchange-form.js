import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './currencyExchange-form.css';

const EmployeesAddForm = ({current, onCharSelected}) => {
    // const {current, onCharSelected} = props;


    const [currentPay, setCurrentPay] = useState('');
    const [sumPay, setSumPay] = useState('');
    const [currency, setСurrency] = useState('');

    const [currentNameSell, setCurrentNameSell] = useState('');
    const [sumSell, setSumSell] = useState('');
    const [heroElementcurr, setHeroElementcurr] = useState('');
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const pay = {
            id: uuidv4(),
            value: (currentPay * currency).toFixed(2),
            title: 'Покупка за :',
            uah: 'UAH'
        }
        setSumPay(pay)
    }


    const onSubmitHandlerSell = (e) => {
        e.preventDefault();
        const sale = {
            id: uuidv4(),
            value: ( currentNameSell / +heroElementcurr[0] ).toFixed(2),
            title: 'Продажа за:',
            ya: heroElementcurr[1]
        }
        setSumSell(sale)
        
    }
    useEffect(() =>{
        onCharSelected([sumPay, sumSell]);
    },[sumPay])
    
    useEffect(() =>{
        onCharSelected([sumPay, sumSell]);
    },[sumSell]);

    useEffect(() =>{
        setSumPay(defVal)
        setSumSell(defVal)
    },[])
    
    const defVal = () =>{
        return {
        id: uuidv4(),
        value: 0,
        title: 'Ожидание :', 
        } 
    }
    
    const renderFiltersPay = (current) => {
        
        if (current && current.length > 0 ) {
            return current.map(({ buy, name}) => {
                return <option key={uuidv4()} value={buy}>{name}</option>
            })
        }
    }
    const renderFiltersSale = (current) => {
        
        if (current && current.length > 0 ) {
            return current.map(({sale, name}) => {
                return <option key={uuidv4()} value={[sale, name]}>{name}</option>
            })
        }
    }

    return (
    <footer>
        <div className="app-add-form">
        <h3>Покупка Валюты</h3>
        <form  className="add-form d-flex" onSubmit={onSubmitHandler}>
                <input 
                    required
                    type="number" 
                    name="buy" 
                    className="form-control new-post-label"
                    id="buy" 
                    placeholder="Ведите Значение"
                    value={currentPay}
                    onChange={(e) => setCurrentPay(e.target.value)}/>
                <select 
                    required
                    className="form-control new-post-label" 
                    id="buy" 
                    name="buy"
                    value={currency}
                    onChange={(e) => setСurrency(e.target.value)}>
                    <option value="">Выберете валюту...</option>
                    {renderFiltersPay(current)}
                </select>
                <button type="submit" className="btn btn-outline-light">Менять</button>
        </form>


        <h3>Продажа Валюты</h3>
        <form  className="add-form d-flex" onSubmit={onSubmitHandlerSell}>
                <input 
                    required
                    type="number" 
                    name="sale" 
                    className="form-control new-post-label"
                    id="sale" 
                    placeholder="Ведите Значение в UHA"
                    value={currentNameSell}
                    onChange={(e) => setCurrentNameSell(e.target.value)}/>
                 <select 
                    required
                    className="form-select" 
                    id="sale" 
                    name="sale"
                    value={heroElementcurr} 
                    onChange={(e) => setHeroElementcurr((e.target.value).split( ','))}>
                    <option value="">Выберете валюту...</option>
                    {renderFiltersSale(current)}
                </select>
                <button type="submit" className="btn btn-outline-light">Менять</button>
        </form>
        </div>
    </footer>
    )
}

export default EmployeesAddForm;