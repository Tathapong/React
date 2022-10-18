import Transaction from './Transaction.js'
function TransactionList () {
    return (
        <ul className='list-group'>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
        </ul>
    )
}
export default TransactionList