import React,{useState,useEffect} from "react";
import Aside from "./componentsDashBoard/Aside.jsx";
import ReactPaginate from "react-paginate";
import axios from "../api/axios";


import { FiMenu } from "react-icons/fi";

import logo from "../images/logo.png";

import "../styles/styleSidebar.css";
import "../styles/styleLogros.css";
import "../styles/pagination.css";

function Logros() {

  function abrirNavbar(){

    document.getElementById("asidee").classList.remove("cerrar");
    document.getElementById("asidee").classList.add("abrir");
  }

  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  /*const fetchSize = async () =>{
    const response = await axios.get("api/news/size");
    setSize(response?.data); 
    return response;
  }*/
  useEffect(() =>{

    const fetchData = async () =>{
      const response = await axios.get("api/news/0/8");
      setItems(response.data);
    }

    const fetchSize = async () =>{
      const responseSize = await axios.get("api/news/size");
      setpageCount(responseSize.data/8);
    }
   
    fetchData();
    fetchSize();
   
  },[])

  const handlePageClick = async (data) => {
    const fetchData = async () =>{
     
      console.log(data);
      let url = "api/news/" + data.selected + "/3";
      const response = await axios.get(url);
      setItems(response.data);
    }
    fetchData();
  }
 
  const cargarImagenNoti = require.context("../images", true);
  const DisplayData=items.map(
    (logro)=>{
      return(
        <div className="logroCard" key={logro.id} itemsPerPage="8">
          <div className="logroTop">
            <img src={cargarImagenNoti(`./${logro.image}`)} alt={logro.id} className="logroImg"/>
            <h4>{logro.nombre}</h4>
          </div>
          <p>{logro.descripcion}</p>
          <div className="progress-element">
            <div className="bar">
              <div style={{"width": logro.progresoUsuario + "%", "backgroundColor":"#48BFE3", "height":"20px", "borderRadius":"2px"}}>
              </div>
              <div style={{"width": (logro.maximo-logro.progresoUsuario) + "%", "backgroundColor":"aliceblue", "height":"20px", "borderRadius":"2px"}}>
              </div>
            </div>
          </div>
        </div>
                
      );
    }
  )

  return(
    <div  className="containerLogros" data-testid="containerLogros">
      <Aside/>
      <main>
        <h1>Logros</h1>
        <div className="listLogros">
          {DisplayData}
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
      <div className="right">
        <div className="top">
          <button id="menu-btn" data-testid="botonAbrir" onClick={abrirNavbar}><span><FiMenu/></span></button>
          <div className="profile">
            <div className="info">
              <p>Hey, <b>Daniel</b> </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src={logo} alt="perfil"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logros;