import React from "react";

function FormNuevoLugarComponente(){
  function mostrarTexto() {
    var checkBox = document.getElementById("checkSitio");
    var text = document.getElementById("inputOculto");
      
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  return(
    <div className="formNuevoLugar">
      <div className="formCheck">
        <input type="checkbox" id="checkSitio" name="vehicle1" value="Quiero registrar un nuevo sitio" className="inputClass" onClick={mostrarTexto}></input>
        <label htmlFor="lname"> Quiero registrar un nuevo lugar </label>
      </div>
      <input type="text" id="inputOculto" name="lname" className="inputClass oculto" placeholder="Nombre del sitio"/>  
    </div>
  );
}
export default FormNuevoLugarComponente;