import ContentHeader from "../contentHeader";
import Button from "@/common/button";
import PaginationTable from "@/common/paginationTable";
import { columns, orderPlaceListData } from "@/mockData/orderPlaceList_mockData";

export const designDepartment = () => {
    return (
        <>
            <ContentHeader title="Design Department" description="Design Department" showHeader={true} showDatePicker={false} showSearchInput={false} showButton={false} />
            <div className="m-4 flex flex-col rounded h-auto bg-white">
                <div className="grid grid-cols-8 gap-4 mt-5 bg-white px-4">
                    <Button text="Order List" icon=""  textColor="white" bgColor="[#1A91D1]" />
                    <Button text="BoM" icon=""  textColor="black-500" bgColor="[#E9ECF6]" />
                    <Button text="Work Order"  icon="" textColor="black-500" bgColor="[#E9ECF6]" />
                </div>
                <span className="text-xl font-[600] pt-3.5 pl-3.5">Order List</span>
                <PaginationTable columnsData={columns} rowData={orderPlaceListData} />

                <div className="pl-3.5 mb-10">
                <Button text="Submit" icon="" textColor="white" bgColor="[#1A91D1]" />
            </div>
            </div>
        </>)
}
