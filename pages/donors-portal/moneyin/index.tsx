import React from 'react'
import { DonorLayout } from '../../../components'

const fetchFronNotion = async () => {
    const res = await fetch('/api/MoneyIn')
    const data = await res.json()

    console.log("data", data)

    return data
    }

function index() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await fetchFronNotion()
            setData(result)
        }
        fetchData()
    }, [])


  return (
    <DonorLayout>
    <h1>
        Money In
    </h1>
    <p>
        {JSON.stringify(data)}
    </p>

    </DonorLayout>
  )
}

export default index