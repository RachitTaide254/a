import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { orderTableData, projectsTableData } from "@/data";
  
  export function DataTable() {
    return (
      <div className="p-3.5">
            <table className="w-full min-w-[640px] table-auto border border-[#eeeeee]">
              <thead className="bg-[#eeeeee]">
                <tr>
                  {["serial No", "date", "inquire", "customer name", "trailer type", "quantity", "cost of trailer", "status"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orderTableData.map(
                  ({ date, inquire, customerName, trailerType, quantity, costOfTraler, status }, key) => {
                    const className = `py-3 px-5 ${
                      key === orderTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={date}>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {key+1}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {inquire}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {customerName}
                          </Typography>
                        </td>
                        <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                            {trailerType}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {quantity}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {costOfTraler}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {quantity}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            Edit
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
      </div>
    );
  }
  
  export default DataTable;
  