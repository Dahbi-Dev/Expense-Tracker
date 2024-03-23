import React, {useEffect, useState} from 'react'


export default function Balance({balances}) {
    const [balance , setBalance] = useState(0)

    useEffect(()=>{

        setBalance(balances)
    },[balances]);
  return (
    <div className='bg-white border border-success text-center rounded'>
        <p className='lead mt-3'>
            <span className='fw-bold me-2'>Balance:</span>
            <span className='badge bg-success'>$ {balance}</span>
        </p>
    </div>
  )
}
