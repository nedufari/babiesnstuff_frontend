"use client";
import DataTable from "@/app/components/shared/Table";
import { Box, SvgIcon } from "@mui/material";
import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import { dotsIcon } from "@/app/utils/icons";

const AdministratorPage = () => {
  const rows = [
    {
      id: 1,
      created_at: "12/03/2024",
      fullName: "Babajide Oyafemi",
      email: "j.oyafemi@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      created_at: "12/03/2024",
      fullName: "Babajide Oyafemi",
      email: "j.oyafemi@gmail.com",
      role: "Admin",
    },
    {
      id: 3,
      created_at: "12/03/2024",
      fullName: "Babajide Oyafemi",
      email: "j.oyafemi@gmail.com",
      role: "Admin",
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
      field: "created_at",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Name",
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
      field: "role",
      headerName: "Role",
      type: "string",
      flex: 1,
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
        <DataTable
          title="Administrators"
          gridCol={gridCol}
          rows={rows}
          loading={false}
        />
      </Box>
    </Box>
  );
};

export default AdministratorPage;
