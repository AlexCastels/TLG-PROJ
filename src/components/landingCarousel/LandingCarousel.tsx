import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import "./landingCarousel.scss";
import { Link } from "react-router-dom";

const LandingCarousel = () => {
  const contents = useAppSelector((state) => state.contentful.contents);
  const error = useAppSelector((state) => state.contentful.error);
  const loading = useAppSelector((state) => state.contentful.loading);

  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredContentsHero = contents.filter(
    (items : any) => items.sys.contentType.sys.id === "erLpCarousel"
  );

  const arr = filteredContentsHero.map((item) => ({
    img: item.fields.image?.fields?.file?.url,
    description: item?.fields.description,
  }));

  useEffect(() => {
    if (arr.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= arr.length - 2 ? 0 : prevIndex + 2
        );
      }, 5000); // Change images every 5 seconds

      return () => clearInterval(interval);
    }
  }, [arr]);

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>{error}</span>;
  }

  if (arr.length === 0) {
    return <span>No items to display.</span>;
  }

  // Get the current two items to display
  const currentItems = [
    arr[currentIndex],
    arr[(currentIndex + 1) % arr.length],
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-subcont">
        {currentItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img
              className="carousel-img"
              src={item.img}
              alt={item.description}
            />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Link to="/discover">Discover more</Link>
    </div>
  );
};

export default LandingCarousel;
