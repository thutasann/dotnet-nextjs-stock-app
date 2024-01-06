import { AddStockModaienl } from '@/components/customs/AddStockModal'
import Container from '@/components/customs/Container'
import Loader from '@/components/customs/Loader'
import StockTable from '@/components/customs/StockTable'
import { useStockList } from '@/lib/hooks/useStock'
import Head from 'next/head'

export default function Home() {
  const { data } = useStockList()

  return (
    <Container>
      <Head>
        <title>Dotnet Nextjs Stock FullStack App</title>
      </Head>
      <h1 className="text-xl font-bold mt-2 mb-5">DotnetCore Nextjs FullStack App</h1>
      <AddStockModaienl /> <br />
      {data ? <StockTable data={data} /> : <Loader />}
    </Container>
  )
}
