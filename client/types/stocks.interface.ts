export interface IStockResponse {
  id: number
  symbol: string
  companyName: string
  purchase: number
  lastDiv: number
  industry: string
  marketCap: number
  comments: IComment[]
}

export interface IComment {
  userId: number
  id: number
  title: string
  completed: boolean
}
