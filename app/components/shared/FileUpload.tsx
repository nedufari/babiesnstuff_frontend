import React, { useState, ChangeEvent } from "react";
import {
  Typography,
  Box,
  Button,
  CircularProgress,
  IconButton,
  SvgIcon,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  deleteIcon,
  downloadIcon,
  filterIcon,
  videoIcon,
} from "@/app/utils/icons";

interface FileUploadProps {
  label?: string;
  image?: boolean;
  files: File[];
  setFiles: any;
  uploading?: boolean;
  uploadProgress?: number[];
  required?: boolean;
  isVideo: boolean;
}

const FileInput = styled("input")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  cursor: "pointer",
});

const DropZone = styled(Box)({
  position: "relative",
  height: "12.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "1rem",
  border: "1px dashed #397F98",
  padding: "1.75rem",
  marginBottom: "1.25rem",
  marginTop: "0.44rem",
  gap: "0.5rem",
  backgroundColor: "#F9F9F9",
});

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  image = true,
  files,
  setFiles,
  uploading,
  uploadProgress,
  required = false,
  isVideo,
}) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || []);
    setFiles((prevFiles: any) => [...prevFiles, ...uploadedFiles]);
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prevFiles: any) =>
      prevFiles.filter((_: any, index: any) => index !== indexToRemove)
    );
  };

  return (
    <div>
      {label && (
        <label>
          {label}{" "}
          {required && (
            <span style={{ marginLeft: "0.125rem", color: "red" }}>*</span>
          )}
        </label>
      )}
      <DropZone>
        <FileInput
          type="file"
          accept={image ? "image/*" : ".mp4,.3gp,.avi,.webm,.flv,.mkv,.webm"}
          multiple
          onChange={handleFileChange}
          name="productimage"
          id="productimage"
        />
        <SvgIcon
          sx={{
            width: "71px",
            height: "71px",
          }}
        >
          {isVideo ? videoIcon() : filterIcon()}
        </SvgIcon>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <SvgIcon
            sx={{
              width: "16px",
              height: "16px",
            }}
          >
            {downloadIcon()}
          </SvgIcon>
          <Typography
            variant="poster"
            fontWeight={400}
            fontSize="12px"
            lineHeight="14.52px"
          >
            Drop your files here or{" "}
            <Box
              component="span"
              sx={{
                color: "primary.main",
              }}
            >
              Browse
            </Box>
          </Typography>
        </Box>
      </DropZone>

      {files?.length > 0 && (
        <div>
          {files.map((file, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={1}
            >
              <Typography variant="body2" color="textSecondary">
                {file.name}
              </Typography>
              <IconButton
                sx={{
                  width: "24px",
                  height: "24px",
                }}
                onClick={() => removeFile(index)}
              >
                {deleteIcon()}
              </IconButton>
            </Box>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
