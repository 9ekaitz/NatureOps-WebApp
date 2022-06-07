import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";


function PaginationComponent({DisplayData, itemsPerPage}){
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % DisplayData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(DisplayData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(DisplayData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  console.log(itemsPerPage);
  console.log(DisplayData);

  return(
    <>
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
    </>
    
  );
}

export default PaginationComponent;