import "./followUsOnInstagram.css";
import Slider from "react-slick";
import { Typography } from "antd";
const { Title } = Typography;
export default function FollowUsOnInstagram() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 0,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2,
              arrows: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,
            }
          }
        ]
      };
    

  return (
    <section id="followus_instagram">
      <Title>Follow us on Instagram</Title>
      <div className="slider-container">
       <Slider {...settings}>
       <div>
          <img src="/src/assets/instagram photos/1.jpg" alt="" />
        </div>
        <div>
          <img src="/src/assets/instagram photos/2.jpg" alt="" />
        </div>
        <div>
          <img src="/src/assets/instagram photos/3.jpg" alt="" />
        </div>
        <div>
          <img src="/src/assets/instagram photos/4.jpg" alt="" />
        </div>
        <div>
          <img src="/src/assets/instagram photos/5.jpg" alt="" />
        </div>
        <div>
          <img src="/src/assets/instagram photos/6.jpg" alt="" />
        </div>
       </Slider>
      </div>
    </section>
  );
}
