import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import ReactPaginate from "react-paginate";
import FloatingButton from "../components/FloatingButton";
import { useNavigate } from "react-router";
import { FiPlus } from "react-icons/fi";
import { useTranslation } from "react-i18next";


import style from "../styles/noticias.module.css";

function Noticias() {
  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

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
      <div className={style.card} key={record.id} itemsPerPage="8">
        <img src={cargarImagenNoti(`./${record.image}`)} alt={record.id} />
        <h4>{record.title}</h4>
        <p>{record.content}</p>
        <a href={record.url}>Leer más</a>
      </div>
    );
  });
  return (
    <main className={style.noticiasGeneral}>
      <h1>{t("Dashboard.Nav.News")}</h1>
      <div className={style.noticias}>
        {DisplayNoticias}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={style.pagination}
          nextLinkClassName={style.next}
          previousLinkClassName={style.previous}
          activeClassName={style.active}
        />
      </div>
      <FloatingButton handleClick={() => navigate("/dashboard/crearNoticia")}>
        <FiPlus />
      </FloatingButton>
    </main>
  );
}

export default Noticias;
