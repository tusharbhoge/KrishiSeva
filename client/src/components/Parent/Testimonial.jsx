import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,     // Time interval for auto sliding (in ms)
    pauseOnHover: true       // Pause sliding on hover
  };

  const data = [
    {
      name: " Rajesh Kumar  (Maharashtra)",
      img: "https://cdn.pixabay.com/photo/2021/10/27/08/17/farmer-6746390_1280.jpg",
      review: "Before using KrishiSeva, my crops would barely cover local demand. With the guidance from expert mentors and soil testing suggestions, my yield increased by 40%! ."
    },
    {
      name: "Suman Devi (Uttar Pradesh)",
      img: "https://tse2.mm.bing.net/th?id=OIP.-Xd2RcYpiC51XA29ohBCiQAAAA&pid=Api&P=0&h=180",
      review: "KrishiSeva has been a game changer for me. I used the crop prediction tool and followed the government schemes they recommended. Now, I’m growing crops that are in high demand globally"
    },
    {
      name: "Ankush Singh (Bihar)",
      img: "https://tse4.mm.bing.net/th?id=OIP.CqXnLMzwMIqRq2wZybMrewHaE8&pid=Api&P=0&h=180",
      review: "The mentors on KrishiSeva taught me how to monitor my crop health more effectively. With their support, I achieved a healthier yield this season and started exporting to international markets. "
    },
    {
      name: " Lakshmi Narayan (Tamil Nadu)",
      img: "https://tse1.mm.bing.net/th?id=OIP.N_FIXlqQ-l8LBAfSrkznFQHaFD&pid=Api&P=0&h=180",
      review: "Thanks to KrishiSeva’s soil testing feature, I learned the best crops to grow for my land. The process was easy, and the mentors helped me at every stage.  "
    }
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="bg-white  h-[450px] text-black rounded-xl">
              <div className="h-56 rounded-t-xl bg-green-500 flex justify-center items-center mb-4">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full bg-white" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 pad-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="pad-4 text-center ">{d.review}</p>
                <button className="bg-green-400 text-white text-lg px-6 py-1 rounded-xl hover:bg-green-600">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
