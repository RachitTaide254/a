import React from "react";
import PaginationTable from "@/common/paginationTable";
import ContentHeader from "../contentHeader";


function PaginationTableExample() {
    return <>
        <ContentHeader showHeader={true} showDatePicker={true} showSearchInput={true} showButton={true} />
        <div className="m-4 flex flex-col rounded h-auto bg-white">
            <span className="text-xl font-[600] pt-3.5 pl-3.5">Order List</span>
            <PaginationTable />;
        </div>
    </>
}

export default PaginationTableExample;
