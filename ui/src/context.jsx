import {createContext, useReducer, useContext} from 'react'


const initialState = {
}

const AppContext = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}


export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}} >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)