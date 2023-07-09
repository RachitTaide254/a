import React, { useEffect } from 'react';
import {
  Datepicker,
  Input,
  initTE,
} from "tw-elements";

const DatePicker = ({ options, selectedOption, onOptionSelect }) => {

  useEffect(() => {
    initTE({ Datepicker, Input });

  }, [])

  return (
    <div
      className="relative px-4 py-2 pr-10  rounded border border-gray-400 h-10"
      data-te-datepicker-init
      data-te-inline="true"
      data-te-input-wrapper-init>
      <input
        type="text"
        className="placeholder-gray-400 peer block min-h-[auto] w-full rounded border bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        placeholder="Select a date" />
    </div>
  );
};

export default DatePicker;
