import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import style from"../../styles/pagination.module.css"


function PaginationComponent({DisplayData, itemsPerPage}){
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % DisplayData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(DisplayData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(DisplayData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  return(
    <>
      {currentItems}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={style.pagination}
        nextLinkClassName={style.next}
        previousLinkClassName={style.previous}
        activeClassName={style.active}
      />
    </>
    
  );
}

export default PaginationComponent;