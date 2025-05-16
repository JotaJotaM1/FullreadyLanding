import './App.css';
import './reset.css';
import Footer from './components/Footer';
import FAQAccordion from './components/FAQacordeon';
import frasco3 from './assets/frasco3.png';
import image7 from './assets/image7.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import step4 from './assets/step4.png';
import ctaTwoOne from './assets/ctaTwoOne.png';
import ctaTwoTwo from './assets/ctaTwoTwo.png';
import ctaTwoThree from './assets/ctaTwoThree.png';

function App() {
  return (
    <main>

      {/* section One */}

      <section className="sectionOne">
        <div className='cnt-mq1024'>
          <div className="cnt-One">
            <p className="pOne">BIENVENIDO A</p>
            <h1 className="titleOne">FULL READY</h1>
            <p className="pTwo">TU COMPAÑERO DE FIESTA</p>
            <h2 className="pThree">Descubre cómo Full Ready transforma tu noche y mañana.</h2>
            <div className="cntBtnOne btnH1">
              <a to="/shop" className="shop-link">
                <button>
                  ¡CONTÁCTANOS!<i className="bi bi-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="cnt-FrasImage">
            <div className="cnt-Frasco3">
              <img src={frasco3} alt="frasco3"></img>
            </div>
            <div>
              <img className="image7" src={image7} alt="image7"></img>
            </div>
          </div>
        </div>
      </section>

      {/* section two */}

      <section className="cnt-ballHome">
        <div className="cnt-Two">
          <div className="cnt-h2">
            <h2>LOS BENEFICIOS NATURALES, EFECTIVOS Y CERTIFICADOS DE FULL READY</h2>
            <p>Descubre los poderosos beneficios de Full Ready, elaborado con ingredientes 100% naturales para mantenerte energizado, equilibrado y listo para conquistar tu día.</p>
          </div>
          <div className="cnt-fatherImgCard">
            <div className="cntImgCard">
              <img className="image3" src={image3} alt="image3"></img>
              <p className="p3">PROTECCIÓN HEPÁTICA</p>
            </div>
            <div className="cntImgCard">
              <img className="image4" src={image4} alt="image4"></img>
              <p className="p4">ENERGÍA INSTANTÁNEA</p>
            </div>
            <div className="cntImgCard">
              <img className="image5" src={image5} alt="image5"></img>
              <p className="p5">100% NATURAL</p>
            </div>
            <div className="cntImgCard">
              <img className="image6" src={image6} alt="image6"></img>
              <p className="p6">PODER ANTIOXIDANTE</p>
            </div>
          </div>
        </div>
      </section>

      {/* section three */}

      <section>
        <div className="cnt-stp">
          <div>
            <h2 className="titlleStep">SIGUE ESTOS SIMPLES PASOS PARA LOS MEJORES RESULTADOS</h2>
            <p className="textStep">Con Full Ready, no tienes que elegir entre una gran noche y una mañana productiva. Sigue estos simples pasos para disfrutar cada momento.</p>
          </div>
          <div className="cnt-FatherImgStep">
            <div className="cnt-imgStepp">
              <img src={step1}></img>
              <h3 className="titileImgStep">PASO 1</h3>
              <p className="textImgStep">Toma Full Ready antes de beber para proteger tu hígado y prepararte para la noche.</p>
            </div>
            <div className="cnt-imgStepp">
              <img src={step2}></img>
              <h3 className="titileImgStep">PASO 2</h3>
              <p className="textImgStep">Mantente energizado e hidratado mientras festejas - Full Ready te cubre.</p>
            </div>
            <div className="cnt-imgStepp">
              <img src={step3}></img>
              <h3 className="titileImgStep">PASO 3</h3>
              <p className="textImgStep">Disfruta cada momento sin preocupaciones. Full Ready te mantiene fuerte.</p>
            </div>
            <div className="cnt-imgStepp">
              <img src={step4}></img>
              <h3 className="titileImgStep">PASO 4</h3>
              <p className="textImgStep">Despierta fresco e imparable. Full Ready hace las mañanas más fáciles.</p>
            </div>
          </div>
          <a to="/discover" className="anchorBTNstep">
            <button className="btn-HomeGetDisco">
              PREGUNTANOS <i className=" iconRowgetDisco bi bi-arrow-right-short"></i>
            </button>
          </a>
        </div>
      </section>

      <section>
        <h2 className='titleFAQ'>PREGUNTAS MÁS FRECUENTES</h2>
        <FAQAccordion />
      </section>

      {/* Section Five */}

      <section>
        <div className="cnt-callToActionOne">
          <h3 className="tittleCTAOne">DESCUBRE CÓMO FULL READY SE ADAPTA A TU ESTILO DE VIDA</h3>
          <p className="textCTAOne">Desde consejos para la vida nocturna hasta tips de bienestar, explora artículos diseñados para ti. Sea cual sea tu estilo, Full Ready tiene ideas para mantenerte energizado y equilibrado.</p>
        </div>
      </section>

      {/* Section Six */}

      <section className="cnt-mediaquery1440">
        <div className="cnt-callToActionTwo">
          <div className="cnt-CTAmediaQuery">
            <div className="cnt-titleCtaTwo">
              <h3 className="titleCtaTwo">QUÉ DIFERENCIA A FULL READY</h3>
              <p className="textCtaTwo">Creado para quienes lo dan todo por la noche y aún quieren dominar la mañana. Full Ready es la forma más inteligente y natural de recuperarte.</p>
            </div>
            <div className="cnt-imgCtaTwo">
              <img src={ctaTwoOne}></img>
              <img src={ctaTwoTwo}></img>
              <img src={ctaTwoThree}></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </main>
  )
};

export default App;