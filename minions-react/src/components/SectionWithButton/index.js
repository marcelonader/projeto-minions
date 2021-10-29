import "./style.css";
import React, {useState} from "react"

function SectionWithButton({imageSection, styles, stylesImg, arrImgInterna, id}){

  const [image, setImage] = useState(arrImgInterna[0])
  const [colorBorderButton, setColor] = useState("#7c50a0")
  const change = ()=>{
    setImage(image === arrImgInterna[0] ? arrImgInterna[1]: arrImgInterna[0])
    setColor(image === arrImgInterna[0] ? "#e9c61a" : "#7c50a0")
  }
  return (
    <section id={id} style={{backgroundImage: imageSection, ...styles}} className="section">
      <img  style={stylesImg} className='img-interna' src={image} alt=''/>
      <button style={{borderColor: colorBorderButton}} className="btn-change" onClick={change}>Clique</button> 
    </section>
  )
}

export default SectionWithButton;