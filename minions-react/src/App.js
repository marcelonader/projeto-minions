import './App.css';
import Header from "./components/Header";
import logo from "./imgs/minions/pngwing.com (14).png"
import Banner from './components/Banner';
import TitleTyping from './components/TitleTyping';
import {textTitle, textMinions} from './data/texts'
import imageBanner from './imgs/minions/Minions-Wallpapers-Full-Hd-Minions-Guitar-Free-Wallpaper-.jpg'
import imgSection1 from './imgs/minions/Minions-Wallpapers-Full-Hd-Minions-Guitar-Free-Wallpaper-.jpg'
import imgInterna2 from './imgs/minions/pngwing.com (12).png'
import imgSection2 from './imgs/minions/minions-im-with-stupid.jpg'
import imgInterna3 from './imgs/minions/pngwing.com (11).png';
import imgInterna4 from './imgs/minions/pngwing.com (17).png';
import imgInterna5 from './imgs/minions/pngwing.com (16).png';
import linhaHorizontal from './imgs/minions/pngwing.com (15).png';
import imgInternaFooter from './imgs/minions/pngwing.com (13).png'
import backgroundAmarelo from './imgs/minions/background-amarelo.png'
import Section from './components/Section'
import ImgSection from './components/ImgSection'
import Paragrafo from './components/Paragrafo'
import ParagrafoFooter from './components/ParagrafoFooter';
import RedesSociais from './components/RedesSociais';
import SectionWithButton from './components/SectionWithButton'

function App() {
 


  return (
    <>
    <Header img={logo}/>
    <Banner id='home' imageBanner={`url(${imageBanner})`}>
      <TitleTyping arrMessages={textTitle}/>
    </Banner>


    <SectionWithButton id='section1' styles={{height: '100vh', width: '100vw'}} imageSection={`url(${imgSection1})`} stylesImg={{position: 'absolute', 'z-index': '100', right: 0, bottom: '-9rem', width: '40vw', height: '75vh'}} arrImgInterna={[imgInterna3, imgInterna4]}/>

{/* 
    <Section id='section1' styles={{height: '100vh', width: '100vw'}} imageSection={`url(${imgSection1})`}>
      <ImgSection 
        styles={{position: 'absolute', 'z-index': '100', right: 0, bottom: '-9rem', width: '40vw', height: '75vh'}} 
        imgInterna={[imgInterna3, imgInterna4]}
      />
    </Section> */}
    <Section id='section2' styles={{display: 'grid', 'grid-template-columns': '1fr 1fr 1fr 1fr', 'grid-template-rows': '1fr', 'align-items': "center", transform: 'scale(1.1)', height: '100vh', 'min-height': '80vh', width: '80vw'}} imageSection={`url(${imgSection2})`}>
      
      <ImgSection 
        styles={{height: '100vh', width: '20%', 'grid-column': '2/3', 'justify-self':'flex-end'}} 
        imgInterna={imgInterna5}
      />
      <Paragrafo styles={{'grid-column': '3/5', color: '#000', 'font-size': 'clamp(1rem, 1vw, 2rem)', 'text-shadow': '1px 1px 2px black', display: 'inline-block', width: '30vw', 'justify-self':'center'}} content={textMinions}/>
    </Section>
    <Section id='section3' styles={{transform: 'scale(1.1)', height: '80vh', 'max-width': '100vw'}} imageSection={`url(${backgroundAmarelo})`}>
      <ImgSection 
        styles={{position: 'absolute', right: 0, top: '-97px', width: '100%'}} 
        imgInterna={linhaHorizontal}
      />
      <Paragrafo styles={{color: '#000', 'font-size': 'clamp(1rem, 1vw, 2rem)', 'text-align': 'center', 'text-shadow': '1px 1px 2px black'}} content={"Site Desenvolvido por Marcelo Massayuki Nader."}/>
      <ParagrafoFooter styles={{color: '#000', 'font-size': 'clamp(.8rem, 1vw, 1.8rem)', 'text-align': 'center'}}/>
      <ImgSection 
        styles={{position: 'absolute', 'z-index': '200', right: 0, top: '0', bottom: '-9rem', width: '24vw', height: '110%'}} 
        imgInterna={imgInterna2}
      />
    </Section>
    <Section id='footer' styles={{position: 'absolute', 'z-index': '1', transform: 'scale(1.05)', height: '50vh', width: '100vw'}}>
      
      <ImgSection 
        styles={{position: 'absolute', left: 0, bottom: 0, width: '100%', height: '70%'}} 
        imgInterna={imgInternaFooter}
      />
      <Paragrafo styles={{position: "absolute", "z-index": '2000', top: '2%', color: '#000', 'font-weight': 'bold', 'font-size': 'clamp(.8rem, 1vw, 1.8rem)', width: '96%', 'text-align': 'center', 'text-shadow': '2px 2px 1px white'}} content={"Minions S.A."} />
    </Section>

    </>
  );
}

export default App;
