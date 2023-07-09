import React, {useState} from "react";
import SearchInput from "@/common/inputSearch";
import DatePicker from "@/common/datePicker";
import MyDatePicker from "@/common/datePickerComponent";
import './contentHeader.css'

export const ContentHeader = (props) => {
    const { title, description, showHeader, showDatePicker, showSearchInput, showButton, btnToShow } = props

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (name, date) => {
        setSelectedDate(date)
    };
    return (
        <div className="grid-container-custom p-3.5">
            {
                showHeader && <div className="grid-header-item">
                    <span className="w-full text-2xl font-[600] inline-block whitespace-nowrap">
                        {title}
                    </span>
                    <span className="text-lg font-[400] text-[#94A1C1] font-medium inline-block whitespace-nowrap">{description}</span>

                </div>
            }
            <div className="border-3 grid-col-3 gap-4 w-full flex item-center justify-end">
                {showDatePicker && <>
                    <MyDatePicker name="date" selectedDate={selectedDate} handleDateChange={handleDateChange} /> </>
                    }
                    {/* {showDatePicker && <DatePicker />} */}
                    {showSearchInput && <div className="grid-item">
                        <SearchInput />
                    </div>}
                    {showButton && <div className="grid-item-last">
                        {btnToShow.showAdd && <button type="button" className="text-black bg-white text-[18px] text-600 px-5 py-2.5 text-center mr-2 mb-2">+ Add</button>}
                        {btnToShow.showGenerateBtn && <button type="button" className="text-black bg-white text-sm px-5 py-2.5 text-center mr-2 mb-2">Generate</button>}
                        {btnToShow.showExportBtn && <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">Export</button>}
                    </div>}
                </div>
        </div>
            )
}

            ContentHeader.defaultProps = {
                btnToShow: {
                addBtn: false,
            showGenerateBtn: false,
            showExportBtn: false
    },
};