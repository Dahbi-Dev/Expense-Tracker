import React, {useEffect, useState} from 'react'


export default function Balance({balance}) {
    const [currentBalance , setCurrentBalance] = useState(0)

    useEffect((balance)=>{

        setCurrentBalance(balance)
    },[balance]);
  return (
    <div className={`bg-white border  ${balance <= 0 ? 'border-danger' : 'border-success'}  text-center rounded`}>
        <p className='lead mt-3'>
            <span className='fw-bold me-2'>Money:</span>
            <span className={balance <= 0 ? 'badge bg-danger' : 'badge bg-success'}>{balance} DH</span>
        </p>
    </div>
  )
}
