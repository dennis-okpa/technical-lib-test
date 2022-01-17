import { useState, useEffect } from 'react'

const pageSize = 42

const fetchData = async (setData: any, page: number) => {
  const response = await fetch(
    `https://tech-test-service-staging.seenit.studio/v1/uploads?page=${page}&perPage=${pageSize}`,
    {
      headers: {
        Authorization: 'Basic dennis_okpa@hotmail.co.uk',
      },
    }
  )

  const data = await response.json()

  setData(data)
}

const setNewContent = (content: any, data: any) => ({
  ...data,
  rows: [...content.rows, ...data.rows],
})

export const useFetch = () => {
  const [content, setContent] = useState()
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchData((data: any) => {
      if (page > 1) {
        setContent(prev => setNewContent(prev, data))
      } else {
        setContent(data)
      }
    }, page)
  }, [page])

  const getMore = () => {
    setPage(prev => prev + 1)
  }

  return [content, getMore]
}
