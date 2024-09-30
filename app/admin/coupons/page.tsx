"use client";

import DataTable from "@/app/components/shared/Table";
import { circledPlusIcon, dotsIcon } from "@/app/utils/icons";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SvgIcon,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CreateCoupon from "@/app/components/admin/CreateCoupon";

const CouponsPage = () => {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const rows = [
    {
      id: 1,
      created_at: "12/03/2024",
      category: "wears",
      name: "Milo",
      discount_rate: 5,
      status: "cancelled",
    },
    {
      id: 2,
      created_at: "12/03/2024",
      category: "wears",
      name: "Milo",
      discount_rate: 5,
      status: "cancelled",
    },
    {
      id: 3,
      created_at: "12/03/2024",
      category: "wears",
      name: "Milo",
      discount_rate: 5,
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
      headerName: "#Coupon No",
      type: "number",
      align: "left",
      headerAlign: "left",
      width: calculateColumnWidth("id", rows, "#Coupon No"),
      valueGetter: (value, row) => `#${row.id || ""}`,
    },
    {
      field: "created_at",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Coupon Code",
      type: "string",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      type: "string",
      flex: 1,
    },
    {
      field: "discount_rate",
      headerName: "Discount Rate",
      flex: 1,
      valueGetter: (value, row) => `${row.discount_rate || ""}%`,
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
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          width: "95%",
          backgroundColor: "#FFF",
          height: {
            xs: "120px",
            md: "75px",
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          paddingX: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: {
              xs: "100%",
              md: "50%",
            },
            justifyContent: "space-around",
          }}
        >
          <Select
            labelId="category"
            id="category"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
            sx={{
              width: "75px",
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <Select
            labelId="category"
            id="category"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
            sx={{
              width: "75px",
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            labelId="category"
            id="category"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
            sx={{
              width: "75px",
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            labelId="category"
            id="category"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
            sx={{
              width: "75px",
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>

        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          startIcon={
            <SvgIcon
              sx={{
                fontSize: "18px",
              }}
            >
              {circledPlusIcon()}
            </SvgIcon>
          }
          sx={{
            backgroundColor: "primary.main",
            width: {
              xs: "100%",
              md: "200px",
            },
          }}
          onClick={() => setOpen(true)}
        >
          Add Coupon
        </Button>
      </Box>

      <Box
        sx={{
          width: "95%",
          backgroundColor: "#FFF",
          padding: "1rem",
        }}
      >
        <DataTable
          title="All Coupons"
          gridCol={gridCol}
          rows={rows}
          loading={false}
        />
      </Box>

      <CreateCoupon open={open} setOpen={setOpen} />
    </Box>
  );
};

export default CouponsPage;
