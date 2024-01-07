import Container from '@/components/customs/Container'
import Loader from '@/components/customs/Loader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { useStockDetail } from '@/lib/hooks/useStock'
import axiosInstance from '@/services/api'
import { ICommentRequest } from '@/types/stocks.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Head from 'next/head'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'

function StockDetailPage() {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const [form, setForm] = useState(false)
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const { data, isLoading } = useStockDetail(params?.id)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { mutate, isPending } = useMutation({
    mutationFn: (commentDto: ICommentRequest) => {
      return axiosInstance.post(`/comment/${data?.id}`, commentDto)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stock'] })
      toast({
        title: 'Comment Added',
        description: 'Comment is successfully added',
      })
      setTitle('')
      setContent('')
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
      })
    },
  })

  return (
    <Container>
      <Head>
        <title>{data?.symbol}</title>
      </Head>
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
            <div className="mt-3 w-full flex items-center justify-between">
              <h3 className="font-bold text-xl">Comments : </h3>
              <p
                aria-hidden="true"
                onClick={() => setForm((prev) => !prev)}
                className="underline cursor-pointer hover:opacity-60"
              >
                Add Comment
              </p>
            </div>

            {form && (
              <div className="mt-3 space-y-3">
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter Content" />
                <Button
                  onClick={() => {
                    mutate({
                      title,
                      content,
                    })
                  }}
                  disabled={!title || !content || isPending}
                  variant="secondary"
                >
                  Add Comment
                </Button>
              </div>
            )}

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
