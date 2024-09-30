"use client";

import DataTable from "@/app/components/shared/Table";
import { useGetAllUsersQuery } from "@/app/store/Features/users/usersApiSlice";
import { dotsIcon } from "@/app/utils/icons";
import { Box, SvgIcon, Typography, Skeleton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect } from "react";

const CustomersPage = () => {
  const {
    data: allUsers,
    isLoading: isLoadingUsers,
    refetch,
  } = useGetAllUsersQuery();

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
      phoneNumber: "07063900161",
      status: "pending",
    },
    {
      id: 2,
      created_at: "12/03/2024",
      fullName: "Babajide Oyafemi",
      amount: 1000,
      email: "j.oyafemi@gmail.com",
      phoneNumber: "07063900161",
      status: "pending",
    },
    {
      id: 3,
      created_at: "12/03/2024",
      fullName: "Babajide Oyafemi",
      amount: 1000,
      email: "j.oyafemi@gmail.com",
      phoneNumber: "07063900161",
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
      headerName: "ID",
      type: "number",
      align: "left",
      headerAlign: "left",
      width: calculateColumnWidth("id", rows, "ID"),
    },
    {
      field: "fullname",
      headerName: "Customer Name",
      type: "string",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Spent",
      flex: 1,
      valueGetter: (value, row) => `₦${row.totalRevenue || ""}`,
    },
    {
      field: "RegisteredAt",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 1,
    },
    {
      field: "mobile",
      headerName: "Phone Number",
      type: "string",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      flex: 1,
      cellClassName: "customers-status",
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor: params.row.status == "pending" ? "#FEE9C9" : "red",
          }}
        >
          <Typography
            variant="poster"
            fontSize="12px"
            fontWeight={400}
            lineHeight="14.52px"
            color={params.row.status == "pending" ? "#FFA013" : "#FFF"}
            textAlign="center"
          >
            {params.row.status}
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
        {allUsers ? (
          <DataTable
            title="Customers"
            gridCol={gridCol}
            rows={allUsers}
            loading={isLoadingUsers}
          />
        ) : (
          <Skeleton variant="rounded" width="450px" height="100%"></Skeleton>
        )}
      </Box>
    </Box>
  );
};

export default CustomersPage;
