import Transaction from './Transaction.js'
import {useContext} from 'react'
import {TransactionContext} from '../contexts/TransactionContext'


function TransactionList () {
    const ctx = useContext(TransactionContext)
    return (
        <ul className='list-group'>
            {ctx.transactionList.map(item=> {
                return (<Transaction date={item.date} payee={item.payee} category={item.category.name} amount={item.amount}/>)
            })}
        </ul>
    )
}
export default TransactionList