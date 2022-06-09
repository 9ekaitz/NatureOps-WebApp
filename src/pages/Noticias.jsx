import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import ReactPaginate from "react-paginate";

/*IMAGENES*/

import "../styles/styleSidebar.css";
import "../styles/noticias.css";

function Noticias() {
  const axiosPrivate = useAxiosPrivate();
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const { onLogout } = useAuth();

  const fetchData = async () => {
    try {
      const responseSize = await axiosPrivate.get("/api/news/size");
      setpageCount(responseSize.data / 8);
      const response = await axiosPrivate.get("/api/news/0/8");
      setItems(response.data);
    } catch (error) {
      onLogout();
    }
  };

  const fetchNews = async (e) => {
    let url = "/api/news/" + e.selected + "/8";
    try {
      const response = await axiosPrivate.get(url);
      setItems(response.data);
    } catch (error) {
      onLogout();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageClick = async (e) => {
    fetchNews(e);
  };

  const cargarImagenNoti = require.context("../images", true);
  const DisplayNoticias = items.map((record) => {
    return (
      <div className="card" key={record.id} itemsPerPage="8">
        <img src={cargarImagenNoti(`./${record.image}`)} alt={record.id} />
        <h4>{record.title}</h4>
        <p>{record.subtitle}</p>
        <a href={record.URL}>Leer más</a>
      </div>
    );
  });
  return (
    <div className="container noticiasGeneral">
      <main>
        <h1>Noticias</h1>
        <div className="noticias">
          {DisplayNoticias}

          <ReactPaginate
            breakLabel="..."
            nextLabel="SIGUIENTE >"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< ANTERIOR"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            nextLinkClassName="next"
            previousLinkClassName="previous"
          />
        </div>
      </main>
    </div>
  );
}

export default Noticias;
