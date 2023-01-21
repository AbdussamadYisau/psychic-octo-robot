import Head from 'next/head'
import { useTheme } from "next-themes";
import styles from  "../styles/Home.module.css";
import { useState , useEffect} from 'react';


export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
  
  
  return (
    <>
    <Head>
      <meta charSet='UTF-8'/>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <title>Dictionary App</title>
      
    </Head>

    <div className='main-container flex justify-between mx-[351px]'>
      <p className='text-3xl text-black dark:text-white'>Hello</p>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>

    </>
  )
}
