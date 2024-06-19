import { useState } from 'react';
import ApplicationBar from '../components/ApplicationBar';
// import { Document, Page } from 'react-pdf'

// const init = async () => {      
//     const pdfjs = await import('pdfjs-dist/build/pdf');
//     const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
//     pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker; 
// }
// window.onload = () => {init()}

const TermsCondition = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div>
            <ApplicationBar/>
        {/* <Document file="../components/assets/termsandcondtions.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
        </Document> */}
        <p>
        <h1>Terms and Conditions</h1>
            Page {pageNumber} of {numPages}
        </p>
        </div>
    );
}


export default TermsCondition