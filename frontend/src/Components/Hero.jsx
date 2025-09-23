import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import {Navigation , Pagination , Autoplay , EffectFade ,FreeMode} from 'swiper/modules';

const Hero = () => {

    const slides = [
  { mobile: "sbm-m-1.webp", desktop: "sbm-d-1.webp" },
  { mobile: "sbm-m-2.webp", desktop: "sbm-d-2.png" },
  { mobile: "sbm-m-3.webp", desktop: "sbm-d-3.webp" },
];

  return (
    <>
    <div className=''>
        
        <Swiper 
        modules={[Pagination,Autoplay]}
            spaceBetween ={20}
            slidesPerView ={1}     
            loop={true}
            pagination={{clickable:true}}
            navigation={true}
            autoplay={{
                delay:3000,
                disableOnInteraction:false
            }}
            speed={1000}
            effect='fade'

        >

            {/* for Mobile and Desktop */}
            {slides.map((slide,index)=>(
                <SwiperSlide key={index}>
                <picture>
                    {/* moblie */}
                    <source media='(max-width:640px)' srcSet={slide.mobile} />
                    {/* desktop */}
                    <source media='(min-width:640px)' srcSet={slide.desktop} />
                    
                    {/* falback */}
                    <img className='w-full max-h-screen h-auto' src={slide.desktop} alt={`slide ${index+1}`} />
                </picture>
            </SwiperSlide>
            ))

            }
           
            
            
        </Swiper>
    </div>
    </>
  )
}

export default Hero