export const initialReducer = []
const FETCH_TRANSACTION = 'FETCH_TRANSACTION'
const CREATE_TRANSACTION = 'CREATE_TRANSACTION'
const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION'
const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION'


export const reducer = (state,action) => {

    switch (action.type) {
        case FETCH_TRANSACTION : {
            return [...state,...action.transactionList].sort((a,b)=>{
                if(a.date.slice(0,10) < b.date.slice(0,10)) return 1;
                if(a.date.slice(0,10) === b.date.slice(0,10)) return 0;
                if(a.date.slice(0,10) > b.date.slice(0,10)) return -1;
            });
             
        }
        case CREATE_TRANSACTION : {
                break;
        }
        case UPDATE_TRANSACTION : {
                break;
        }
        case REMOVE_TRANSACTION : {
                break;
        }
        default : {
            return state;
        }
    }

}

export function fetchTransaction (list) {
    return {
        type: FETCH_TRANSACTION,
        transactionList : list
    }
}

