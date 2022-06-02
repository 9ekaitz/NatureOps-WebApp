import React, {useState,useEffect} from "react";
import { MdUploadFile } from "react-icons/md"


function InputFileComponent({grande}){

  function changeText(){
    let input=document.getElementById("fileInput");
    let fileName=input.files[0].name;
    let span=document.getElementById("fileSpan");
    span.innerHTML=fileName;
  }

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    setFile(file);
    document.location.reload();
  }
  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);

  if(grande==1){
    return(
      <>
        {sessionStorage.setItem("chosenPhoto",JSON.stringify(fileDataURL))}
        <div className="subir">
          <span><MdUploadFile/></span>
          <span id="fileSpan">Subir imagen</span>
          <input type="file" id="fileInput" onChange={changeHandler} accepts="image/*"/>
        </div>
      </>
    );

  }else{
    return(
      <div className="foto">
        <span id="fileSpan">Seleccionar Imagen</span>
        <input type="file" id="fileInput" name="fname" onChange={changeText}/>
      </div>
    );
  }

}
export default InputFileComponent;