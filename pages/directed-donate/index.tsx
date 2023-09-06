import React, { useState, useRef } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';
import { Button, Meta, Modal } from '../../components';
import { useWallet } from '@meshsdk/react';
import { Transaction } from '@meshsdk/core';
import { ModalHandler } from '../../components/Modal/Modal';
import { Layout } from '../../components';
import Survey from '../../components/Survey/Survey';

const donationAddress =
  'addr1x8kmhudzykxz3d87tr7jn27n34uulzed2asqvdpauhvrl78dh0c6yfvv9z60uk8a9x4a8rtee79j64mqqc6rmewc8luq4hm7e2';

const amounts = ['1000', '300', '100'];

interface DirectedDonateProps {}

const DirectedDonate: NextPage<DirectedDonateProps> = () => {
  const [amount, setAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null);

  const confirmModalRef = useRef<ModalHandler>(null);
  const successModalRef = useRef<ModalHandler>(null);
  const errorModalRef = useRef<ModalHandler>(null);
  const feedbackModalRef = useRef<ModalHandler>(null);
  const emailModalRef = useRef<ModalHandler>(null);

  //radio buttons
  const [selectedValue, setSelectedValue] = useState('');

  const handleButtonClick = (value: string) => {
    setSelectedValue(value);
  };


  const router = useRouter();
  const { wallet, connected } = useWallet();

  const handleConfirm = () => {
    setConfirmModalVisible(true);
    confirmModalRef.current?.openModal();
    setIsCustom(false);
  };

  const handleDonate = async (sendAmount: string) => {
    setProcessing(true);
    const convertLovelace = parseInt(sendAmount) * 1000000;
    const sendLovelace = convertLovelace.toString();

    if (connected) {
      try {
        const network = await wallet.getNetworkId();

        if (network === 1) {
          setErrorMessage('This dapp only works on Cardano Mainnet.');
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
        handleTransactionError(error);
      }
    } else {
      setErrorMessage('Please connect a wallet.');
      errorModalRef.current?.openModal();
      setProcessing(false);
      setConfirmModalVisible(false);
    }
  };

  const handleTransactionError = (error: any) => {
    if (error.info) {
      setErrorMessage(error.info);
      errorModalRef.current?.openModal();
    } else if (error.message.includes('Insufficient')) {
      setErrorMessage(`Insufficient funds in your wallet to send ${amount} ADA. Please top up your wallet and try again.`);
      errorModalRef.current?.openModal();
      setConfirmModalVisible(false);
    } else {
      setErrorMessage('Something went wrong. Please try again.');
      errorModalRef.current?.openModal();
    }

    setProcessing(false);
  };

emailModalRef.current?.openModal();
// successModalRef.current?.openModal()
  return (
    <Layout>
      <Meta title='Donate' description='Donate to student.' />
      <main className='donate-container text-center'>
        <div className='donate__title-section'>
          <FaChevronLeft
            onClick={() => router.back()}
            className='go-back'
            size={35}
            color={'#374756'}
          />
          <h3>
            Thank you for supporting the next generation of African tech leaders
          </h3>
        </div>
        <div className='donate-page__donations'>
          <div className='donate__tiers'>
            {amounts.map((amount, index) => (
              <Button
                key={index}
                size='small'
                noShadow
                onClick={() => setAmount(amount)}
              >
                ₳{amount}
              </Button>
            ))}
            <Button onClick={() => setIsCustom(true)} size='small' noShadow>
              CUSTOM
            </Button>
          </div>
          <p>
            The donation goes to our Cardano wallet with ADAhandle $directeddev
          </p>
          {isCustom && (
            <input
              type='text'
              placeholder='Custom Amount'
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          )}
          <div className='donate__donate-btn'>
            <Button
              variant='primary'
              onClick={handleConfirm}
              disabled={!amount}
            >
              Donate
            </Button>
          </div>
        </div>

        <div>
          <h6>Looking for the DirectEd Lions? Head over <a href="https://app.directed.dev/scholarship-pool">here</a> and press "Donate Now" on one Access Stipend pools.</h6>
          <h6>Help us improve the donation process! <a onClick={() => feedbackModalRef.current?.openModal()}>Click here</a> to take a short survey.</h6>
        </div>
      </main>

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
                setIsCustom(true);
              }}
            >
              OK
            </Button>
          </div>
        </div>
      </Modal>

      <Modal ref={emailModalRef}>
        <div className='email__modal'>
          <h2>Welcome to the DirectEd Lion Family!</h2>
          <h2>🦁</h2>
          <p>Thank you for your generous donation. We would for you to see what difference you are making. </p>
          <p>To ensure we can keep you updated, Please provide your email below</p>
          <div className='name-mail'>
            <input type="text" placeholder="Name/ Nickname" />
            <input type="text" placeholder="Your email" />
          </div>
          <div className='checks'>
            <div className='ckeck1'>
            <input type="checkbox" value='receipt' />
            <label>Send me a receipt</label>
            </div>
            <div className='ckeck2'>
            <input type="checkbox" value='news' />
            <label>Send me newsletter</label>
            </div>

          </div>
          <div className='tiars'>
            <h3>Select a donors' tiar</h3>
            <div>
            <Button
        variant={selectedValue === 'warrior' ? 'primary' : 'light'}
        onClick={() => handleButtonClick('warrior')}
      >
        Warrior
      </Button>
      <Button
        variant={selectedValue === 'hero' ? 'primary' : 'light'}
        onClick={() => handleButtonClick('hero')}
      >
        Hero
      </Button>
      <Button
        variant={selectedValue === 'royal' ? 'primary' : 'light'}
        onClick={() => handleButtonClick('royal')}
      >
        Royal
      </Button>
            </div>


          </div>
          <div className='submit_button'>
              <Button
              variant='primary'
              >Submit</Button>
            </div>
          <p>
          By entering your email, you agree to be on our donor's mailing list. We will send no more than 10 emails per year. You can unsubscribe at any point.
          </p>
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
  );
};

export default DirectedDonate;
