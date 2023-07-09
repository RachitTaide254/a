import DataTable from "@/common/table/dataTable";
import ContentHeader from "../contentHeader";

export const orderPlaceList = () => {
    return (
        <>
            <ContentHeader title="Order Place Form" description="sales department order place" showHeader={true} showDatePicker={true} showSearchInput={true} showButton={true} />
            <div className="m-4 flex flex-col rounded h-auto bg-white">
                <span className="text-xl font-[600] pt-3.5 pl-3.5">Order List</span>
                <DataTable />
            </div>
        </>)
}
