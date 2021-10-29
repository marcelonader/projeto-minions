import "./style.css";

function Banner ({children, imageBanner, id}){ 
    return (
      <section id={id}  style={{backgroundImage: imageBanner}} className="banner-section">
        {children}
      </section>
    )
}

export default Banner;