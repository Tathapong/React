function Transaction(props) {
    const {date,payee,category,amount} = props

    function genMonthYear() {
        const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        return `${month[+date.slice(5,7)-1]}'${date.slice(2,4)}`
    }

    return (
        <li className='list-group-item d-flex align-items-center bd-callout bd-callout-success'>
            <div className='d-flex flex-fill' role='button'>
                <div className='border border-1 border-dark rounded-2 bg-warning p-2 text-center w-15'>
                    <p className='p-0 m-0 text-black-50 text-3'>{genMonthYear()}</p>
                    <p className='p-0 m-0'>{date.slice(8,10)}</p>
                </div>

                <div className='d-flex justify-content-between align-items-center ps-4 flex-fill'>
                    <div>
                        <p className='mb-1 fw-bold'>{payee}</p>
                        <p className='mb-0 text-3 text-black-50'>{category}</p>
                    </div>
                    <span className='badge bg-success'>{(+amount).toFixed(2)}</span>
                </div>
            </div>
        </li>
    )
}

export default Transaction