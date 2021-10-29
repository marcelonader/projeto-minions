import "./style.css";

function Paragrafo ({content, styles}){
  return (
    <p style={styles} className='paragrafo'>{content}</p>
  )
}

export default Paragrafo;