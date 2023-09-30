import React, { useState, useRef, useEffect } from 'react';
import { NextPage } from 'next';

import { useRouter } from 'next/router';

import { Layout, Button, ConnectWallet, Modal } from '../../components';

import {AiFillCreditCard} from 'react-icons/ai'
import {RiCoinsLine} from 'react-icons/ri'
import { useWallet } from '@meshsdk/react';
import { Transaction } from '@meshsdk/core';


import Survey from '../../components/Survey/Survey';


import { ModalHandler } from '../../components/Modal/Modal';

const donationAddress =
  'addr_test1qzzanma8z97ltgkg4nup2ta8fyzrgnsz9ur28undfzczsrjy9axchrqjt0rtk22rxr2zp5rquku4a2k4c4cw0duwug2s62nzxf';




interface DirectedDonateProps {}

const DirectedDonate: NextPage<DirectedDonateProps> = () => {
    const [donType, setDonType] = useState('')
    const [period, setPeriod] = useState('')
    const [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [value, setValue] = useState(1250);

    /*Crypto processing states*/
        const [confirmModalVisible, setConfirmModalVisible] = useState<boolean>(false);

        const [processing, setProcessing] = useState<boolean>(false);
        const [errorMessage, setErrorMessage] = useState<string | null>(null);
        const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null);
        const [triggerCryptoPayment, setTriggerCryptoPayment] = useState(false)

        const confirmModalRef = useRef<ModalHandler>(null);
        const successModalRef = useRef<ModalHandler>(null);
        const errorModalRef = useRef<ModalHandler>(null);
        const feedbackModalRef = useRef<ModalHandler>(null);

        const { wallet, connected } = useWallet();

        useEffect(()=>{
          if(currency==='ADA'){
            switch(amount){
              case '12':
              setAmount('100');
              break;
              case '25':
                setAmount('250')
                break;
              case '50':
                setAmount('500')
                break;
            }
          }
          else if(currency==='USD'){
            switch(amount){
              case '100':
              setAmount('12');
              break;
              case '250':
                setAmount('25')
                break;
              case '500':
                setAmount('50')
                break;
            } 
          }
         

        },[currency, amount])
    

        const handleDonate = async (sendAmount: string) => {
            setProcessing(true);
            const convertLovelace = parseInt(sendAmount) * 1000000;
            const sendLovelace = convertLovelace.toString();
        
            if (connected) {
              try {
                const network = await wallet.getNetworkId();
        
                if (network === 0) {
                  setErrorMessage('This dapp only works on Cardano Testnet.');
                  errorModalRef.current?.openModal();
                  setConfirmModalVisible(false);
                  setProcessing(false);
                } else {
                  const tx = new Transaction({ initiator: wallet }).sendLovelace(donationAddress, sendLovelace);
                  const unsignedTx = await tx.build();
                  const signedTx = await wallet.signTx(unsignedTx);
                  const txHash = await wallet.submitTx(signedTx);
        
                  setSuccessfulTxHash(txHash);
                  successModalRef.current?.openModal();
                  setAmount(sendAmount);
                  setConfirmModalVisible(false);
                  setProcessing(false);
                }
              } catch (error: any) {
                if (error.info) {
                  setErrorMessage(error.info);
                } else if (error.message.includes('Insufficient')) {
                  setErrorMessage(`Insufficient funds in your wallet to send ${amount} ADA. Please top up your wallet and try again.`);
                } else {
                  setErrorMessage('Something went wrong. Please try again.');
                }
                errorModalRef.current?.openModal();
                setProcessing(false);
                setConfirmModalVisible(false);
              }
            } else {
              setErrorMessage('Please connect a wallet.');
              errorModalRef.current?.openModal();
              setProcessing(false);
              setConfirmModalVisible(false);
            }
          };
        
      
    
const WALLETJSX = ()=>{
  return (
    <div className="crypto_container">
           
    {
      !connected?
      <div>
        <h5>Connect your wallet to continue</h5>
         <ConnectWallet
        />
      </div>
      :
      <div className='crypto_content'>
        <div className="head">
          <ConnectWallet/>
        

        </div>
        <div>
          <h5>Proceed to Donate</h5>
          <div>
            Amount:
            <input
                type="number"
                placeholder={amount==='custom'?value.toString():amount}
                style={{
                  outline:'none',
                  width:'100px',
                  height:'30px'
                }}
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
        <Button
        onClick={()=>{
          handleDonate(amount==='custom'?value.toString():amount.toString())
        }}
        >
          Continue
        </Button>
      </div>


    }

  </div>

  )
}
    const connectWallet = () =>{
        SETVARYING(
          WALLETJSX
        )

    }

    useEffect(
      ()=>{
        if(connected&& triggerCryptoPayment){
          SETVARYING(
            WALLETJSX
          )
        }
        else{
          return
        }

      }, [connected]
    )

    const handleDonation = () => {
        let amountCase = amount;
        if(paymentMethod === 'card'){
            if(period=== 'monthly'){
                switch(amountCase){
                    case '12':
                        window.location.href = 'https://buy.stripe.com/6oE6s98vi7zV4Ao4gi'
                        break;
                    case '25':
                        window.location.href = 'https://buy.stripe.com/eVaaIpaDq3jFd6U4gt'
                        break;
                    case '50':
                        window.location.href = 'https://buy.stripe.com/5kAdUBaDqcUf7MAaES'
                        break;
                    case 'custom':
                        window.location.href = 'https://donate.stripe.com/aEU9El9zmf2n5EsdR2'
                        break;
            }
            }else if(period === 'one-off'){
                switch(amountCase){
                    case '12':
                        window.location.href = 'https://donate.stripe.com/6oEbMt4f23jF7MA7sv'
                        break;
                    case '25':
                        window.location.href = 'https://donate.stripe.com/cN2dUB5j6dYj8QEeUY'
                        break;
                    case '50':
                        window.location.href = 'https://donate.stripe.com/dR6aIpfXK2fB1oc288'
                        break;
                    case 'custom':
                        window.location.href = ''
                        break;
            }

        }
    }       
        else if(paymentMethod === 'crypto'){
          setTriggerCryptoPayment(true)
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
                        style={{backgroundColor:amount === '12' ||amount === '100' ? '#4D6F58' : '#fff',
                        color: amount === '12'||amount === '100' ? '#fff' : '#4D6F58'}}
                        onClick={() => {
                            setAmount('12')
                        }}
                        >
                            {currency === 'ADA' ? '₳100' : '$12'}
                        </button>
                        <button
                        style={{backgroundColor:amount === '25'||amount === '250' ? '#4D6F58' : '#fff',
                        color: amount === '25'||amount === '250' ? '#fff' : '#4D6F58'}}
                        onClick={() => {
                            setAmount('25')
                        }}
                        >
                            {currency === 'ADA' ? '₳250' : '$25'}
                        </button>
                        <button
                        style={{backgroundColor:amount === '50' ||amount === '500' ? '#4D6F58' : '#fff',
                        color: amount === '50'||amount === '500' ? '#fff' : '#4D6F58'}}
                        onClick={() => {
                            setAmount('50')
                        }}
                        >
                            {currency === 'ADA' ? '₳500' : '$50'}
                        </button>
                        <button
                        style={{backgroundColor:amount === 'custom' ? '#4D6F58' : '#fff',
                        color: amount === 'custom' ? '#fff' : '#4D6F58',
                        display: period === 'monthly' ? 'none' : 'flex'

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
              {/* Modals */}
      <Modal ref={confirmModalRef}>
        <div className='confirm__modal-content'>
          <div className='confirm__modal-header'>
            <h4>Confirm Donation</h4>
          </div>
          <div className='confirm__modal-body'>
            <span className='amount'>
              Amount: 
            </span>
            <span className="ada">
              ₳{amount}
            </span>
          </div>
          <div className='confirm__modal-footer'>
            <Button
              disabled={processing}
              variant='primary' 
              onClick={() => handleDonate(amount)}
            >
              {processing ? 'Processing...' : 'Confirm'}
            </Button>
            <Button 
              variant='primary' 
              onClick={() => {
                setConfirmModalVisible(false);
                setProcessing(false);
                confirmModalRef.current?.closeModal();
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <Modal ref={successModalRef}>
        <div className='success__modal-content'>
          <div className='success__modal-header'>
            Thank you for your support! Your <span className='bold-text hash'>₳{amount}</span> donation was well received. Transaction Hash: <span className='bold-text'>{successfulTxHash}</span>. This will go far in supporting many dreams.
          </div>
          <div className='success__modal-footer'>
            <Button
              variant='primary' 
              onClick={() => {
                setConfirmModalVisible(false);
                successModalRef.current?.closeModal();
                confirmModalRef.current?.closeModal();
              }}
            >
              CLOSE
            </Button>
          </div>
        </div>
      </Modal>

      <Modal ref={errorModalRef}>
        <div className='error__modal-content'>
          <div className="error__modal-body">
            <p>
              {errorMessage}
            </p>
          </div>
          <div className="error__modal-footer">
            <Button
              variant='primary'
              onClick={() => {
                errorModalRef.current?.closeModal();
              }}
            >
              OK
            </Button>
          </div>
        </div>
      </Modal>

      <Modal ref={feedbackModalRef}>
        <div className='feedback__modal-content'>
          <button
            className='close-modal-button'
            onClick={() => {
              setConfirmModalVisible(false);
              feedbackModalRef.current?.closeModal();
            }}
          >
            X
          </button>
          <div className="feedback__modal-header">
            <h4>Help us improve the donation process!</h4>
          </div>
          <div className="feedback__modal-body">
            <Survey />
          </div>
          <div className="feedback__modal-footer">
            <Button
              variant='primary'
              onClick={() => {
                feedbackModalRef.current?.closeModal();
              }}
            >
              CLOSE
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>


    )
}

export default DirectedDonate;