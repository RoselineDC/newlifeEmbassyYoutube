import React from 'react'
import { cn } from '@/lib/utils';

function Container({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string;
}) {
  return (
    <div className={cn("max-w-auto mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}

export default Container