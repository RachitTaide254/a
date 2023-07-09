import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarWeek } from 'react-icons/bs';
import './DatePickerComponent.css'

const CustomDatePickerInput = ({ value, onClick }) => (
    <div className="date-picker-input">
        <input
            type="text"
            value={value}
            onClick={onClick}
            placeholder="Select a date"
            readOnly
            className="date-picker-text-input"
        />
        <BsCalendarWeek className="date-picker-icon text-gray-600" />
    </div>
);


const MyDatePicker = ({ name, selectedDate, handleDateChange }) => {
    // const [selectedDate, setSelectedDate] = useState(null);

    const onChange = (date) => {
        handleDateChange(name, date)
    };

    return (
        <div
            className="relative px-4 py-2 pr-10  rounded border border-gray-400 h-[42px] bg-white"
            data-te-datepicker-init
            data-te-inline="true"
            data-te-input-wrapper-init>
            <DatePicker
                name=""
                selected={selectedDate}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                customInput={<CustomDatePickerInput />}
            />
        </div>

    );
};

export default MyDatePicker
