import "./style.css";

function Section ({children, imageSection, styles, id}){ 
    return (
      <section id={id} style={{backgroundImage: imageSection, ...styles}} className="section">
        {children}
      </section>
    )
}

export default Section;