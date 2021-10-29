import "./style.css";

function ImgSection ({imgInterna, styles}){ 
    return (
        <img  style={styles} className='img-interna' src={imgInterna} alt=''/>
    )
}

export default ImgSection;