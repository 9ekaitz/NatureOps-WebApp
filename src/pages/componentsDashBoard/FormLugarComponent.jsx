import React from "react";

function FormLugarComponente({lugares, labelName}){
  const DisplayData=lugares.map(
    (sitio)=>{
      return(
        <option key={sitio.id}>{sitio.nombre}</option>
      );
    }
  )

  return(
    <div className="formLugar">
      <label htmlFor="lname">{labelName}</label>
      <select className="dropdown">
        {DisplayData}
      </select>
    </div>
  );
}
export default FormLugarComponente;