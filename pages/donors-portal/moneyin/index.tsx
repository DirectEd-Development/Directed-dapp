import React from 'react'
import { DonorLayout } from '../../../components'

const fetchFronNotion = async () => {
    const res = await fetch('/api/Notion')
    const data = await res.json()

    console.log("data", data)

    return data
    }

function index() {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await fetchFronNotion()
            setData(result)
        }
        fetchData()
    }, [])


  return (
    <DonorLayout>
    <div>index</div>
    </DonorLayout>
  )
}

export default index