import { useState, useEffect } from 'react'

export const useFetch = () => {
  const [content, setContent] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://tech-test-service-staging.seenit.studio/v1/uploads',
        {
          headers: {
            Authorization: 'Basic dennis_okpa@hotmail.co.uk',
          },
        }
      )

      const data = await response.json()

      setContent(data || [])
    }

    fetchData()
  }, [])

  return content
}
