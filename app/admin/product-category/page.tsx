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
  Skeleton,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetAllProductCategoriesQuery } from "@/app/store/Features/productsCategory/productsCategoryApiSlice";
import CreateProductCategory from "@/app/components/admin/CreateProductCategory";

const ProductCategoryPage = () => {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [open, setOpen] = React.useState(false);

  const {
    data: allProductCategory,
    isLoading: isLoadingProductCategory,
    refetch,
  } = useGetAllProductCategoriesQuery();

  useEffect(() => {
    refetch();
  }, []);

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
      headerName: "#ID",
      type: "number",
      align: "left",
      headerAlign: "left",
      width: calculateColumnWidth("id", rows, "#ID"),
      valueGetter: (value, row) => `#${row.id || ""}`,
    },
    {
      field: "name",
      headerName: "Name",
      type: "string",
      flex: 3,
    },
    {
      field: "description",
      headerName: "Description",
      type: "string",
      flex: 3,
    },
    {
      field: "createdAT",
      headerName: "Date",
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
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          paddingX: "1rem",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            width: {
              xs: "100%",
              md: "50%",
            },
            justifyContent: "space-around",
          }}
        ></Box> */}

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
              md: "20rem",
            },
          }}
          onClick={() => setOpen(true)}
        >
          Add Product Category
        </Button>
      </Box>

      <Box
        sx={{
          width: "95%",
          backgroundColor: "#FFF",
          padding: "1rem",
        }}
      >
        {allProductCategory ? (
          <DataTable
            title="Products Category"
            gridCol={gridCol}
            rows={allProductCategory}
            loading={isLoadingProductCategory}
          />
        ) : (
          <Skeleton variant="rounded" width="450px" height="100%"></Skeleton>
        )}
      </Box>

      <CreateProductCategory open={open} setOpen={setOpen} />
    </Box>
  );
};

export default ProductCategoryPage;
