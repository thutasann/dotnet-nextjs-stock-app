import axiosInstance from '@/services/api'
import { IStockResponse } from '@/types/stocks.interface'
import { useQuery } from '@tanstack/react-query'

export const useStockList = () => {
  const { data, isLoading } = useQuery<Array<IStockResponse>>({
    queryKey: ['stock'],
    queryFn: async () => {
      const response = await axiosInstance.get('/stock')
      return response.data
    },
  })

  return {
    data,
    isLoading,
  }
}
