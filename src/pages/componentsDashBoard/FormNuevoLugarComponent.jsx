import React from "react";

function FormNuevoLugarComponente({labelName, inputPlaceholder}){
  function mostrarTexto() {
    var checkBox = document.getElementById("checkSitio");
    var text = document.getElementById("inputOculto");
      
    if (checkBox.checked){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  return(
    <div className="formNuevoLugar">
      <div className="formCheck">
        <input type="checkbox" id="checkSitio" name="vehicle1" value="Quiero registrar un nuevo sitio" className="inputClass" onClick={mostrarTexto}></input>
        <label htmlFor="lname">{labelName}</label>
      </div>
      <input type="text" id="inputOculto" name="lname" className="inputClass oculto" placeholder={inputPlaceholder}/>  
    </div>
  );
}
export default FormNuevoLugarComponente;