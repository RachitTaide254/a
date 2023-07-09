import React from "react";
import PaginationTable from "@/common/paginationTable";
import Button from "@/common/button";
import ContentHeader from "@/pages/contentHeader";
import { columns, orderPlaceListData } from "@/mockData/orderPlaceList_mockData";
import { handleExport } from "@/common/utils";

const headerButton = {
    showAdd: true,
    showExportBtn: false
}

const DesignWorkOrderList = () => {
    return <>
        <ContentHeader title="Design Department" description="Design Department / Work Order List" showHeader={true} showDatePicker={true} showSearchInput={true} showButton={true} btnToShow={headerButton} />
        <div className="m-4 flex flex-col rounded h-auto bg-white">
            <span className="text-xl font-[600] pt-3.5 pl-3.5">Work Order List</span>

            <div className="flex justify-end mt-[-15px] mr-5" >
                <Button text="Export to Excel" icon="FaDownload" textColor="white" bgColor="[#1A91D1]" onClick={() => { handleExport(columns, orderPlaceListData.data) }} />
            </div>
            <PaginationTable columnsData={columns} rowData={orderPlaceListData} />
            <div className="pl-3.5 mb-10">
                <Button text="Submit" icon="" textColor="white" bgColor="[#1A91D1]" />
            </div>
        </div>
    </>
}

export default DesignWorkOrderList;
