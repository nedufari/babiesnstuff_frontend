"use client";

import DataTable from "@/app/components/shared/Table";
import { circledPlusIcon, dotsIcon } from "@/app/utils/icons";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SvgIcon,
  SelectChangeEvent,
  Skeleton,
  IconButton,
  Menu,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/app/store/Features/products/productsApiSlice";
import { toast } from "react-toastify";
import EditProduct from "@/app/components/admin/EditProduct";

const ProductsPage = () => {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [open, setOpen] = React.useState(false);

  const {
    data: allProducts,
    isLoading: isLoadingProducts,
    refetch,
  } = useGetAllProductsQuery();

  useEffect(() => {
    refetch();
  }, []);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [deleteProduct, { isLoading: deleteProductIsLoading }] =
    useDeleteProductMutation();

  const handleDelete = async (id: any) => {
    try {
      const { success, message } = await deleteProduct(id).unwrap();

      if (success) {
        toast.success(`${message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        refetch();
      } else {
        toast.error(`${message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error: any) {
      let msg =
        error.message ||
        (error.data && error.data.message) ||
        "An error occurred";
      toast.error(`${msg}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleEdit = async (data: any) => {
    console.log({ data });
    setOpen(true);
  };

  const rows = [
    {
      id: 1,
      name: "Milo",
      amount: 1000,
      stock: 20,
      sold: 90,
      revenue: 100000,
    },
    {
      id: 2,
      name: "Milo",
      amount: 1000,
      stock: 20,
      sold: 90,
      revenue: 100000,
    },
    {
      id: 3,
      name: "Milo",
      amount: 1000,
      stock: 20,
      sold: 90,
      revenue: 100000,
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
      field: "name",
      headerName: "Product Name",
      type: "string",
      flex: 2,
      valueGetter: (value, row) => `${row.name || ""}`,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 2,
      valueGetter: (value, row) => `${row?.category?.name || ""}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      valueGetter: (value, row) => `₦${row.price || ""}`,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      flex: 1,
    },
    {
      field: "sold",
      headerName: "Sold",
      type: "number",
      flex: 1,
    },
    {
      field: "revenue",
      headerName: "Revenue",
      flex: 1,
      valueGetter: (value, row) => `₦${row.revenue || ""}`,
    },
    {
      field: "Action",
      headerName: "Action",
      align: "right",
      headerAlign: "right",
      renderCell: (params) => {
        return (
          <>
            <IconButton
              onClick={handleClick}
              sx={{
                cursor: "pointer",
              }}
            >
              <SvgIcon>{dotsIcon()}</SvgIcon>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* <MenuItem
                onClick={() => alert(`View details of ${params.row.fullName}`)}
              >
                View Details
              </MenuItem>
              <MenuItem onClick={() => alert(`Edit ${params.row.fullName}`)}>
                Edit
              </MenuItem> */}
              <MenuItem onClick={() => handleEdit(params.row)}>Edit</MenuItem>
              <MenuItem onClick={() => handleDelete(params.row.id)}>
                Delete
              </MenuItem>
            </Menu>
          </>
        );
      },
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
          onClick={() => router.push("/admin/products/create")}
        >
          Add Product
        </Button>
      </Box>

      <Box
        sx={{
          width: "95%",
          backgroundColor: "#FFF",
          padding: "1rem",
        }}
      >
        {allProducts ? (
          <DataTable
            title="Products"
            gridCol={gridCol}
            rows={allProducts}
            loading={isLoadingProducts}
          />
        ) : (
          <Skeleton variant="rounded" width="450px" height="100%"></Skeleton>
        )}
      </Box>

      <EditProduct open={open} setOpen={setOpen} />
    </Box>
  );
};

export default ProductsPage;
