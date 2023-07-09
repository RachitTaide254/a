const LetterHeaderComponent = ({letterHeaderData}) => {
    return (
        <>
            <div class="border-b p-4">
                <h1 class="text-xl font-bold text-center">TRAILER - Work Order SHEET</h1>
            </div>
            <div class="flex">
                <div class="w-1/2 p-4 leading-[2]">
                    <span class="block text-17 font-[700]">CUSTOMER NAME : <span className="text-15 font-[500]">{letterHeaderData.customerName}</span></span>
                    <span class="block text-17 font-[700]">LOCATION : <span className="text-15 font-[500]">{letterHeaderData.location}</span></span>
                    <span class="block text-17 font-[700]">INQUIRY ATTEND : <span className="text-15 font-[500]">{letterHeaderData.inquireAttend}</span></span>
                </div>
                <div class="w-1/2 p-4 text-end leading-[2]">
                    <span class="block text-17 font-[700]">Work Order No : <span className="text-15 font-[500]">{letterHeaderData.workOrderNo}</span></span>
                    <span class="block text-17 font-[700]">Work Order DATE : <span className="text-15 font-[500]">{letterHeaderData.workOrderDate}</span> </span>
                    <span class="block text-17 font-[700]">Delivery Date  : <span className="text-15 font-[500]">{letterHeaderData.deliveryDate}</span> </span>
                    <span class="block text-17 font-[700]">Chassis No : <span className="text-15 font-[500]">{letterHeaderData.chassesNo}</span></span>
                </div>
            </div>
        </>
    )
}

export default LetterHeaderComponent;