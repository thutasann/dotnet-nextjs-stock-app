import { IStockResponse } from '@/types/stocks.interface'
import React from 'react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useRouter } from 'next/router'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosInstance from '@/services/api'

interface IStockTable {
  data: IStockResponse[]
}

function StockTable({ data }: IStockTable) {
  const router = useRouter()
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => {
      return axiosInstance.delete(`/stock/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stocks'] })
      toast({
        title: 'Stock Deleted',
        description: 'Stock is successfully deleted',
      })
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
      })
    },
  })

  const columns: ColumnDef<IStockResponse>[] = [
    {
      accessorKey: 'id',
      header: 'Id',
    },
    {
      accessorKey: 'companyName',
      header: 'Company',
    },
    {
      accessorKey: 'industry',
      header: 'Industry',
    },
    {
      accessorKey: 'symbol',
      header: 'Symbol',
    },
    {
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => router.push(`/stock/${row.getValue('id')}`)}>
            View Detail
          </Button>
          <Button variant="destructive" onClick={() => mutate(row.getValue('id'))}>
            Delete
          </Button>
        </div>
      ),
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border border-slate-600 p-2 w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} className="cursor-pointer">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default StockTable
