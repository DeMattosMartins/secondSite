import * as TabsPrimitive from '@radix-ui/react-tabs'
import { type ComponentProps } from 'react'

export const Tabs = TabsPrimitive.Root
export const TabsList = TabsPrimitive.List
export const TabsTrigger = TabsPrimitive.Trigger

export const TabsContent = ({
  className = '',
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content
    className={`data-[state=active]:flex data-[state=active]:flex-col ${className}`}
    {...props}
  />
)
