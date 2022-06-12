import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";

import styleSitio from "../styles/styleSitios.module.css"
import data from "../data/sitios.json";
import style from "../styles/pagination.module.css"

function Sitios() {

  const { t } = useTranslation();

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage="6";

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

  const DisplayData=data.map(
    (sitio)=>{
      return(
        <div className={styleSitio.sitioCard} key={sitio.id}>
          <img src={sitio.imagen} alt="img1" className={styleSitio.imgSitios}/>
          <h4>{sitio.nombre}</h4>
          <p>{sitio.descripcion}</p>
          <p className={styleSitio.puntuacion}><b>{t("Places.Score")}</b>{sitio.puntuacion}</p>
        </div>
      );
    }
  )
  
  return(
    <main className={styleSitio.containerSitios} data-testid="container">
      <h1>{t("Places.Places")}</h1>
      <div className={styleSitio.listSitios}>
        {currentItems}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={style.pagination.concat(" "+styleSitio.pagination)}
          nextLinkClassName={style.next}
          previousLinkClassName={style.previous}
          activeClassName={style.active}
        />
      </div>
    </main>
  );
}

export default Sitios;