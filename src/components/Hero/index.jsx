import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "../Slider";



export default function SectionHero({ ...props }) {
  return (
    <section {...props}>
      <div className="container-large  padding-section-large">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-top">
              <h1>
                Precizno
                <span className="hero-accent">iznutra</span>
                <span className="hero-border">prema van.</span>
              </h1>
            </div>
            <div className="hero-bottom">
              <p>
                Petrić Vodoinstalacije primjenjuje inovativni pristup
                vodoinstalacijama: sanaciju kanalizacije epoxy smolom bez
                iskopa, dijamantno bušenje kruna i profesionalno odštopavanje.
                Sve prema planu, s mjerljivim rezultatom.
              </p>
              <Link to="/contact" className="button accent">Zatraži procjenu</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Slider></Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
