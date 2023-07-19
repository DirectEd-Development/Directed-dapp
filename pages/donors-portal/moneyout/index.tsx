import React, {useEffect, useState} from 'react'
import { DonorLayout } from '../../../components'
import { Table } from '@nextui-org/react';



const fetchFronNotion = async () => {
    const res = await fetch('/api/MoneyOut')
    const data = await res.json()

    console.log("data", data)

    return data
    }

function index() {
    const [data, setData] = React.useState([])

   useEffect(() => {

        const fetchData = async () => {
            const result = await fetchFronNotion()
            setData(result)
            console.log("data",data)
        }
        fetchData()
    }, [])

  

  return (
    <DonorLayout>
   
        {/* {JSON.stringify(data)} */}
        <Table
      lined
      headerLined
      shadow={false}
      selectionMode="multiple"
      aria-label="Example static collection table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>ROLE</Table.Column>
        <Table.Column>STATUS</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    </DonorLayout>
  )
}

export default index