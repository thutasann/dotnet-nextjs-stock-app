import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useStockList } from '@/lib/hooks/useStock'
import axiosInstance from '@/services/api'
import { IStockRequest } from '@/types/stocks.interface'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

export function AddStockModaienl() {
  const { refetch } = useStockList()
  const [open, setOpen] = useState(false)
  const [symbol, setSymbol] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [purchase, setPurchase] = useState(0)
  const [lastDiv, setLastDiv] = useState(0)
  const [industry, setIndustry] = useState('')
  const [marketCap, setMarketCap] = useState(0)

  const payload: IStockRequest = {
    symbol,
    companyName,
    purchase,
    lastDiv,
    industry,
    marketCap,
  }

  const { mutate } = useMutation({
    mutationFn: (stockDto: IStockRequest) => {
      return axiosInstance.post(`/stock`, stockDto)
    },
    onSuccess: () => {
      refetch()
      setOpen(false)
    },
  })

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="secondary">
          Add Stock
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Stock</DialogTitle>
          <DialogDescription>Enter all information</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="symbol">Symbol</Label>
            <Input id="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyName">Company</Label>
            <Input
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="purchase">Purchase</Label>
            <Input
              id="purchase"
              value={purchase}
              type="number"
              onChange={(e) => setPurchase(Number(e.target.value))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="purchase">LastDiv</Label>
            <Input
              id="lastDiv"
              value={lastDiv}
              type="number"
              onChange={(e) => setLastDiv(Number(e.target.value))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="industry">Industry</Label>
            <Input
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="industry">MarketCap</Label>
            <Input
              id="marketCap"
              value={marketCap}
              type="number"
              onChange={(e) => setMarketCap(Number(e.target.value))}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => mutate(payload)} variant="secondary" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
