import React from "react";
import PaginationTable from "@/common/paginationTable";
import Button from "@/common/button";
import ContentHeader from "../contentHeader";
import { columns, orderPlaceListData } from "@/mockData/orderPlaceList_mockData";

function WorkOrderList() {
    return <>
        <ContentHeader title="Work Order" description="Sales Department / Work Order" showHeader={true} showDatePicker={true} showSearchInput={true} showButton={true} />
        <div className="m-4 flex flex-col rounded h-auto bg-white">
            <span className="text-xl font-[600] pt-3.5 pl-3.5">Order Place List</span>
            <PaginationTable columnsData={columns} rowData={orderPlaceListData} />

            <div className="pl-3.5 mb-10">
                <Button text="Submit" icon="" textColor="white" bgColor="[#1A91D1]" />
            </div>
        </div>
    </>
}

export default WorkOrderList;
