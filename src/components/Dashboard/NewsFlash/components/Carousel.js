import React, {useState} from 'react';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Jumbotron from './Jumbotron';
import Button from './Button';
// import placeholderImage from '../../../../assets/placeholder.jpg';

import './Carousel.css';

const placeholderImage = 'https://wallpaperaccess.com/full/2454628.png'

const ControlledCarousel = () => {
  
  const DUMMY = [
    {
      id: 0,
      title: "1st Slide",
      text: "OK!",
      image: placeholderImage
    },
    {
      id: 1,
      title: "2nd Slide",
      text: "OK!",
      image: placeholderImage
    },
    {
      id: 2,
      title: "3rd Slide",
      text: "OK!",
      image: placeholderImage
    },
    {
      id: 3,
      title: "4th Slide",
      text: "OK!",
      image: placeholderImage
    },
    {
      id: 4,
      title: "5th Slide",
      text: "OK!",
      image: placeholderImage
    },
    {
      id: 5,
      title: "6th Slide",
      text: "OK!",
      image: placeholderImage
    },
    {
      id: 6,
      title: "7th Slide",
      text: "OK!",
      image: placeholderImage
    },
    {
      id: 7,
      title: "8th Slide",
      text: "OK!",
      image: placeholderImage
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const [showContent, setShowContent] = useState(false);
  const [keyId, setKeyId] = useState(0);
  const [prevKeyId, setPrevKeyId] = useState(-1);

  const onClickHandler = (props) => {
    setKeyId(Number(props.target.getAttribute('index-key'))); 
    showContentHandler();
    //console.log("current: "+keyId+" previous: "+prevKeyId+" "+showContent);
    prevKeyIdHandler();
  };

  const showContentHandler = () => {
    if(keyId !== prevKeyId){
      setShowContent(true)
    }
  }

  const prevKeyIdHandler = () => {
    setPrevKeyId(keyId);
  }
  
  const closeHandler = () => {
    setShowContent(false);
    setKeyId(0);
    setPrevKeyId(-1);
  }

  return (
    <React.Fragment>
      <div className="carousel-body">
        <Carousel 
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          autoPlay={showContent ? false : true}
          autoPlaySpeed={5000}
          infinite={true}
          keyBoardControl={true}
          customTransition="all 300ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {DUMMY.map(dummy =>
            <div key={dummy.id} className="carousel-image__effect">
              <img
                key= {dummy.id}
                index-key = {dummy.id}
                className = "carousel-image"
                src= {dummy.image}
                alt= {dummy.title}
                onClick = {onClickHandler}
              />
            </div>
          )}
        </Carousel>
        <div className="jumbotron-body">
          {showContent &&
            DUMMY.filter(dummy=>dummy.id===keyId).map(dummy=>
            <Jumbotron key={dummy.id} title={dummy.title} text = {dummy.text} />
          )}
        </div>
        <div align="center" className = "button-body">
          {showContent &&
            <Button onClick={closeHandler}>CLOSE</Button>
          }
        </div>
      </div>
    </React.Fragment>
  )
}
  
export default ControlledCarousel;