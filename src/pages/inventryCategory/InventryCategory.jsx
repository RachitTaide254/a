import ContentHeader from "../contentHeader";
import { categoryRowData, columns } from "@/mockData/category_mockData";
import PaginationTable from "@/common/paginationTable";


const InventryCategory = () => {
    return (
        <>
            <ContentHeader title="Category" description="Category" showHeader={true} showDatePicker={false} showSearchInput={false} showButton={false} />
            <div className="m-4 flex flex-col rounded h-auto bg-white">
                
                <PaginationTable columnsData={columns} rowData={categoryRowData} />

            </div>
        </>)
}

export default InventryCategory
