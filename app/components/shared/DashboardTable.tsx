"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { IDataTable } from "@/app/types";

const DashboardDataTable: React.FC<IDataTable> = ({
  title,
  gridCol,
  rows,
  loading,
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        gap: "1rem",
      }}
    >
      <Typography
        variant="poster"
        fontSize="14px"
        fontWeight={600}
        lineHeight="16.94px"
        color="#000"
      >
        {title}
      </Typography>
      <DataGrid
        rows={rows}
        columns={gridCol}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        density="comfortable"
        sx={{
          "&  .MuiDataGrid-columnHeader": {
            backgroundColor: "primary.main",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#FFF",
          },
          "& .customers-status": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& > div": {
              padding: "0.5rem",
              borderRadius: "1rem",
            },
          },
        }}
        loading={loading}
      />
    </Box>
  );
};

export default DashboardDataTable;
