import "./style.css";

function ButtonChange({styles, children, fnChange}){
  return (
    <button 
      style={styles} 
      className="btn-change"
      onClick={fnChange}

    >
      {children}
    </button> 
  )
}

export default ButtonChange;