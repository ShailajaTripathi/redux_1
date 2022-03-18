import { useDispatch, useSelector } from 'react-redux';
import { buyToken } from '../Redux/countAction';
    
const CountContainer = () => {

    const {number_of_tokens} = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Tokens Remaining : <br/>{number_of_tokens }</h2>
            <button onClick={()=>{ dispatch(buyToken() ) }}>Buy Token</button>
        </div>
    )
}

export default CountContainer