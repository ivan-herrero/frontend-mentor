import React from 'react'

interface Dictionary<T> {
  [key: string]: T
}

type StringEntry = string | Array<Dictionary<string>>

export type StringsContext = Dictionary<StringEntry>

export const StringsContext = React.createContext<StringsContext | undefined>(undefined)

export const StringsContextProvider = StringsContext.Provider

export function useStringsContext(): StringsContext {
  const stringsContext = React.useContext(StringsContext)

  if (stringsContext === undefined) {
    throw new Error("useStringsContext must be used under a StringsContextProvider")
  }

  return stringsContext
}
