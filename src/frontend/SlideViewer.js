import React, { useState } from "react";
import "../frontend/SlideViewer.css";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const SlideViewer = () => {
  const [selectedDocs, setSelectedDocs] = useState([]);
  return <div className="slideViewerContainer">
      <input type="file" accept=".pdf" multiple onChange={el => el.target.files?.length && setSelectedDocs(Array.from(el.target.files))} />
      <DocViewer className="my-doc-viewer-style"  documents={selectedDocs.map(file => ({
      uri: window.URL.createObjectURL(file),
      fileName: file.name
    }))} 
    pluginRenderers={DocViewerRenderers}  
    config={{
      header: {
        disableHeader: false,
        disableFileName: false,
        retainURLParams: false,
      },
      csvDelimiter: ",", // "," as default,
      pdfZoom: {
        defaultZoom: 2.2, // 1 as default,
        zoomJump: 0.2, // 0.1 as default,
      }
    }}
     />
    </div>;
};

export default SlideViewer;
