import "./style.css";

function Header ({img}){
  return (
    <header>
      <img src={img} alt="logo"></img>
      <nav>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#section1'>Section 1</a></li>
          <li><a href='#section2'>Section 2</a></li>
          <li><a href='#section3'>Section 3</a></li>
          <li><a href='#footer'>Footer</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;