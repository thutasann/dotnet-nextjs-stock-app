import StockTable from '@/components/customs/StockTable'
import axiosInstance from '@/services/api'
import { IStockResponse } from '@/types/stocks.interface'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const { data, isLoading } = useQuery<Array<IStockResponse>>({
    queryKey: ['stock'],
    queryFn: async () => {
      const response = await axiosInstance.get('/stock')
      return response.data
    },
  })

  return (
    <main className="flex flex-col items-center justify-center p-3">
      <h1 className="text-xl font-bold my-2">Welcome to DotnetCore Nextjs FullStack App</h1>
      {data ? <StockTable data={data} /> : <p>Loading...</p>}
    </main>
  )
}
