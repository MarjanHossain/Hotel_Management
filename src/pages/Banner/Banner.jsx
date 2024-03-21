// import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Autoplay, Pagination, Navigation, Scrollbar, A11y, } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
// import image

const Banner = () => {

    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        fetch('bannerData.json')
            .then(res => res.json())
            .then(data => {
                setBannerData(data)
                console.log(data);
            })
    }, [])
    return (
        <section className='container'>
            {
                bannerData.length > 0 && <Swiper className='relative group'
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={
                        {
                            nextEl: ".btn-next",
                            prevEl: ".btn-prev"
                        }
                    }

                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                // modules={[Autoplay, Pagination, Navigation, centeredSlides]}

                >
                    {
                        bannerData.map(banner => <SwiperSlide className='container mx-'
                            key={banner._id}>
                            <div className='container'>
                                <div
                                    className='h-[450px] lg:h-[700px] bg-[black] bg-blend-multiply bg-opacity-50 text-center flex items-center  '
                                    style={{
                                        backgroundImage: `url(${banner.image})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}

                                >
                                    <div className='w-1/2 space-y-4 mx-10 z-60'>
                                        <h1 className='text-center text-white text-3xl  font-bold font-sans'>Dive into Deliciousness: Dine at Tastee Trove</h1>
                                        <p className='text-lg font-semibold font-sans text-center text-white '>Indulge in a culinary adventure at Tastee Trove, where every dish is a masterpiece crafted with passion and precision. Join us and experience flavors that ignite the senses and create unforgettable moments.</p>
                                        <button className='bg-[#008DDA] group-hover:bg-[#007F73] hover:bg-red-600 px-12 py-3 rounded-lg text-xl font-semibold text-white '>Menu</button>
                                    </div>
                                </div>
                            </div>



                        </SwiperSlide>)
                    }
                    <div className='absolute inset-y-0 flex items-center justify-center w-full z-50'>
                        <div className='absolute -left-20  group-hover:left-4 duration-500'>
                            <div className='bg-cyan-400 p-3 rounded'>
                                <div className='btn-prev lg:text-3xl'>
                                    <FaArrowLeft />
                                </div>
                            </div>
                        </div>
                        <div className='absolute -right-20  group-hover:right-4 duration-500'>
                            <div className='bg-cyan-400 lg:text-3xl  p-3 rounded'>
                                <div className='btn-next'>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>

                </Swiper>
            }
        </section>
    );
};

export default Banner;