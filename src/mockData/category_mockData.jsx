

import { FaPen } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const categoryRowData = {
    "data": [
        {
            "serialNo": "1",
            "productId": "ASL001",
            "categoryName": "York",
            "categoryDiscription": "13 ton",
            "status": "1"
        },
        {
            "serialNo": "2",
            "productId": "ASL002",
            "categoryName": "York",
            "categoryDiscription": "13 ton",
            "status": "1"
        }
    ]
}


const handleImageClick = (id) => {
    alert(id)
}


const columns = [
    {
        Header: 'Serial No',
        accessor: 'serialNo',
        width: 5
    },
    {
        Header: 'Product Id',
        accessor: 'productId',
        width: 10
    },
    {
        Header: 'Category Name ',
        accessor: 'categoryName',
        width: 25
    },
    {
        Header: 'Category Discription',
        accessor: 'categoryDiscription',
        width: 25
    },
    {
        Header: 'Status',
        accessor: 'status',
        width: 5,
        Cell: ({ value }) => (
            <div className='text-[25] flex justify-center' onClick={() => handleImageClick(value)}>
                <AiFillDelete style={{ fontSize: '25px', cursor: "pointer" }} color='#1A91D1' />
                <FaPen style={{ fontSize: '20px', marginLeft: '15px', cursor: "pointer" }} color='#1A91D1' />
            </div>
        ),
    },
]

export { categoryRowData, columns };
