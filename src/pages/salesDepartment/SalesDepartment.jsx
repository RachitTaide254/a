import React, { useMemo } from "react";
import PaginationTable from "@/common/paginationTable";
import Button from "@/common/button";
import ContentHeader from "../contentHeader";
import { columns, orderPlaceListData } from "@/mockData/orderPlaceList_mockData";
import { handleExport } from "@/common/utils";

const headerButton = {
    showAdd: true,
    showExportBtn: true
}

const SalesDepartment = () => {
        return <>
        <ContentHeader title="Order Place Form" description="sales department order place" showHeader={true} showDatePicker={true} showSearchInput={true} showButton={false} btnToShow={headerButton} />
        <div className="m-4 flex flex-col rounded h-auto bg-white">
            <span className="text-xl font-[600] pt-3.5 pl-3.5">Order Place List</span>

            <div className="flex justify-end mt-[-15px] mr-5" >
                <Button text="Export to Excel" icon="FaDownload" textColor="white" bgColor="[#1A91D1]" onClick={() => {handleExport(columns, orderPlaceListData.data)}} />
            </div>
            <PaginationTable columnsData={columns} rowData={orderPlaceListData} />
            <div className="pl-3.5 mb-10">
                <Button text="Submit" icon="" textColor="white" bgColor="[#1A91D1]" />
            </div>
        </div>
    </>
}

export default SalesDepartment;
