// import { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// export default function PdfViewer({ url }) {
//     const [numPages, setNumPages] = useState();
//     const [pageNumber, setPageNumber] = useState(1);
//     useEffect(() => {
//         pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//     });

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (

//         <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
//             <Page pageNumber={pageNumber} />
//         </Document>
//     );
// }

// import { useCallback, useState } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
// import { pdfjs, Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// import './Sample.css';

// import type { PDFDocumentProxy } from 'pdfjs-dist';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();

// const options = {
//     cMapUrl: '/cmaps/',
//     standardFontDataUrl: '/standard_fonts/',
// };

// const resizeObserverOptions = {};

// const maxWidth = 800;

// export default function PdfViewer() {
//     const [file, setFile] = useState ('./sample.pdf');
//     const [numPages, setNumPages] = useState();
//     const [containerRef, setContainerRef] = useState (null);
//     const [containerWidth, setContainerWidth] = useState();

//     const onResize = useCallback ((entries) => {
//         const [entry] = entries;

//         if (entry) {
//             setContainerWidth(entry.contentRect.width);
//         }
//     }, []);

//     useResizeObserver(containerRef, resizeObserverOptions, onResize);

//     function onFileChange(event) {
//         const { files } = event.target;

//         if (files && files[0]) {
//             setFile(files[0] || null);
//         }
//     }

//     function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//         setNumPages(nextNumPages);
//     }

//     return (
//         <div className="Example">
//             <header>
//                 <h1>react-pdf sample page</h1>
//             </header>
//             <div className="Example__container">
//                 <div className="Example__container__load">
//                     <label htmlFor="file">Load from file:</label>{' '}
//                     <input onChange={onFileChange} type="file" />
//                 </div>
//                 <div className="Example__container__document" ref={setContainerRef}>
//                     <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
//                         {Array.from(new Array(numPages), (el, index) => (
//                             <Page
//                                 key={`page_${index + 1}`}
//                                 pageNumber={index + 1}
//                                 width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
//                             />
//                         ))}
//                     </Document>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function PdfViewer({ url }) {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Viewer fileUrl={url} defaultScale={SpecialZoomLevel.PageFit} />
            </div>
        </Worker>
    )
}
