import { useState } from 'react';
import { Box } from '@mui/material';
import CustomText from '../components/common/Text'
import { Document, Page, pdfjs } from 'react-pdf'
import logo from "../components/assets/toilers-logos/png/logo-no-background-black.png";
import { APP_BG_LIGHT } from '../utils/colors';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

type PDFFile = string | File | null;

const TermsCondition = () => {
  const [numPages, setNumPages] = useState<number>(12);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [file, setFile] = useState<PDFFile>(require("../components/assets/conditions.pdf"));

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

    return (
      <Box sx={{ backgroundColor: APP_BG_LIGHT, paddingTop: '50px' }}>
        <img src={logo} alt="Toilers" style={{ width: "200px" }} />
        <CustomText label="Terms & Conditions" variant="h4" isBold={true} />
        <CustomText label={`Page ${pageNumber} of ${numPages}`}></CustomText>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={1500}
            />
          ))}
        </Document>
      </Box>
    );
}

export default TermsCondition;
