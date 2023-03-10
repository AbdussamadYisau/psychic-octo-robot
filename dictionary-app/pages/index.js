import Head from "next/head";
import { useTheme } from "next-themes";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Moon from "../components/Moon";
import { useQuery } from "react-query";
import axios from "axios";
import PlayAudio from "../components/PlayIcon";
import ExternalLink from "../components/ExternalLink";
import { useRouter } from "next/router";

import FontPicker from "../components/FontPicker";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const [word, setWord] = useState("");

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (router.query.word) {
      // use react-query useQuery or useMutation here
      setSubmitted(true);
      setWord(router.query.word);

      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    }
  }, [router.query.word]);

  // hover for play button
  const [hover, setHover] = useState(false);

  const { status, error, data } = useQuery(
    ["dictionary", word],
    async () => {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (response.status >= 400) {
        throw new Error(response.statusText);
      }
      return response.data;
    },
    {
      enabled: submitted !== false,
      onError: (error) => console.log(error),
      retry: 1,
    }
  );

  const [audio, setAudio] = useState(null);
  let groups = {};
  const [groupsObject, setGroupsObject] = useState({});

  useEffect(() => {
    if (data) {
      // Get Audio if available
      const newData = data[0].phonetics.filter((word) => word.audio !== "");
      setAudio(new Audio(`${newData[0]?.audio}`));

      // Separate meanings by part of speech
      data[0].meanings.forEach(function (item) {
        var list = groups[item.partOfSpeech];

        if (list) {
          list.push(item);
        } else {
          groups[item.partOfSpeech] = [item];
        }
      });

      const groupByPartOfSpeech = data[0]?.meanings.reduce((acc, curr) => {
        const pos = curr.partOfSpeech;

        if (acc[pos]) {
          acc[pos] = {
            partOfSpeech: pos,
            definitions: [...acc[pos].definitions, ...curr.definitions],
            synonyms: [...acc[pos].synonyms, ...curr.synonyms],
            antonyms: [...acc[pos].antonyms, ...curr.antonyms],
          };
        } else {
          acc[pos] = {
            partOfSpeech: pos,
            definitions: curr.definitions,
            synonyms: curr.synonyms,
            antonyms: curr.antonyms,
          };
        }

        // if (acc[pos]) {
        //   acc[pos] = [{
        //     partOfSpeech: pos,
        //     definitions: [...acc[pos].definitions, ...curr.definitions],
        //     synonyms: [...acc[pos].synonyms, ...curr.synonyms],
        //     antonyms: [...acc[pos].antonyms, ...curr.antonyms]
        //   }];
        // } else {
        //   acc[pos] = [curr]

        // }
        return acc;
      }, {});

      console.log(groups, groupByPartOfSpeech);
      // setGroupsObject(groups);
      setGroupsObject(groupByPartOfSpeech);
    }
  }, [data]);

  if (!mounted) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (event.target.elements.word.value === "") {
      setHasError(true);
    }
    if (event.target.elements.word.value !== "") {
      setHasError(false);
    }

    // setWord(event.target.elements.word.value);

    router.push({
      pathname: "/",
      query: { word: event.target.elements.word.value },
    });

    setTimeout(() => setSubmitted(false), 500);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Dictionary App</title>
      </Head>
      <div className="mx-[24px] md:mx-[39px] lg:mx-[351px]">
        <div className={` ${styles.navbar} flex justify-between items-center`}>
          <Logo stroke={"#757575"} fill={"#757575"} />

          <div className="flex items-center">
            <div className="flex gap-[4px] items-center mr-[26px]">
              <FontPicker />
            </div>

            <div className="rightSideDivider bg-[#E9E9E9]"></div>

            <div className="flex gap-[20px] items-center">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className={`toggle__checkbox ${
                  theme === "light" ? "" : "check"
                }`}
              />
              <label
                htmlFor="checkbox"
                className={`toggle `}
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
          className={`mt-[50px] search-container  bg-[#f4f4f4] dark:bg-[#1f1f1f] border border-solid  ${
            isFocused
              ? " border-[#A445ED]"
              : hasError
              ? " border-[#FF5252]"
              : "border-[transparent]"
          } `}
          method="get"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search for any word..."
            className=" text-[16px] md:text-[20px] text-[#2D2D2D] dark:text-white focus:bg-[transparent] min-w-[200px]"
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
            }}
            onKeyDown={() => setHasError(false)}
            value={word}
            onChange={(e) => setWord(e.target.value)}
            name="word"
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
        {hasError && (
          <p className="font-[400] text-[#FF5252] text-[16px] not-italic mt-2">
            Whoops, can't be empty...
          </p>
        )}

        {status === "idle" && (
          <div className="mt-[60px] flex flex-col items-center">
            <p className="font-[700] text-[20px] text-[#2D2D2D] dark:text-white ">
              Hi there ?????????????????
            </p>

            <p className="mt-[20px] text-[#757575] md:w-[450px] text-center text-[16px]">
              This is where the results of your search would show up.
            </p>
          </div>
        )}

        {status === "loading" && (
          <div className="centerText mt-[24px]">
            <div className="loading loadingSpinner1"></div>
            <div className="loading loadingSpinner2"></div>
            <div className="loading loadingSpinner3"></div>
          </div>
        )}
        {status === "error" && (
          <div className="mt-[8px] flex flex-col items-center">
            <p className="text-[64px] font-[400] mb-[28px]">????</p>

            <p className="font-[700] text-[20px] text-[#2D2D2D] dark:text-white ">
              {error?.response?.data?.title}
            </p>

            <p className="mt-[20px] text-[#757575] md:w-[600px] text-center text-[15px] md:text-[18px]">
              {`${error?.response?.data?.message} ${error?.response?.data?.resolution}`}
            </p>
          </div>
        )}
        {status === "success" && (
          <div className={`${styles.meatOfPage}`}>
            <div className={`${styles.wordPhoneticsPlay}`}>
              <div>
                <p
                  className={`text-[32px] md:text-[64px] md:font-[700] md:leading-[1.23] text-[#2D2D2D] dark:text-white`}
                >
                  {data[0]?.word}
                </p>
                <p
                  className={`${styles.phonetics} text-[18px] md:text-[24px]  leading-[1.33] font-[400]`}
                >
                  {
                    data[0].phonetics.filter(
                      (word) => word.text !== ("" || undefined)
                    )[0]?.text
                  }
                </p>
              </div>

              {data[0].phonetics?.filter((word) => word.audio !== "")[0] ? (
                <PlayAudio
                  onClick={() => audio.play()}
                  hover={hover}
                  onMouse
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className="cursor-pointer"
                />
              ) : null}
            </div>

            <div>
              {Object.entries(groupsObject).map(([key, value]) => (
                <div className={`${styles.groupSections}`} key={key}>
                  <div className={`${styles.partOfSpeechHeader}`}>
                    <p
                      className={`text-[#2D2D2D] dark:text-white  text-[32px] md:text-[24px] font-bold italic`}
                    >
                      {key}
                    </p>
                    <div className={`bg-[#E9E9E9] dark:bg-[#3A3A3A]`}></div>
                  </div>

                  <div className={`${styles.partOfSpeechBody}`}>
                    <p
                      className={`${styles.partOfSpeechMeaning} text-[18px] md:text-[20px] font-[400]`}
                    >
                      Meaning
                    </p>

                    <div className={`${styles.partsOfSpeechList}`}>
                      <ul>
                        {value.definitions.slice(0, 3).map((def, i) => (
                          <>
                            <li
                              key={i}
                              className={`definition-list text-[15px] md:text-[18px] font-[400] leading-[1.3] text-[#2D2D2D] dark:text-white`}
                            >
                              {def.definition}
                            </li>
                            {def.example ? (
                              <p className=" mt-[13px] text-[#757575] text-[15px] md:text-[18px] font-[400]">
                                "{def?.example}"
                              </p>
                            ) : null}
                          </>
                        ))}
                      </ul>
                    </div>
                    {value.synonyms.length > 0 ? (
                      <div className="flex gap-[20px] items-center">
                        <p
                          className={`font-[400] text-[#757575] text-[16px] md:text-[20px]`}
                        >
                          Synonyms{" "}
                        </p>

                        {[...new Set(value.synonyms)].slice(0, 3).map((synonym, index) => (
                          <span
                            key={index}
                            className={`font-[400] text-[#A445ED] text-[16px] md:text-[20px] cursor-pointer`}
                            onClick={() => {
                              router.push({
                                pathname: "/",
                                query: { word: synonym },
                              });
                            }}
                          >
                            {index === [...new Set(value.synonyms)].slice(0, 3).length - 1
                              ? synonym
                              : `${synonym} , `}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {value.antonyms.length > 0 ? (
                      <div className="flex gap-[20px] items-center">
                        <p
                          className={`font-[400] text-[#757575] text-[16px] md:text-[20px]`}
                        >
                          Antonyms{" "}
                        </p>

                        {[...new Set(value.antonyms)].slice(0, 3).map((antonym, index) => (
                          <span
                            key={index}
                            className={`font-[400] text-[#A445ED] text-[16px] md:text-[20px] cursor-pointer`}
                            onClick={() => {
                              router.push({
                                pathname: "/",
                                query: { word: antonym },
                              });
                            }}
                          >
                            {index === [...new Set(value.antonyms)].slice(0, 3).length - 1
                              ? antonym
                              : `${antonym} , `}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.groupSections}`}>
              <div
                className={`bg-[#E9E9E9] dark:bg-[#3A3A3A] ${styles.finalDivider}`}
              ></div>

              <div
                className={`${styles.whereFrom} flex flex-col gap-[8px] md:flex-row md:items-center md:gap-[40px]`}
              >
                <p
                  className={`text-[14px] text-[#757575] font-[400] underline underline-offset-[4px] decoration-[#E9E9E9] dark:decoration-[#3A3A3A]`}
                >
                  Source
                </p>

                <div className={`${styles.externalLinkDiv}`}>
                  <a
                    href={`https://en.wiktionary.org/wiki/${word}`}
                    target="_blank"
                    className={`block text-[14px] text-[#2D2D2D] dark:text-white font-[400] underline underline-offset-[4px] decoration-[#E9E9E9] dark:decoration-[#3A3A3A]`}
                  >
                    {`https://en.wiktionary.org/wiki/${word}`}
                  </a>

                  <ExternalLink />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
