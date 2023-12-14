import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {useNavigate} from 'react-router-dom'

const CarouselIndex = ({data}:{data:any}) => {

  const navigate = useNavigate();
  const redirectViewPage = (id:string,nome:string,desc:string) => {
    navigate(`/anuncio/${nome.split(' ').join('-')}_${desc.split(' ').join('-')} /${id}`);
}

    return (
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2800}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
        {data ? (
        data.map((e:any) => (
            <>
             <img key={e} style={{width:'100%', height:'450px'}} src={e}/>
            </>
            
              ))
            ) : (
              <h1 style={{textAlign:'center'}}>Os dados não estão disponíveis no momento.</h1>
            )}
        </Carousel>
    )
}

export default CarouselIndex;