import React from 'react'
import { useTable, usePagination } from 'react-table'
import './paginationData.css'

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    // When using the useFlexLayout:
    minWidth: 30, // minWidth is only used as a limit for resizing
    width: 70, // width is used for both the flex-basis and flex-grow
    maxWidth: 200,
}

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateMyData, skipPageReset }) {
    // For this example, we're using pagination to illustrate how to stop
    // the current page from resetting when our data changes
    // Otherwise, nothing is different here.



    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            // use the skipPageReset option to disable page resetting temporarily
            autoResetPage: !skipPageReset,
            // updateMyData isn't part of the API, but
            // anything we put into these options will
            // automatically be available on the instance.
            // That way we can call this function from our
            // cell renderer!
            updateMyData,
            showHeader: false
        },
        usePagination
    )

    // Render the UI for your table
    return (
        <>
            <table {...getTableProps()} className="w-full min-w-[640px] table-auto border border-[#eeeeee]">
                <thead className='bg-[#EAEDF7]'>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // <th className='border-b border-blue-gray-50 text-left' {...column.getHeaderProps()} style={{ width: column.width }}><span className='block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400'>{column.render('Header')}</span></th>
                                <th
                                    className='border-b px-3.5 py-3.5 border-blue-gray-50 text-left'
                                    {...column.getHeaderProps()}
                                    style={{ width: column.width }}
                                // style={{ width: '30px !important' }} // add !important here
                                >
                                    <span className='block antialiased font-sans text-[15px] font-bold uppercase text-blue-gray-700 text-center'>
                                        {column.render('Header')}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td
                                        {...cell.getCellProps()}
                                        className='border-b border-blue-gray-50'
                                        style={{ width: "5px !important" }}
                                    >
                                        <span className='block antialiased font-sans text-[15] font-semibold text-blue-gray-600 text-center'>
                                            {cell.render('Cell')}
                                        </span>
                                    </td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="flex justify-end mt-2">
                <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                {/* <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '} */}
                <div className='flex items-center justify-center'>
                    <span className='text-center p-2'>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                </div>

                <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

const handleImageClick = (id) => {
    alert(id)
}

function PaginationTable({columnsData, rowData}) {
    const columns = React.useMemo(
        () => columnsData,
        []
    )

    const [data, setData] = React.useState(rowData.data)
    const [originalData] = React.useState(data)
    const [skipPageReset, setSkipPageReset] = React.useState(false)

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    // When our cell renderer calls updateMyData, we'll use
    // the rowIndex, columnId and new value to update the
    // original data
    const updateMyData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true)
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    // After data chagnes, we turn the flag back off
    // so that if data actually changes when we're not
    // editing it, the page is reset
    React.useEffect(() => {
        setSkipPageReset(false)
    }, [data])

    // Let's add a data resetter/randomizer to help
    // illustrate that flow...
    const resetData = () => setData(originalData)

    return (
        <div className="p-3.5 flex flex-row overflow-auto">
            <button onClick={resetData} style={{ display: "none" }}>Reset Data</button>
            <div className="table-container" style={{ width: '100%' }}>

                <Table
                    columns={columns}
                    data={data}
                    updateMyData={updateMyData}
                    skipPageReset={skipPageReset}
                />
            </div>
        </div>
    )
}

export default PaginationTable
