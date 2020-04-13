import React from 'react'

interface Dictionary<T> {
  [key: string]: T
}

export type StringEntryArray = Array<Dictionary<string>>
export type StringEntry = string | StringEntryArray

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
