import {useHttp} from '../hooks/http.hook';

const useService = () => {
    const {request, loading, error} = useHttp();

    const _apiBase = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
 

    const getAllCharacters = async () => {
        const res = await request(`${_apiBase}`);
        const data = res.filter(isBigEnough);
        return data.map(_transform);
    
    }


    const isBigEnough = (value) => {
        return value.ccy === "USD" || value.ccy === "EUR";
      }
    
    const _transform = (item, i) => {
        return {
            id: i,
            name: item.ccy,
            buy: (+item.buy).toFixed(2),
            sale: (+item.sale + Math.random()).toFixed(2)
        }
    }

    return {getAllCharacters, loading, error}
}

export default useService;