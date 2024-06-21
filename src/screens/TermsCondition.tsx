import { useState } from "react";
import ApplicationBar from "../components/ApplicationBar";
import { Box } from "@mui/material";
import CustomText from "../components/common/Text";
import { Document, Page, pdfjs } from "react-pdf";
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import { APP_BG_LIGHT } from "../utils/colors";
// import worker from 'pdfjs-dist/webpack'

// pdfjs.GlobalWorkerOptions.workerSrc = worker

// window.onload = () => {init()}

const TermsCondition = () => {
  const [numPages, setNumPages] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <Box
      sx={{
        backgroundColor: APP_BG_LIGHT,
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      {/* <Document file="../components/assets/termsandcondtions.pdf" onLoadSuccess={onDocumentLoadSuccess}> */}
      {/* <Page pageNumber={pageNumber} /> */}
      {/* </Document> */}
      <img src={logo} alt="Toilers" style={{ width: "300px" }} />
      <CustomText label="Terms and Conditions" variant="h2" isBold={true} />
      <CustomText label={`Page ${pageNumber} of ${numPages}`}></CustomText>
    </Box>
  );
};

export default TermsCondition;
