

import { FaPen } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const orderPlaceListData = {
    "data": [
        {
            "serialNo": "1",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": "1"
        },
        {
            "serialNo": "2",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": "2"
        },
        {
            "serialNo": "3",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": "3"
        },
        {
            "serialNo": "4",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "5",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "6",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "7",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "8",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "9",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "10",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "11",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "12",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        },
        {
            "serialNo": "13",
            "date": "25/03/2023",
            "inquire": "John Dow",
            "customerName": "Alice wonder",
            "trailerType": " 22ft 2Axle Flatbed Trailer",
            "quantity": "8",
            "costOfTrailer": "15,000",
            "status": ""
        }
    ]
}


const columns = [
    {
        Header: 'Serial No',
        accessor: 'serialNo',
        width: 5
    },
    {
        Header: 'Date',
        accessor: 'date',
        width: 10
    },
    {
        Header: 'Inquire',
        accessor: 'inquire',
        width: 25
    },
    {
        Header: 'Customer Name',
        accessor: 'customerName',
        width: 25
    },
    {
        Header: 'Trailer Type',
        accessor: 'trailerType',
        width: 25
    },
    {
        Header: 'Quantity',
        accessor: 'quantity',
        width: 5
    },
    {
        Header: 'Const of trailer',
        accessor: 'costOfTrailer',
        width: 5
    },
    {
        Header: 'Status',
        accessor: 'status',
        width: 5,
        Cell: ({ value }) => (
            <div className='text-[25] flex justify-center' onClick={() => handleImageClick(value)}>
                <AiFillEye style={{ fontSize: '25px', cursor: "pointer" }} color='#1A91D1' />
                <FaPen style={{ fontSize: '20px', marginLeft: '15px', cursor: "pointer" }} color='#1A91D1' />
            </div>
        ),
    },
]

export { orderPlaceListData, columns };
