import React , {useState, useEffect}from "react";
import axios from "../api/axios";
import ReactPaginate from "react-paginate";

/*IMAGENES*/

import "../styles/styleSidebar.css"
import "../styles/noticias.css"

import Aside from "../pages/componentsDashBoard/Aside.jsx" 

function Noticias() {

  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);

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
      let url = "api/news/" + data.selected + "/8";
      const response = await axios.get(url);
      setItems(response.data);
    }
    fetchData();
  }
 
  const cargarImagenNoti = require.context("../images", true);
  const DisplayNoticias = items.map(record=>{
    return(
      <div className="card" key={record.id} itemsPerPage="8">
        <img src={cargarImagenNoti(`./${record.image}`)} alt={record.id}/>
        <h4>{record.title}</h4>
        <p>{record.subtitle}</p>
        <a href={record.URL}>Leer más</a> 
      </div>
    )
  });
  return(
    <div className="container noticiasGeneral">
      <Aside/>
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