import React from 'react';

const DynamicTable = ({ data }) => {
    const {header, rowData} = data[0]
  return (
    <div className="p-4">
      <table className="min-w-full border border-[#eeeeee]">
        <thead className="bg-[#EAEDF7]">
          <tr>
            {header.map((item, index) => (
              <th
                key={index +'_'+ item}
                className="border-b px-3.5 py-3.5 border-blue-gray-50 text-left"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rowData.map((item, index) => (
            <tr key={index} >
              {Object.values(item).map((value, index) => (
                <td
                  key={index}
                  className="border-b border-blue-gray-50"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
