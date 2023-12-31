import React, { createContext, useContext, useState } from 'react'

const NavigateContext = createContext(null)

export const NavigateProvider = ({ children }) => {
  const [headerBack, setHeaderBack] = useState(false);
    return (
      <NavigateContext.Provider value={{ headerBack, setHeaderBack }}>
          {children}
      </NavigateContext.Provider>
    )
}

export function useNavigateContext() {
    const context = useContext(NavigateContext)
    if (!context) {
        throw new Error('useLoading must be used within NavigateContext')
    }
    return context
}
