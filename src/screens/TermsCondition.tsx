import { useState } from "react";
import { Box } from "@mui/material";
import CustomText from "../components/common/Text";
import { Document, Page, pdfjs } from "react-pdf";
import worker11 from "../components/assets/Worker/worker11.png";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const TermsCondition = () => {
  const [numPages, setNumPages] = useState<number>(12);
  const file = require("../components/assets/conditions.pdf");

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <Box sx={{ paddingTop: "50px" }}>
      <img src={worker11} alt="Toilers" style={{ width: "200px" }} />
      <CustomText label="Terms & Conditions" variant="h4" isBold={true} />
      <CustomText label={`Page 1 of ${numPages}`}></CustomText>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={1500} />
        ))}
      </Document>
    </Box>
  );
};

export default TermsCondition;
