import React, { Fragment, useRef } from "react";
import { Combobox, Transition } from "@headlessui/react";

export interface Field {
  [key: string]: string | number;
}

interface Props<T extends Field> {
  data: T[];
  displayKey: keyof T;
  selected?: Field;
  placeholder?: string;
  onSelect?: (value: Field) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Autocomplete<T extends Field>({
  data,
  displayKey,
  selected,
  placeholder,
  onSelect,
  onChange,
  ...props
}: Props<T>) {
  const comboboxOptionsRef = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    if (comboboxOptionsRef.current) {
      comboboxOptionsRef.current.click();
    }
  };

  return (
    <Combobox value={selected} onChange={onSelect} {...props}>
      <div className="relative mt-1 w-full">
        <div className="relative w-full cursor-default rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-4 pl-3 pr-10 text-lg leading-5 text-gray-900 focus:ring-0"
            displayValue={(item: Field) => item[displayKey] as string}
            onChange={onChange}
            onClick={onClick}
            placeholder={placeholder}
          />
          <Combobox.Button ref={comboboxOptionsRef} />
        </div>
        {data && (
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options
              hold
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {data.length === 0 ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                data.length > 0 &&
                data.map((item, index: number) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "cursor-pointer bg-teal-600 text-white"
                          : "text-gray-900 bg-white"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item[displayKey]}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        )}
      </div>
    </Combobox>
  );
}

export default Autocomplete;
