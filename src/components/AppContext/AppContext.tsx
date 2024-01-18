import { createContext, useEffect, useState } from "react"
import { createLocalStorage, getAllLocalStorage } from "../../services/storage/storage"

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider =({children}: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const storage = getAllLocalStorage()
  useEffect(() => {
    if(storage){
      const {login} = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [])

  const user = 'jean'
  return(
    <AppContext.Provider value={{user, isLoggedIn, setIsLoggedIn}}>
      {children}
    </AppContext.Provider>
  )
}