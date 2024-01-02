import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)
  console.log('data', data)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return <h1 className="text-red-400">{loading ? 'Loading...' : 'Ok'}</h1>
}
