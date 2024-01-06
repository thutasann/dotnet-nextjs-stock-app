import axiosInstance from '@/services/api'
import { IStockResponse } from '@/types/stocks.interface'
import { useQuery } from '@tanstack/react-query'

export const useStockList = () => {
  const { data, isLoading, refetch } = useQuery<Array<IStockResponse>>({
    queryKey: ['stock'],
    queryFn: async () => {
      const response = await axiosInstance.get('/stock')
      return response.data
    },
  })

  return {
    data,
    isLoading,
    refetch,
  }
}

export const useStockDetail = (id?: string) => {
  const { data, isLoading } = useQuery<IStockResponse>({
    queryKey: ['stock'],
    queryFn: async () => {
      const response = await axiosInstance.get(`/stock/${id}`)
      return response.data
    },
    enabled: !!id,
  })
  return {
    data,
    isLoading,
  }
}
