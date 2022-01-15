import React from 'react'
import { Container } from './styles'
import Column from '../Column/index'

interface IRow {
  data: { [key: string]: string }[]
}

const Row: React.FC<IRow> = ({ data }) => {
  return (
    <Container>
      {data.map((columnData, index) => (
        <Column key={`grid-column-${index}`} data={columnData} />
      ))}
    </Container>
  )
}

export default Row
