
import './App.css'
import AppRoutes from './routes/AppRoutes'
 import { ToastContainer } from 'react-toastify';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
function App() {

const queryClient = new QueryClient()
  return (
    <>
      <ToastContainer />
       <QueryClientProvider client={queryClient}>
  <AppRoutes />
  </QueryClientProvider>
    </>
  )
}

export default App
