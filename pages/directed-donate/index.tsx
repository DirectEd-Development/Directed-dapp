import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";
import { Button, Meta } from "../../components";
import { useWallet, useWalletList } from "@meshsdk/react";
// import useWallet from "../../contexts/wallet";
// import { Transaction } from "@martifylabs/mesh";
import { Transaction } from "@meshsdk/core";

const donationAddress =
  "addr1qx35zqnw3e9x0y9cg0gw5c40e70fzx753tcaquec09qf254x73ej2wfrtpdyzdl402n34cux49k2ratgllkrcdfjpygqvdm6lz";

const amounts = ["1000", "300", "100"];

const directeddonate: NextPage = () => {
  const [amountSent, setAmountSent] = useState("");
  const [image, setImage] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [confirm, setConfirm] = useState(false); // add confirm state
  const router = useRouter();
  const { wallet, connect, disconnect, connecting, connected } = useWallet();

  //   const { walletConnected, wallet } = useWallet();
  const [successfulTxHash, setSuccessfulTxHash] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setConfirm(true);
    setIsCustom(false);
  };

  const handleDonate = async (send_amt: string) => {
    const convertLovelence = parseInt(send_amt) * 1000000;
    const sendLovelace = convertLovelence.toString();
    if (connected) {
      setLoading(true);
      const network = await wallet.getNetworkId();
      if (network == 0) {
        alert("This dapp only works on Cardano Mainnet.");
      } else {
        const tx = new Transaction({ initiator: wallet }).sendLovelace(
          donationAddress,
          sendLovelace
        );
        try {
          const unsignedTx = await tx.build();
          const signedTx = await wallet.signTx(unsignedTx);
          const txHash = await wallet.submitTx(signedTx);
          setSuccessfulTxHash(txHash);
          setAmountSent(send_amt);
          setConfirm(false); // reset confirm state after donation is sent
        } catch (error: any) {
          if (error.info) {
            alert(error.info);
          } else {
            console.log(error);
          }
        }
      }
      setLoading(false);
    } else {
      alert("Please connect a wallet.");
    }
  };

  const handleSent = () => {
    router.push("/?from=donation");
  };

  return (
    <>
      <Meta title="Donate" description="Donate to student." />
      <main className="container text-center">
        <div className="donate__title-section">
          <FaChevronLeft
            onClick={() => router.back()}
            className="go-back"
            size={35}
            color={"#374756"}
          />
          <h3>
            Thank you for supporting the next generation of African tech leaders
          </h3>
        </div>
        <div className="donate-page__donations">
          <div className="donate__tiers">
            {amounts.map((amount, index) => (
              <Button
                key={index}
                size="small"
                noShadow
                onClick={() => setAmount(amount)}
              >
                ₳{amount}
              </Button>
            ))}
            <Button onClick={() => setIsCustom(true)} size="small" noShadow>
              CUSTOM
            </Button>
          </div>
          <p>
            The donation goes to our Cardano wallet with ADAhandle $directeddev
          </p>
          {isCustom && (
            <input
              type="text"
              placeholder="Custom Amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          )}
          <Button variant="primary" onClick={handleConfirm} disabled={!amount}>
            Donate
          </Button>
        </div>

        {confirm && (
          <div className="donate__modal-container">
            <div className="donate__modal">
              <div className="donate__modal-header">
                <h4>Confirm Donation</h4>
              </div>
              <div className="donate__modal-body">
                <h5>Amount:</h5>
                <p>₳{amount}</p>
              </div>
              <div className="donate__modal-footer">
                <Button variant="primary" onClick={() => handleDonate(amount)}>Confirm</Button>
                <br />
                <Button variant="primary" onClick={() => setConfirm(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}
        {successfulTxHash && (
          <div className="donate__modal-container">
            <div className="donate__modal">
              <div className="donate__modal-header">
                <h4>Thank you for your donation!</h4>
              </div>
              <div className="donate__modal-body">
                <h5>Amount Sent:</h5>
                <p>₳{amountSent}</p>
                <h5>Transaction Hash:</h5>
                <p>{successfulTxHash}</p>
              </div>
              <div className="donate__modal-footer">
                <Button onClick={handleSent}>Close</Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default directeddonate;
