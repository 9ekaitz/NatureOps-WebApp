import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../styles/styleLogros.css"
import data from "../../data/logros.json";

import logro1 from "../../images/logro_img.png";

function Pagination({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  console.log(data);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(DisplayData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(DisplayData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const DisplayData=data.map(
    (logro)=>{
      return(
        <div className="logroCard" key={logro.id}>
          <div className="logroTop">
            <img src={logro1} alt="logro1" className="logroImg"/>
            <h4>{logro.nombre}</h4>
          </div>
          <p>{logro.descripcion}</p>
          <div className="progress-element">
            <div className="bar">
              <div style={{"width": logro.progresoUsuario + "%", "backgroundColor":"#48BFE3", "height":"20px"}}>
              </div>
              <div style={{"width": (logro.maximo-logro.progresoUsuario) + "%", "backgroundColor":"aliceblue", "height":"20px"}}>
              </div>
            </div>
          </div>
        </div>
                
      );
    }
  )

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % DisplayData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return(
    <div className="listLogros">
      {currentItems}
      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< PREVIOUS"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        nextLinkClassName="next"
        previousLinkClassName="previous"
      />
    </div>
  );
  
}

export default Pagination;