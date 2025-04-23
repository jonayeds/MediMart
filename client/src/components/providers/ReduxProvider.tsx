"use client"
import {Provider} from "react-redux"
import store from "@/redux/store"
import { Toaster } from "sonner"

const ReduxProvider = ({children}:{children: React.ReactNode}) => {
  return (
    <Provider store={store}>
        <Toaster/>
        {children}
    </Provider>
  )
}

export default ReduxProvider