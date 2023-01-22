import Head from "next/head";
import { useTheme } from "next-themes";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Moon from "../components/Moon";
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
        body {
          font-family: ${selectedFont};
        }
      `}</style>
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

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

      <div
        className={` ${styles.navbar} flex justify-between items-center mx-[351px]`}
      >
        <Logo stroke={"#757575"} fill={"#757575"} />

        <div className="flex justify-between gap-[12px] items-center">
          <FontPicker />

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
    </>
  );
}
