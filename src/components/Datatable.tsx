import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";

const data = [
  { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: "6,518.18" },
  { name: "Marco Lightweight Shirt", price: 128.50, quantity: 37, amount: "4,754.50" },
  { name: "Half Sleeve  Shirt", price: 39.99, quantity: 64, amount: "2,559.36"},
  { name: "Lightweight Jacket", price: 20.00, quantity: 184, amount: "3,680.00"},
  { name: "Marco Shoes", price: 79.99, quantity: 64, amount: "1,965.81" },
];

const DataTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="text-[#1C1C1C66] dark:text-[#FFFFFF66] border-[#1C1C1C33] dark:border-[#FFFFFF33]  text-xs leading-[18px] py-2 border-b">
            <TableCell className="pl-0 ml-0">Name</TableCell>
            <TableCell className="py-2 px-3">Price</TableCell>
            <TableCell className="py-2 px-3">Quantity</TableCell>
            <TableCell className="py-2 px-3">Amount</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="text-[#1C1C1C] dark:text-white  py-2 text-xs leading-[18px]">
              <TableCell className="pl-0 ml-0">{item.name}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
