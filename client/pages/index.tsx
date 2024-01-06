import StockTable from '@/components/customs/StockTable'
import { useStockList } from '@/lib/hooks/useStock'

export default function Home() {
  const { data, isLoading } = useStockList()

  return (
    <main className="flex flex-col items-center justify-center p-3">
      <h1 className="text-xl font-bold my-2">DotnetCore Nextjs FullStack App</h1>
      {data ? <StockTable data={data} /> : <p>Loading...</p>}
    </main>
  )
}
