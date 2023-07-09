import React, { useState } from "react"
import InputField from "@/common/inputField"
import Dropdown from "@/common/dropDown";
import Button from "@/common/button";
import FaIcon from "@/common/faIcons";
import Radio from "@/common/radio";

const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
];

const options1 = [
    { label: 'Option 11', value: 1 },
    { label: 'Option 211', value: 2 },
    { label: 'Option 323', value: 3 },
];

const radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];


export const CommonComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [selectedRadioOption, setSelectedRadioOption] = useState('option1');

    const handleRadioOptionChange = event => {
        setSelectedRadioOption(event.target.value);
    };
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <InputField
                        label="Name"
                        placeholder="Enter your name"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="">
                    <InputField
                        label="Name"
                        placeholder="Enter your name"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="">
                    <Dropdown
                        options={options}
                        selectedOption={selectedOption}
                        onOptionSelect={handleOptionSelect}
                        label="Select an option:"
                    />
                </div>
                <div className="">
                    <h1 className="text-lg font-medium mb-4">Select an option:</h1>
                    <Dropdown
                        options={options1}
                        selectedOption={selectedOption}
                        onOptionSelect={handleOptionSelect}
                    />
                </div>
                <div className="">
                    <Radio
                        label="Select an option:"
                        name="my-radio-group"
                        value={selectedRadioOption}
                        onChange={handleRadioOptionChange}
                        options={radioOptions}
                    />
                    <p>You selected: {selectedRadioOption}</p>
                </div>
            </div>
            <div className="grid grid-cols-8 gap-4 mt-5 bg-white py-4">
                <Button text="Add" icon="FaPlus" textColor="black" bgColor="white" />
                <Button text="Export" icon="FaDownload" textColor="white" bgColor="[#1A91D1]" />
                <Button text="Submit" icon="" textColor="white" bgColor="[#1A91D1]" />
                <Button text="View" icon="FaEye" textColor="white" bgColor="[#1A91D1]" />
                <Button text="" icon="FaEquals" textColor="white" bgColor="[#1A91D1]" />
                <Button text="BOM" icon="" textColor="Red" bgColor="[#E9ECF6]" />
            </div>
        </>
    );
}
