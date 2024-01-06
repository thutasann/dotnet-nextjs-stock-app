import React from 'react'

interface IContainer {
  children: React.ReactNode
}

/**
 * Simple Container Wrapper
 */
function Container({ children }: IContainer) {
  return <div className="flex flex-col items-center justify-center p-3">{children}</div>
}

export default Container
