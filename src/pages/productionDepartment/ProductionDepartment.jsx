
import ContentHeader from "../contentHeader";
import ProductionDepartmentHeader from "./ProductionDepartmentHeader";
import Button from "@/common/button";
import { useState } from "react";
import { columns, orderPlaceListData } from "@/mockData/orderPlaceList_mockData";
import PaginationTable from "@/common/paginationTable";

const options = [
    { label: 'Option 11', value: 1 },
    { label: 'Option 211', value: 2 },
    { label: 'Option 323', value: 3 },
];

export const ProductionDepartment = () => {
    const [formValues, setFormValues] = useState({
        chassisNo: '',
        typeTrailer: '',
        workStatus: '',
        date: '',
    });
    const [workOrderNoSelectedOption, setWorkOrderNoSelectedOption] = useState(options[0]);
    const [contractorNameOption, setContractorName] = useState(options[0]);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleOptionSelect = (option) => {
        setWorkOrderNoSelectedOption(option)
    };

    const handleContractorOptionSelect = (option) => {
        setContractorName(option)
    };

    const handleDateChange = (name, date) => {
        setFormValues(prevState => ({
            ...prevState,
            [name]: date
        }));
    };

    const handleSubmit = () => {
        console.log('asdashd', formValues)
    }

    return (
        <>
            <ContentHeader title="Production" description="Production Department" showHeader={true} showDatePicker={false} showSearchInput={false} showButton={false} />
            <div className="m-4 flex flex-col rounded h-auto bg-white">
                <ProductionDepartmentHeader
                    handleOptionSelect={handleOptionSelect}
                    handleContractorOptionSelect={handleContractorOptionSelect}
                    handleInputChange={handleInputChange}
                    handleDateChange={handleDateChange}
                    workOrderNoSelectedOption={workOrderNoSelectedOption}
                    contractorNameOption={contractorNameOption}
                    formValues={formValues}
                    options={options}
                />

                <div className="pl-3.5 mb-10">
                    <Button text="Submit" icon="" textColor="white" bgColor="[#1A91D1]" onClick={() => handleSubmit()} />
                </div>
                <PaginationTable columnsData={columns} rowData={orderPlaceListData} />

            </div>
        </>)
}
