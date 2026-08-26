import { createContext, useContext } from 'react'

export const ContactModalCtx = createContext(null)

export function useContactModal() {
  const ctx = useContext(ContactModalCtx)
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider')
  return ctx
}
