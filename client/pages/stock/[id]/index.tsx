import Container from '@/components/customs/Container'
import Loader from '@/components/customs/Loader'
import { useStockDetail } from '@/lib/hooks/useStock'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'
import { IoArrowBack } from 'react-icons/io5'

function StockDetailPage() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const { data, isLoading } = useStockDetail(params?.id)
  console.log('isLoading', isLoading)

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="w-full border-b pb-7 border-slate-500">
            <button onClick={() => router.push(`/`)} className="rounded-full p-3 bg-slate-500 hover:bg-slate-700">
              <IoArrowBack />
            </button>
            <div className="mt-3 space-y-3">
              <h1 className="font-bold text-4xl mb-2">{data?.symbol}</h1>
              <div className="flex items-center gap-x-3">
                <p className="w-[100px]">Company </p> : <span>{data?.companyName}</span>
              </div>
              <div className="flex items-center gap-x-3">
                <p className="w-[100px]">Industry </p> : <span>{data?.industry}</span>
              </div>
              <div className="flex items-center gap-x-3">
                <p className="w-[100px]">Market Cap </p> : <span>{data?.marketCap}</span>
              </div>
            </div>
          </section>
          <section className="w-full">
            <h3 className="mt-3 font-bold text-xl">Comments : </h3>
            {data && data.comments?.length > 0 ? (
              <>
                {data?.comments?.map((comment) => (
                  <div
                    key={comment.id}
                    className="border border-slate-500 rounded-sm p-3 w-full mt-3 scroll-px-32 hover:bg-slate-500 transition-all duration-300 ease-in-out"
                  >
                    <h3>{comment.title}</h3>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-sm mt-3">Not Comment Found</p>
            )}
          </section>
        </>
      )}
    </Container>
  )
}

export default StockDetailPage
