import { useState } from "react";
import {
  ColumnDef,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { DataTable } from "./OrderListDataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Menu, ArrowUpDown, Calendar } from "lucide-react";
import { initialData } from "../../mocks/OrderList.mock"; // Corrected import path for the mock data
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"; // Correct ShadCN Pagination imports

// Import Avatar Components
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // New import

type Order = {
  id: string;
  user: string;
  avatar: string; // Added avatar field
  project: string;
  address: string;
  date: string;
  status: string;
};

const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.original.user;
      const avatarUrl = row.original.avatar; // Use the avatar URL from the mock data

      return (
        <div className="flex items-center">
          {/* Avatar Component */}
          <Avatar className="h-6 w-6">
            <AvatarImage src={avatarUrl} alt={user} />
            <AvatarFallback>{user.charAt(0)}</AvatarFallback>{" "}
            {/* Fallback to the first letter of the name */}
          </Avatar>
          <span className="ml-2">{user}</span> {/* User Name */}
        </div>
      );
    },
  },
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.original.date;

      return (
        <div className="flex items-center">
          <Calendar size={16} className="mr-2" />
          {/* Added Calendar icon */}
          <span>{date}</span> {/* Date */}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusColors: Record<string, string> = {
        Pending: "text-[#59A8D4] dark:text-[#59A8D4]",
        Complete: "text-[#4AA785] dark:text-[#4AA785]",
        Approved: "text-[#FFC555] dark:text-[#FFC555]",
        Rejected: "text-[#1C1C1C66] dark:text-[#FFFFFF66]",
        "In Progress": "text-[#8A8CD9] dark:text-[#95A4FC]",
      };

      return (
        <div
          className={
            statusColors[status] ||
            "bg-gray-100 text-gray-800 flex flex-row items-center"
          }
        >
          <span className="text-lg "> &#x2022; </span>
          <span className="inline-flex items-center">{status}</span>
        </div>
      );
    },
  },
];

export default function OrderList() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // React Table instance
  const table = useReactTable({
    data: initialData,
    columns,
    state: { sorting, globalFilter, pagination },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
  });

  const pageCount = Math.ceil(initialData.length / pagination.pageSize);

  return (
    <div className="text-[#1C1C1C] dark:text-white  flex flex-col gap-3 overflow-auto scrollbar-none">
      <div className="text-[#1C1C1C] dark:text-white  py-1 px-2 font-semibold">
        Order List
      </div>
      {/* Top Bar */}
      <div className=" bg-[#F7F9FB] dark:bg-[#FFFFFF0D] flex justify-between items-center p-2 gap-4 h-[44px] rounded-lg">
        <div className="flex gap-2 items-center">
          <Button variant="ghost" size="icon">
            <Plus size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <Menu size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const currentSorting = table.getState().sorting;
              if (!currentSorting.length) {
                setSorting([{ id: "id", desc: false }]); // Default sort Order ID Ascending
              } else if (!currentSorting[0]?.desc) {
                setSorting([{ id: "id", desc: true }]); // Switch to Descending
              } else {
                setSorting([]); // Clear sorting
              }
            }}
          >
            <ArrowUpDown size={16} />
          </Button>
        </div>

        <Input
          placeholder="Search"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="placeholder:text-[#1C1C1C33] border-[#1C1C1C] dark:placeholder:text-[#FFFFFF33] max-w-[160px] border border-opacity-40 rounded-lg "
        />
      </div>

      {/* Data Table */}
      <DataTable<Order, unknown>
        columns={columns}
        data={table.getRowModel().rows.map((row) => row.original)}
      />

      {/* ShadCN Pagination Controls */}
      <div className="flex justify-end">
        <div className="py-2 px-4 border-t">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => table.setPageIndex(pagination.pageIndex - 1)}
                  disabled={pagination.pageIndex === 0}
                />
              </PaginationItem>
              {Array.from({ length: pageCount }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => table.setPageIndex(index)}
                    className={
                      pagination.pageIndex === index ? "font-bold" : ""
                    }
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() => table.setPageIndex(pagination.pageIndex + 1)}
                  disabled={pagination.pageIndex === pageCount - 1}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
