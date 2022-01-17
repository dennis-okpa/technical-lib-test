import React from 'react'
import { Grid } from './styles'
import { useFetch } from '../../../utils/hooks/fetch'
import Row from '../Row/index'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getGridData } from '../../../utils/translations/grid'

function Gallery() {
  const [data, fetchMoreData] = useFetch()

  if (!data) return null

  const gridData = getGridData(data.rows)

  return (
    <Grid>
      <InfiniteScroll
        dataLength={data.rows.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {gridData.map((rowData, index) => (
          <Row key={`gallery-grid-row-${index}`} data={rowData} />
        ))}
      </InfiniteScroll>
    </Grid>
  )
}
export default Gallery
