import Header from './Header'
import {Outlet} from 'react-router-dom'
import {TransactionContextProvider} from '../contexts/TransactionContext'
import {useParams} from 'react-router-dom'

function Layout() {
    const params = useParams()
    console.log(params)
    return(
        <TransactionContextProvider>
        <div className='d-flex flex-column vh-100'>
            <Header/>
            <div className='container-fluid py-4 flex-grow-1 max-w-xl'>
                <Outlet />
            </div>
        </div>
        </TransactionContextProvider>
    )
}

export default Layout