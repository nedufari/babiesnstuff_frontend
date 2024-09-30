"use client";

import PieChart from "@/app/components/admin/PieChart";
import { Box, Container, Typography, SvgIcon } from "@mui/material";
import React from "react";
import DataTable from "@/app/components/shared/Table";
import { GridColDef } from "@mui/x-data-grid";
import { dotsIcon } from "@/app/utils/icons";
import DashboardDataTable from "@/app/components/shared/DashboardTable";
import TheLineChart from "@/app/components/admin/TheLineChart";
import { ResponsiveChartContainer } from "@mui/x-charts";
import BigLineChart from "@/app/components/admin/BigLineChart";

// LineSeries

const Dashboardpage = () => {
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
      field: "fullName",
      headerName: "Customer Name",
      type: "string",
      flex: 1,
    },
    {
      field: "created_at",
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
        backgroundColor: "#F6F6F6",
        width: "100%",
        maxWidth: "100%",
        paddingY: "2rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "#FFF",
              paddingTop: "1rem",
            }}
          >
            <Typography
              variant="poster"
              fontWeight="400"
              fontSize="12px"
              lineHeight="14.52px"
              sx={{
                paddingLeft: "2rem",
              }}
            >
              Total Revenue
            </Typography>

            <Typography
              variant="poster"
              fontWeight="600"
              fontSize="16px"
              lineHeight="19.36px"
              sx={{
                paddingLeft: "2rem",
              }}
            >
              ₦ 500, 000
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "250px",
              }}
            >
              <TheLineChart color1="#FFEFFB" color2="#FD8FDE" />
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#FFF",
              paddingTop: "1rem",
            }}
          >
            <Typography
              variant="poster"
              fontWeight="400"
              fontSize="12px"
              lineHeight="14.52px"
              sx={{
                paddingLeft: "2rem",
              }}
            >
              Total Customer Count
            </Typography>

            <Typography
              variant="poster"
              fontWeight="600"
              fontSize="16px"
              lineHeight="19.36px"
              sx={{
                paddingLeft: "2rem",
              }}
            >
              500
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "250px",
              }}
            >
              <TheLineChart color1="#CED3FF" color2="#5F6FFF" />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#FFF",
              paddingTop: "1rem",
            }}
          >
            <Typography
              variant="poster"
              fontWeight="400"
              fontSize="12px"
              lineHeight="14.52px"
              sx={{
                paddingLeft: "2rem",
              }}
            >
              Total Product Count
            </Typography>

            <Typography
              variant="poster"
              fontWeight="600"
              fontSize="16px"
              lineHeight="19.36px"
              sx={{
                paddingLeft: "2rem",
              }}
            >
              5000
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "250px",
              }}
            >
              <TheLineChart color1="#D1FFD8" color2="#49FF5B" />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#FFF",
              paddingTop: "1rem",
            }}
          >
            <Typography
              variant="poster"
              fontWeight="600"
              fontSize="16px"
              lineHeight="19.36px"
              sx={{
                paddingLeft: "2rem",
              }}
            >
              Revenue
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "250px",
              }}
            >
              <BigLineChart color1="#816CE133" color2="#FFFFFF00" />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            height: "300px",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFF",
              borderRadius: "12px",
              padding: "1rem",
            }}
          >
            <Typography fontWeight="500" fontSize="20px" lineHeight="24.2px">
              Product Status
            </Typography>
            <PieChart />
          </Box>

          <Box
            sx={{
              flex: 3,
              backgroundColor: "#FFF",
              borderRadius: "12px",
              padding: "1rem",
            }}
          >
            <DashboardDataTable
              title="Customers"
              gridCol={gridCol}
              rows={rows}
              loading={false}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboardpage;
