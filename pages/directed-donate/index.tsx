import React, { useState, useRef, useEffect } from 'react';
import { NextPage } from 'next';

import { Layout } from '../../components';
import { Button } from '../../components';

import {AiFillCreditCard} from 'react-icons/ai'
import {RiCoinsLine} from 'react-icons/ri'

interface DirectedDonateProps {}

const DirectedDonate: NextPage<DirectedDonateProps> = () => {
    const [donType, setDonType] = useState('')
    const [period, setPeriod] = useState('')
    const [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [value, setValue] = useState(1250)
    

    const connectWallet = () =>{
        alert('Connect Wallet')
    }

    const handleDonation = () => {
        let amountCase = amount;
        if(paymentMethod === 'card'){
            if(period=== 'monthly'){
                switch(amountCase){
                    case '12':
                        window.location.href = ''
                        break;
                    case '25':
                        window.location.href = ''
                        break;
                    case '50':
                        window.location.href = ''
                        break;
                    case 'custom':
                        window.location.href = ''
                        break;
            }
            }else if(period === 'one-off'){
                switch(amountCase){
                    case '12':
                        window.location.href = ''
                        break;
                    case '25':
                        window.location.href = ''
                        break;
                    case '50':
                        window.location.href = ''
                        break;
                    case 'custom':
                        window.location.href = ''
                        break;
            }

        }
    }       
        else if(paymentMethod === 'crypto'){
            connectWallet()
        }
    }

    const METHOD = () => {
        return (
            <div className="payment_container">
                <h5>Select a payment method</h5>
                <div className="method_buttons">
                    <button
                    style={{backgroundColor:paymentMethod === 'card' ? '#4D6F58' : '#fff',
                    color: paymentMethod === 'card' ? '#fff' : '#4D6F58'}}
                    onClick={() => {
                        setPaymentMethod('card')
                    }}
                    >
                        <div className="icon">
                        <AiFillCreditCard 
                        />
                        </div>
                        Credit Card
                    </button>
                    <button
                    style={{backgroundColor:paymentMethod === 'crypto' ? '#4D6F58' : '#fff',
                    color: paymentMethod === 'crypto' ? '#fff' : '#4D6F58'}}
                    onClick={() => {
                        setPaymentMethod('crypto')
                    }}
                    >
                        <div className="icon">
                        <RiCoinsLine />
                        </div>
                        Crypto
                    </button>
                </div>
                <div className="continue">
                    <Button
                        variant='primary'
                        onClick={() => {
                            if(paymentMethod === '') return alert('Please select a payment method');
                            handleDonation();
                        }}
                    >
                        Continue
                    </Button>
                    </div>
            </div>

        )

    }

    const DONATE = () => {
        return (
            <div className='donate_container'>
                <div className="period_buttons">
                    <button
                    style={{backgroundColor:period === 'monthly' ? '#F0F5F1' : '#fff'}}
                    onClick={() => {
                        setPeriod('monthly')
                        setCurrency('USD')
                    }}
                    >
                        Monthly
                    </button>
                    <button
                    style={{backgroundColor:period === 'one-off' ? '#F0F5F1' : '#fff'}}
                    onClick={() => {
                        setPeriod('one-off')
                    }}
                    >
                        One-off
                    </button>
                   
                </div>
                <div className='amount'>
                    <div className="amount_head">
                    <p>How much would you like to donate?</p>
                    {/* DA-USD Toggler */}
                    <div className="toggler"
                    style={
                        {
                            display: period === 'monthly' ? 'none' : 'flex'
                        }
                    }
                    >
                        <p>$</p>
                        <label className="switch">
                        <input onChange={(e)=>{
                            if(e.target.checked){
                                setCurrency('ADA')
                            } else{
                                setCurrency('USD')
                            }

                        }} type="checkbox" />
                        <span className="slider round"></span>
                        </label>
                        <p>₳</p>
                        </div>

                    </div>
                    <div className="amount_buttons">
                        <button
                        style={{backgroundColor:amount === '12' ? '#4D6F58' : '#fff',
                        color: amount === '12' ? '#fff' : '#4D6F58'}}
                        onClick={() => {
                            setAmount('12')
                        }}
                        >
                            {currency === 'ADA' ? '₳100' : '$12'}
                        </button>
                        <button
                        style={{backgroundColor:amount === '25' ? '#4D6F58' : '#fff',
                        color: amount === '25' ? '#fff' : '#4D6F58'}}
                        onClick={() => {
                            setAmount('25')
                        }}
                        >
                            {currency === 'ADA' ? '₳250' : '$25'}
                        </button>
                        <button
                        style={{backgroundColor:amount === '50' ? '#4D6F58' : '#fff',
                        color: amount === '50' ? '#fff' : '#4D6F58'}}
                        onClick={() => {
                            setAmount('50')
                        }}
                        >
                            {currency === 'ADA' ? '₳500' : '$50'}
                        </button>
                        <button
                        style={{backgroundColor:amount === 'custom' ? '#4D6F58' : '#fff',
                        color: amount === 'custom' ? '#fff' : '#4D6F58'
                        }}
                        onClick={() => {
                            setAmount('custom')
                        }}
                        >
                            Custom
                        </button>

                    </div>
                    <div className="custom_input">
                        <input
                        style={{display: amount === 'custom' ? 'flex' : 'none'}}
                        type="number"
                        placeholder='Enter amount'

                        onBlur={(e)=>{
                            if(e.target.value === ''){
                                setAmount('');
                                return;
                            }
                            setValue(Number(e.target.value))
                        }}
                        />
                    </div>
                </div>
                <div className="continue">
                    <Button
                    variant='primary'
                    onClick={()=>{
                        if(period === '') return alert('Please select monthly or one-off');
                        if(amount === '') return alert('Please select an amount');
                        if(amount === 'custom' && value===0) return alert('Please enter an amount');
                        SETVARYING(METHOD)
                    }}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        )
    }
        
    const DONATIONTYPE = () =>{
       
        return (
            <div
            className='donation_type_container'
            >
                <h5>Where would you like to donate?</h5>
                <p>Select your choice to proceed</p>
                <div className="option_buttons">
                    <button
                    style={{backgroundColor:donType === 'directed' ? '#F0F5F1' : '#fff'}}
                    onClick={() => {
                        setDonType('directed')
                    } }
                    >
                        DirectEd
                    </button>
                    <button
                    style={{backgroundColor:donType === 'scholarship' ? '#F0F5F1' : '#fff'}}
                    onClick={() => {
                        setDonType('scholarship')
                    }}

                    >
                        Acess Scholarship
                    </button>
                </div>
                <Button
                variant='primary'
                onClick={()=>{
                    if(donType === '') return alert('Please select an option')
                    if(donType === 'directed'){
                    SETVARYING(
                        DONATE
                    )
                    }else if(donType === 'scholarship'){
                        window.location.href = '/scholarship-pool'
                    }

                }}
                >
                    Continue
                </Button>

            </div>
        )
    }
    const [VARYING, SETVARYING] = useState(DONATIONTYPE)
    /*RE Render component with updates visuals*/
    useEffect(()=>{
        SETVARYING(DONATIONTYPE);
    },[donType])

    useEffect(()=>{
        if(donType === ''){
            return;
        }
        SETVARYING(DONATE)
    }
    ,[period, amount, currency])

    useEffect(()=>{
        if(paymentMethod === ''){
            return;
        }
        SETVARYING(METHOD)
    } ,[paymentMethod])

    return (
        <Layout>
        <div
       className='donations_container'
        >
            <div className="head">
                <h3>Your support shapes the next generation of African tech leaders!</h3>
                <p>Crypto donations goes to our Cardano wallet with ADA handle $directeddev</p>
            </div>
            {VARYING}
        </div>
        </Layout>

    )
}

export default DirectedDonate;