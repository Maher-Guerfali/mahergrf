import "./testimonials.scss";
import maher from '../../maher.jpg';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Maher Guerfali",
      title: "Senior Developer",
      img:
      maher,
      icon: "assets/twitter.png",
      desc:
        "He dont tweet much,but when he do,he spit the truth.",
    },
    {
      id: 2,
      name: "Maher Guerfali",
      title: "Young leaner",
      img:
      maher,
      icon: "assets/youtube.png",
      desc:
        "He make good video with an amazing thumbnails,some one to count on  ",
      featured: true,
    },
    {
      id: 3,
      name: "Maher Guerfali",
      title: "CEO of this website",
      img:
      maher,
      icon: "assets/linkedin.png",
      desc:
        "It ain't much, but it's honest work",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
