"use client"
import {Provider} from "react-redux"
import store, { persistor } from "@/redux/store"
import { Toaster } from "sonner"
import { PersistGate } from "redux-persist/integration/react"

const ReduxProvider = ({children}:{children: React.ReactNode}) => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Toaster/>
        {children}
        </PersistGate>
    </Provider>
  )
}

export default ReduxProvider