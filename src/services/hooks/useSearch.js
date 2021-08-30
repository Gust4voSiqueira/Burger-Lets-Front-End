
import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext()

export default function SearchProvider({ children }) {
    const [search, setSearch] = useState('')

    function busca(value) {
        setSearch(value)
    }

    const store = {
        busca,
        search
    }

    return (
        <SearchContext.Provider value={store}>
            {children}
        </SearchContext.Provider>
    )

}

export function useSearch() {
    const context = useContext(SearchContext)

    const {
        busca,
        search
    } = context

    return {
        busca,
        search
    }
}