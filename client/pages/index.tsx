import Container from '@/components/customs/Container'
import Loader from '@/components/customs/Loader'
import StockTable from '@/components/customs/StockTable'
import { useStockList } from '@/lib/hooks/useStock'

export default function Home() {
  const { data } = useStockList()

  return (
    <Container>
      <h1 className="text-xl font-bold my-2">DotnetCore Nextjs FullStack App</h1>
      {data ? <StockTable data={data} /> : <Loader />}
    </Container>
  )
}
