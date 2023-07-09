import MyDatePicker from "@/common/datePickerComponent";
import SearchInput from "@/common/inputSearch";
import Dropdown from "@/common/dropDown";
import { useState } from "react";
import InputField from "@/common/inputField"


// const options = [
//     { label: 'Option 11', value: 1 },
//     { label: 'Option 211', value: 2 },
//     { label: 'Option 323', value: 3 },
// ];

const ProductionDepartmentHeader = (props) => {
    const { handleContractorOptionSelect, handleOptionSelect, handleInputChange, handleDateChange, workOrderNoSelectedOption,contractorNameOption, formValues, options } = props
    const { chassisNo, date, typeTrailer, workStatus } = formValues

    return <>
        <div className="grid grid-cols-3 gap-4 pt-4 pl-4 pr-4">
            <div className="">
                <MyDatePicker name="date" selectedDate={date} handleDateChange={handleDateChange}/>
            </div>
            <div className="">
                <Dropdown
                    options={options}
                    selectedOption={workOrderNoSelectedOption}
                    onOptionSelect={handleOptionSelect}
                    label="" />
            </div>
            <div className="">
                <InputField
                    name="chassisNo"
                    label=""
                    placeholder="Chassis No"
                    value={chassisNo}
                    onChange={handleInputChange}
                />
            </div>

        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 pl-4 pr-4">

            <div className="">
                <InputField
                    name="typeTrailer"
                    label=""
                    placeholder="Type Trailer"
                    value={typeTrailer}
                    onChange={handleInputChange}
                />
            </div>
            <div className="">
                <Dropdown
                    options={options}
                    selectedOption={contractorNameOption}
                    onOptionSelect={handleContractorOptionSelect}
                    label="" />
            </div>
            <div className="">
                <InputField
                    name="workStatus"
                    label=""
                    placeholder="work Status"
                    value={workStatus}
                    onChange={handleInputChange}
                />
            </div>
        </div>

    </>
}

export default ProductionDepartmentHeader