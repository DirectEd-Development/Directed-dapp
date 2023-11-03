import { NextPage } from 'next';
import { Layout , Meta} from '../../components';




interface Donors {}

const Donors: NextPage<Donors> = () => {

    const donors = [
        {
            name: "Stephanie King",
        },
        {
            name: "Darlington W",
        },
        {
            name: "Matthew Hill",
        },
        {
            name: "Coleen Chase",
        },
        {
            name:"Kyle Wood",   

        },
        {
            name:"AKYO",
        },
    ]


return (
    <Layout>
        <Meta
            title="Donors"
            description="Meet our donors"
        />
        <div
        className='donors-container'
        >

            <div className="donors-content">

            <h1>Meet our donors</h1>
            <div
            className='donors-list'
            >
                {
                    donors.map((donor, index) => (
                        <div  className='donor' key={index}>
                            <h3>{donor.name}</h3>
                        </div>
                    ))
                }
            </div>
            </div>


        </div>

    </Layout>
)
}

export default Donors;
