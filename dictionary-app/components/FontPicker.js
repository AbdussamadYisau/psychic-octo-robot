import React, {useState, useEffect, Fragment} from "react";
import { Listbox, Transition } from "@headlessui/react";


const FontPicker = () => {
 
    const fonts = [
      {id: "1", name: "Sans-Serif", value: "Sans-Serif" },
      {id: "2", name: "Monospace", value: "Monospace" },
      {id: "3", name: "Cursive", value: "Cursive" },
      
    ];
  
    const temp = fonts.find((ext) => ext.value);
    const [selectedFont, setSelectedFont] = useState(temp);
  
    useEffect(() => {
      document.body.style.fontFamily = selectedFont.value;
    }, [selectedFont]);
   
  
    return (
  
      <div> 
        <Listbox value={selectedFont.id} onChange={(value) => {
              setSelectedFont(fonts.find((ext) => ext.id === value));
            }}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg  py-2 pl-3 pr-10 text-centershadow-md  text-[14px] md:text-[18px]">
              <span className="block truncate mr-[20px] font-[700]">{selectedFont.name}</span>
              <span className="pointer-events-none absolute inset-y-0  right-0 flex items-center pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  stroke="#A445ED"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-[8px] max-h-[400px] w-max overflow-auto rounded-[16px] bg-white dark:bg-[#1F1F1F] shadow-lg dark:shadow-[#A445ED]  pt-[24px]  text-[14px] md:text-[18px]">
                {fonts.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none pl-[24px] pr-[69px] mb-[16px] text-left ${
                        active ? "text-[#A445ED]" : " text-[#2D2D2D] dark:text-white"
                      }`
                    }
                    value={person.id}
                  >
                    {({ selectedFont }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selectedFont ? "font-medium text-[#A445ED]" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                    
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    );
  };



  export default FontPicker;