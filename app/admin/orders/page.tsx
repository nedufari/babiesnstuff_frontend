"use client";

import DataTable from "@/app/components/shared/Table";
import { useGetAllOrdersQuery } from "@/app/store/Features/orders/ordersApiSlice";
import { dotsIcon } from "@/app/utils/icons";
import { Box, SvgIcon, Typography, Skeleton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect } from "react";

const OrdersPage = () => {
  const {
    data: allOrders,
    isLoading: isLoadingOrders,
    refetch,
  } = useGetAllOrdersQuery();

  useEffect(() => {
    refetch();
  }, []);

  const rows = [
    {
      id: 1,
      created_at: "12/03/2024",
      fullName: "Babajide Oyafemi",
      amount: 1000,
      email: "j.oyafemi@gmail.com",
      status: "pending",
    },
    {
      id: 2,
      created_at: "12/03/2024",
      fullName: "Babajide Oyafemi",
      amount: 1000,
      email: "j.oyafemi@gmail.com",
      status: "pending",
    },
    {
      id: 3,
      created_at: "12/03/2024",
      fullName: "Babajide Oyafemi",
      amount: 1000,
      email: "j.oyafemi@gmail.com",
      status: "cancelled",
    },
  ];

  const calculateColumnWidth = (field: any, rows: any, headerName: any) => {
    const maxLength = Math.max(
      ...rows.map((row: any) =>
        row[field] ? row[field].toString().length : 0
      ),
      headerName.length
    );
    return maxLength * 10;
  };

  const gridCol: GridColDef[] = [
    {
      field: "id",
      headerName: "Order No",
      type: "number",
      align: "left",
      headerAlign: "left",
      width: calculateColumnWidth("id", rows, "Order No"),
      valueGetter: (value, row) => `#${row.id || ""}`,
    },
    {
      field: "createdAT",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Customer Name",
      type: "string",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Price",
      flex: 1,
      valueGetter: (value, row) => `₦${row.total || ""}`,
    },
    {
      field: "status",
      headerName: "Order Status",
      type: "string",
      flex: 1,
      cellClassName: "customers-status",
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor:
              params.row.status == "processing" ? "#FEE9C9" : "red",
          }}
        >
          <Typography
            variant="poster"
            fontSize="12px"
            fontWeight={400}
            lineHeight="14.52px"
            color={params.row.status == "processing" ? "#FFA013" : "#FFF"}
            textAlign="center"
          >
            {params.row.status}
          </Typography>
        </Box>
      ),
    },
    {
      field: "isPaid",
      headerName: "Payment Status",
      type: "string",
      flex: 1,
      cellClassName: "customers-status",
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor: params.row.isPaid == false ? "#FEE9C9" : "green",
            width: "5rem",
            maxWidth: "5rem",
          }}
        >
          <Typography
            variant="poster"
            fontSize="12px"
            fontWeight={400}
            lineHeight="14.52px"
            color="#FFF"
            textAlign="center"
          >
            {params.row?.isPaid ? "Paid" : "Not Paid"}
          </Typography>
        </Box>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      align: "right",
      headerAlign: "right",
      renderCell: (params) => (
        <SvgIcon
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            alert(`Info about ${params.row.fullName} ${params.row.email}`);
          }}
        >
          {dotsIcon()}
        </SvgIcon>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "95%",
        }}
      >
        {allOrders ? (
          <DataTable
            title="Orders"
            gridCol={gridCol}
            rows={allOrders}
            loading={isLoadingOrders}
          />
        ) : (
          <Skeleton variant="rounded" width="450px" height="100%"></Skeleton>
        )}
      </Box>
    </Box>
  );
};

export default OrdersPage;
