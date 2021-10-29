import "./style.css";

function ImgSection ({imgInterna, styles, arrImgInterna, src}){ 
    return (
        <img  style={styles} className='img-interna' src={imgInterna || src} alt=''/>
    )
}

export default ImgSection;