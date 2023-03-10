import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import AuthContext from '../../api/AuthContext'
import { getPaymentHistory } from '../../api/requests'
import Payment from './Payment'
import './Payment.css'

function PaymentHistory() {

    let [payments, setPayments] = useState([])

    let {token} = useContext(AuthContext)

    useEffect(() => {
        getPaymentHistory(setPayments, token)
    }, [])


    return (
        <div className="payments-container d-flex align-items-stretch ">
            {payments.map((payment, index) => (
                <Payment key={index} payment={payment}/>
            ))}
        </div>
    )
}

export default PaymentHistory