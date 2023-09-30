import React, { useState, useRef } from 'react';
import { NextPage } from 'next';

import { Layout } from '../../components';

interface DirectedDonateProps {}

const DirectedDonate: NextPage<DirectedDonateProps> = () => {
    const DonationType = () =>{
        return (
            <div>
                Donation types...
            </div>
        )
    }
    const [VARYING, SETVARYING] = useState(DonationType)

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