import React, { useState } from "react";
import ContentHeader from "../contentHeader";
import InputField from "@/common/inputField"
import Dropdown from "@/common/dropDown";


const options = [
    { label: 'Option 11', value: 1 },
    { label: 'Option 211', value: 2 },
    { label: 'Option 323', value: 3 },
];

export const OrderPlace = () => {
    const [formValues, setFormValues] = useState({
        costOfTrailer: '',
        quantity: '',
        totalCostOfTrailer: '',
    });

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleInputChange = (e) => {
        const { name, value } = event.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
            <ContentHeader title="Order Place Form" description="sales department order place"  showHeader={true} showDatePicker={false} showSearchInput={false} showButton={false} />
            <div className="m-4 flex flex-col rounded h-auto bg-white">
                <span className="text-xl font-[600] pt-3.5 pl-3.5 uppercase">Description</span>
                <span className="text-xs text-[#989898] font-[400] pt-1.5 pl-3.5 uppercase">Use your credentials to access your account.</span>
                <div className="grid grid-cols-2 gap-x-8  gap-y-2 p-3.5">
                    <div className="">
                        <InputField
                            name="costOfTrailer"
                            label="Cost Of Trailer"
                            placeholder=""
                            value={formValues.costOfTrailer}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <InputField
                                name="quantity"
                                label="Quantity"
                                placeholder=" "
                                value={formValues.quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="">
                            <InputField
                                name="totalCostOfTrailer"
                                label="Total cost of trailer"
                                placeholder=""
                                value={formValues.totalCostOfTrailer}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="">
                        <InputField
                            name="customerName"
                            label="CUSTOMER NAME"
                            placeholder=""
                            value={formValues.costOfTrailer}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <InputField
                            name="address"
                            label="ADDRESS"
                            placeholder=""
                            value={formValues.costOfTrailer}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <InputField
                            name="inquireAttend"
                            label="INQUIRY ATTEND "
                            placeholder=""
                            value={formValues.costOfTrailer}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <InputField
                                name="date"
                                label="Date"
                                placeholder=" "
                                value={formValues.quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="">
                            <InputField
                                name="cellNO"
                                label="CELL NO"
                                placeholder=""
                                value={formValues.totalCostOfTrailer}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="">
                        <Dropdown
                            options={options}
                            selectedOption={selectedOption}
                            onOptionSelect={handleOptionSelect}
                            label="TRAILER TYPE"
                        />
                    </div>
                    <div className="">
                        <InputField
                            name="trailerDescription"
                            label="TRAILER DESCRIPTION "
                            placeholder=""
                            value={formValues.trailerDescription}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <InputField
                            name="application"
                            label="trailerDescription "
                            placeholder=""
                            value={formValues.trailerDescription}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <Dropdown
                            options={options}
                            selectedOption={selectedOption}
                            onOptionSelect={handleOptionSelect}
                            label="TRUCK MODEL"
                        />
                    </div>
                </div>
            </div>
        </>)
}
