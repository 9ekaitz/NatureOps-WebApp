import React,{useState,useEffect} from "react";
import ReactPaginate from "react-paginate";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useTranslation } from "react-i18next";


import "../styles/styleSidebar.css";
import styleLogros from "../styles/styleLogros.module.css";
import stylePagination from "../styles/pagination.module.css";

function Logros() {

  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() =>{

    const fetchData = async () =>{
      const response = await axiosPrivate.get("/achivements/oihanee/0/3");
      setItems(response.data);
    }

    const fetchSize = async () =>{
      const responseSize = await axiosPrivate.get("/achivements/size");
      setpageCount(responseSize.data/3);
    }
   
    fetchData();
    fetchSize();
   
  },[])

  const handlePageClick = async (data) => {
    const fetchData = async () =>{
     
      let url = "api/achivements/oihanee/" + data.selected + "/3";
      const response = await axiosPrivate.get(url);
      setItems(response.data);
    }
    fetchData();
  }
 
  const cargarImagenNoti = require.context("../images", true);
  const DisplayData=items.map(
    (logro)=>{
      return(
        <div className={styleLogros.logroCard} key={logro.achivement.id} itemsPerPage="9">
          <div className={styleLogros.logroTop}>
            <img src={cargarImagenNoti(`./${logro.achivement.image}`)} alt={logro.id} className={styleLogros.logroImg}/>
            <h4>{logro.achivement.desription}</h4>
          </div>
          <p>{logro.achivement.objetivo}</p>
          <div className={styleLogros.progressElement}>
            <div className={styleLogros.bar}>
              <div className={styleLogros.progressBars} style={{"width": logro.progresoUsuario + "%", "backgroundColor":"#48BFE3"}}>
              </div>
              <div className={styleLogros.progressBars} style={{"width": (100-logro.progresoUsuario) + "%", "backgroundColor":"aliceblue"}}>
              </div>
            </div>
          </div>
        </div>
          
      );
    }
  )

  return(
    <main className={styleLogros.containerLogros}>
      <h1>{t("Achivements.Achivements")}</h1>
      <div className={styleLogros.listLogros}>
        {DisplayData}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={stylePagination.pagination.concat(" "+styleLogros.pagination)}
          nextLinkClassName={stylePagination.next}
          previousLinkClassName={stylePagination.previous}
          activeClassName={stylePagination.active}
        />
      </div>
    </main>
  );
}

export default Logros;