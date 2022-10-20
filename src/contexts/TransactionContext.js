import {createContext,useReducer,useEffect} from 'react'
import { reducer,initialReducer, fetchTransaction } from '../reducers/TransactionReducer'
import axios from 'axios'

const TransactionContext = createContext()

function TransactionContextProvider(props) {
    const [state,dispatch] = useReducer(reducer,initialReducer)

    useEffect(()=>{
        axios.get('http://localhost:8080/transactions')
        .then(res=> {
            dispatch(fetchTransaction(res.data.transactions))
        }).catch(err=>console.log(err))
    },[])
    

    return (<TransactionContext.Provider value={{transactionList:state}}>
        {props.children}
    </TransactionContext.Provider>)
}
export {TransactionContext,TransactionContextProvider}