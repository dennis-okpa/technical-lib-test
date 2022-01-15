import React from 'react'
import { Grid } from './styles'
import { useFetch } from '../../../utils/hooks/fetch'
import Row from '../Row/index'
import { getGridData } from '../../../utils/translations/grid'

function Gallery() {
  const data = useFetch()

  if (!data) return null

  const gridData = getGridData(data.rows)

  return (
    <Grid>
      {gridData.map((rowData, index) => (
        <Row key={`gallery-grid-row-${index}`} data={rowData} />
      ))}
    </Grid>
  )
}
export default Gallery
