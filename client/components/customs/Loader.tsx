import React from 'react'
import { Skeleton } from '../ui/skeleton'

function Loader() {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <Skeleton className="w-full h-[40px] rounded-sm" />
      <Skeleton className="w-full h-[40px] rounded-sm" />
      <Skeleton className="w-full h-[40px] rounded-sm" />
      <Skeleton className="w-full h-[40px] rounded-sm" />
      <Skeleton className="w-full h-[40px] rounded-sm" />
    </div>
  )
}

export default Loader
