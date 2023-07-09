
import ContentHeader from "@/pages/contentHeader";
import LetterHeaderComponent from "@/common/letterHeaderComponent";
import Dropdown from "@/common/dropDown";
import { useState } from "react";
import Button from "@/common/button";
import DynamicTable from "@/common/dynamicTable";

const letterHeaderData = {
    customerName: "Yogesh roy",
    location: "Nagpur",
    inquireAttend: "YES",
    workOrderNo: "Auto generated",
    workOrderDate: "16-March-23",
    deliveryDate: "4 April 2023",
    chassesNo: "EZOP2545"
}

const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
];

const data = [{
    header: ["Serial No", "DESCRIPTION", "SPECIFICATION"],
    rowData: [
        { id: 1, description: 'John Doe', specification: 25 },
        { id: 2, description: 'Jane Smith', specification: 30 },
    ]
}
];


const DesignBOM = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
    return <>
        <ContentHeader title="Generate Order " description="Design Depatment / Generate Order " showHeader={true} showDatePicker={false} showSearchInput={false} showButton={false} btnToShow={false} />
        <div class="m-4 flex flex-col rounded h-auto bg-white">
            <LetterHeaderComponent letterHeaderData={letterHeaderData} />
            <div className="grid grid-cols-2 p-3.5">
                <div className="w-full inline">
                    <span className="w-full mb-1 font-[700] text-[16px]">BOM TYPE</span>
                    <div className="flex w-full">
                        <Dropdown
                            options={options}
                            selectedOption={selectedOption}
                            onOptionSelect={handleOptionSelect}
                            label=""
                            parentClass="w-[25rem]"
                        />
                        <div className="ml-5">
                            <Button text="View" icon="FaEye" textColor="white" bgColor="[#1A91D1]" />
                        </div>
                    </div>

                </div>
                <div className="w-full inline">
                    <span className="w-full mb-1 font-[700] text-[16px]">Design TYPE </span>
                    <div className="flex w-full">
                        <Dropdown
                            options={options}
                            selectedOption={selectedOption}
                            onOptionSelect={handleOptionSelect}
                            label=""
                            parentClass="w-[25rem]"
                        />
                        <div className="ml-5">
                            <Button text="View" icon="FaEye" textColor="white" bgColor="[#1A91D1]" />
                        </div>
                    </div>
                </div>
            </div>
            <DynamicTable data={data} />
            <div class="flex justify-end mr-5 mb-10">
                <Button text="Genrate Order" icon="" textColor="white" bgColor="[#1A91D1]" />
            </div>
        </div>

    </>
}

export default DesignBOM
