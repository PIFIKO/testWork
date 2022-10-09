
import './view-component.css';

const EmployeesList = ({fin}) => {
    
    const item = fin.map(item => {
        if (item === ''){
            return 
        }
        return(
            <span key = {item.id} className="list-group-item-label">{item.title} {item.value} {item.uah} {item.ya}</span>
        )
    })
    
    return (
        <main>
            <div className="app-list list-group">
                <div className="list-group-item d-flex justify-content-between">
                    {item}
                </div>
            </div> 
        </main>
        
        
    )
}

export default EmployeesList;