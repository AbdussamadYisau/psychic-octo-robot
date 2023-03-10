import '../styles/globals.css'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from 'next-themes'




export default function App({ Component, pageProps }) {
   // Create a client
 const queryClient =  new QueryClient();

  return(
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider enableSystem={false} attribute="class">
        <Component {...pageProps} />
     </ThemeProvider>
    </QueryClientProvider>
    )
}
