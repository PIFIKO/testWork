import "./app-info.css";

const AppInfo = ({current}) => {
    // const {current} = props;
    
    const item = current.map(item => {
        return(
            <li key={item.id}>
                <h2>{item.name} : {item.buy} / {item.sale} </h2>
            </li>
        )
        
    })


    return (
        <header>
        <div className="app-info">
            <h1>Курс валют </h1>
            <ul>
                {item}
            </ul>
        </div>
        </header>
        
    )
}

export default AppInfo;