import Head from "next/head";
import { useTheme } from "next-themes";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Moon from "../components/Moon";
import Dropdown from "../components/Dropdown";
import { Inter, Lora, Inconsolata } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

const FontPicker = () => {
  const [selectedFont, setSelectedFont] = useState(inter.variable);

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  return (
    <div className="select">
      <select
        value={selectedFont}
        onChange={handleFontChange}
        className="font-bold text-lg"
      >
        <option value={inter.variable}>Inter</option>
        <option value={lora.variable}>Lora</option>
        <option value={inconsolata.variable}>Inconsolata</option>
      </select>
      <style jsx global>{`
        body,
        * {
          font-family: ${selectedFont};
        }
      `}</style>
    </div>
  );
};
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("Is", isFocused);
  }, [isFocused])

  if (!mounted) {
    return null;
  }



  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Dictionary App</title>
      </Head>
      <div className="mx-[351px]">
        <div className={` ${styles.navbar} flex justify-between items-center`}>
          <Logo stroke={"#757575"} fill={"#757575"} />

          <div className="flex justify-between gap-[12px] items-center">
            <div className="flex gap-[4px] items-center">
              <FontPicker />
              <Dropdown />
            </div>

            <div className="flex gap-[20px] items-center">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                class="toggle__checkbox"
              />
              <label
                for="checkbox"
                class="toggle"
                style={{
                  backgroundColor: theme === "light" ? "#757575" : "#A445ED",
                }}
                onClick={() => {
                  theme === "light" ? setTheme("dark") : setTheme("light");
                }}
              ></label>

              <Moon stroke={theme === "light" ? "#757575" : "#A445ED"} />
            </div>
          </div>
        </div>

          <form 
          className={`mt-[50px] search-container  bg-[#f4f4f4] dark:bg-[#1f1f1f] ${isFocused ? 'border border-solid border-[#A445ED]' : hasError ? "border border-solid border-[#FF5252]" : ""} `}
          
          >
            <input
              type="text"
              placeholder="Search for any word..."
              className="text-[20px] text-[#2D2D2D] dark:text-white"
              onFocus={() => setIsFocused(true)} onBlur={() =>  { 
                setIsFocused(false);
                if (inputValue === '') {
                  setHasError(true);
                } else {
                  setHasError(false);
                }

               }}
               onMouseLeave={
                () =>  { 
                  setIsFocused(false);
                  if (inputValue === '') {
                    setHasError(true);
                  } else {
                    setHasError(false);
                  }
               }
              }
              onChange={(e) => setInputValue(e.target.value) }
            />
            <button type="submit">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.193 12.1323C12.9001 11.8394 12.4252 11.8394 12.1323 12.1323C11.8394 12.4252 11.8394 12.9001 12.1323 13.193L13.193 12.1323ZM16.0199 17.0806C16.3128 17.3734 16.7877 17.3734 17.0806 17.0806C17.3734 16.7877 17.3734 16.3128 17.0806 16.0199L16.0199 17.0806ZM2.95195 12.3768L3.48231 11.8465L3.48226 11.8464L2.95195 12.3768ZM5.11403 13.8215L4.82696 14.5144L4.82704 14.5144L5.11403 13.8215ZM10.2147 13.8215L10.5017 14.5144L10.5018 14.5144L10.2147 13.8215ZM12.3768 12.3768L11.8465 11.8464L11.8464 11.8465L12.3768 12.3768ZM13.8215 10.2147L14.5144 10.5018L14.5144 10.5017L13.8215 10.2147ZM12.3768 2.95195L11.8464 3.48228L11.8465 3.4823L12.3768 2.95195ZM12.1323 13.193L16.0199 17.0806L17.0806 16.0199L13.193 12.1323L12.1323 13.193ZM0.25 7.66438C0.25 8.63802 0.441775 9.60213 0.814377 10.5017L2.20021 9.92773C1.90297 9.2101 1.75 8.44103 1.75 7.66438H0.25ZM0.814377 10.5017C1.18699 11.4014 1.73315 12.2187 2.42165 12.9071L3.48226 11.8464C2.93307 11.2973 2.49743 10.6453 2.20021 9.92773L0.814377 10.5017ZM2.4216 12.9071C3.11012 13.5957 3.92748 14.1417 4.82696 14.5144L5.40111 13.1286C4.68347 12.8313 4.03147 12.3957 3.48231 11.8465L2.4216 12.9071ZM4.82704 14.5144C5.72658 14.887 6.69075 15.0788 7.66438 15.0788V13.5788C6.88773 13.5788 6.1186 13.4258 5.40102 13.1286L4.82704 14.5144ZM7.66438 15.0788C8.63803 15.0788 9.60213 14.887 10.5017 14.5144L9.92776 13.1286C9.2101 13.4258 8.44102 13.5788 7.66438 13.5788V15.0788ZM10.5018 14.5144C11.4013 14.1417 12.2187 13.5956 12.9071 12.907L11.8464 11.8465C11.2973 12.3957 10.6453 12.8313 9.92767 13.1286L10.5018 14.5144ZM12.907 12.9071C13.5956 12.2187 14.1417 11.4013 14.5144 10.5018L13.1286 9.92767C12.8313 10.6453 12.3957 11.2973 11.8465 11.8464L12.907 12.9071ZM14.5144 10.5017C14.887 9.60213 15.0788 8.63803 15.0788 7.66438H13.5788C13.5788 8.44102 13.4258 9.2101 13.1286 9.92776L14.5144 10.5017ZM15.0788 7.66438C15.0788 5.69797 14.2977 3.81209 12.9071 2.4216L11.8465 3.4823C12.9557 4.59145 13.5788 6.09578 13.5788 7.66438H15.0788ZM12.9071 2.42163C11.5167 1.03116 9.6308 0.25 7.66438 0.25V1.75C9.23297 1.75 10.7373 2.37312 11.8464 3.48228L12.9071 2.42163ZM7.66438 0.25C5.69796 0.25 3.81209 1.03115 2.42162 2.42162L3.48228 3.48228C4.59145 2.37312 6.09579 1.75 7.66438 1.75V0.25ZM2.42162 2.42162C1.03115 3.81209 0.25 5.69796 0.25 7.66438H1.75C1.75 6.09579 2.37312 4.59145 3.48228 3.48228L2.42162 2.42162Z"
                  fill="#A445ED"
                />
              </svg>
            </button>
          </form>
          {hasError && <p className="font-[400] text-[#FF5252] text-[20px] not-italic mt-2">Whoops,can't be empty</p>}
      </div>
    </>
  );
}
