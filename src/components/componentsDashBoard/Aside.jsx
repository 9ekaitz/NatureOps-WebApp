import React from "react";
import logoAlternatibo from "../../images/logoAlternatibo.png";


function Aside() {

  return(
    <aside>
      <div className="top">
        <div className="logo">
          <img src={logoAlternatibo} alt="Logo de NatureOps"/>
          <h2>NATUR<span className='danger'>OPS</span></h2>
        </div>
        <div className="close" id="close-btn">
          <box-icon name='x'></box-icon>
        </div>
      </div>


      <div className="sidebar">
        <a href="/">
          <box-icon type='solid' name='news'></box-icon>
          <h3>Noticias</h3>
        </a>
        <a href="/">
          <box-icon type='solid' name='news'></box-icon>
          <h3>Eventos</h3>
        </a>
        <a href="/">
          <box-icon type='solid' name='news'></box-icon>
          <h3>Sitios</h3>
        </a>
        <a href="/">
          <box-icon type='solid' name='news'></box-icon>
          <h3>Perfil</h3>
        </a>
      </div>

    </aside>
  );
}

export default Aside;