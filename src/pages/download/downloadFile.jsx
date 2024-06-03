import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const DownloadFile = ({ props }) => {
  const navigate = useNavigate();
  useEffect(() => {
    
    const fetchData = async () => {
      if (window.confirm(`Do you want to download the ${props.fileName}.${props.formatFile}?`)) {
        try {
          const response = await fetch(props.filePath);
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
 
          const downloadLink = document.createElement("a");
          downloadLink.href = url;
          downloadLink.type = "application/octet-stream";       
          downloadLink.download = `${props.fileName}.${
          props.formatFile
          }`;
          
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          
          URL.revokeObjectURL(url);
          navigate("/ads");
        } catch (error) {
          console.error("Error downloading file:", error);
        }
      } else {
        navigate("/download-cancel");
      }
    };

    fetchData();
  }, [props]);

  return (
    <center>
      <div style={{ marginTop: "100px" }}></div>
      Downloading file...
    </center>
  );
};

export default DownloadFile;
