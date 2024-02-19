import { createContext, useState } from "react"

export const AppContext = createContext({
    page: '',
    setPage: () => {},
    filter: '',
    setFilter: () => {},
})

export const AppContextProvider = ({children}) => {
    const [page, setPage] = useState('boss')
    const [filter, setFilter] = useState([])
    
    return (
        <AppContext.Provider value={{page, setPage, filter, setFilter}}>
            {children}
        </AppContext.Provider>
    )
}