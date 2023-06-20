import { manufacturers } from "@/lib/carhub";
import { Combobox, Transition} from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";


export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: React.Dispatch<React.SetStateAction<string>>
}

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => {
    return item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
  });

  // console.log(filteredManufacturers);


  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className={`absolute top-[14px] px-3`}>
            <Image src="/images/carhub/car-logo.svg" width={20} height={20} alt="car logo" />
          </Combobox.Button>
          <Combobox.Input
            className={`search-manufacturer__input`}
            placeholder="Search for a manufacturer"
            displayValue={(item:string) => item}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterEnter={() => setQuery('')}
          > 
            <Combobox.Options
              className={`search-manufacturer__options`}
              >
                {filteredManufacturers.length === 0 && query !== "" ? (
                  <Combobox.Option
                    className={`search-manufacturer__option`}
                    value={query}
                  >
                    Create "{query}"
                  </Combobox.Option>
                ) : (
                  filteredManufacturers.map((item) => (
                    <Combobox.Option
                    key={item}
                      className={({ active }) =>
                        `relative search-manufacturer__option ${
                          active ? "bg-primary-blue text-white" : "text-gray-900"
                        }`
                      }
                      value={item}
                    >
                      {({selected, active}) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{item}</span>
                          {selected ? (
                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-purple-500"}`}></span>
                          ) : null}
                        </>
                      )}
                     
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer