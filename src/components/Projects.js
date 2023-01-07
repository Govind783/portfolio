import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import airbnbHome from "../assets/img/airbnbHome.png"
import airbnbSearch from "../assets/img/airbnbSearch.png"
import airbnbCheckout from "../assets/img/airbnbCheckout.png"
import airbnbPlaceDetail from "../assets/img/airbnbPlaceDetail.png"
import search1 from "../assets/img/aribnbsearch1.png"
import search2 from "../assets/img/airbnbsearch2.png"
import airbnb3 from "../assets/img/airbnb3.png"
import airbnb4 from "../assets/img/airbnbcal.png"

import ecom1 from "../assets/img/ecom1.png";
import ecom from "../assets/img/ecom.png";
import ecom2 from "../assets/img/ecom2.png";
import ecom3 from "../assets/img/ecom3.png";
import ecom4 from "../assets/img/ecom4.png";
import ecom5 from "../assets/img/ecom5.png";
import ecom6 from "../assets/img/ecom6.png";
import ecom7 from "../assets/img/ecom7.png";



import Illustration from "../assets/img/try.png"
import speechBubble from "../assets/img/image.png"
import github from "../assets/img/icons8-github.svg";
import web from "../assets/img/web.png";

import airbnb from "../assets/img/airbnb.png"
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { ExternalLink } from "react-external-link";

import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "../../node_modules/react-tooltip/dist/react-tooltip.css"

import netflix1 from "../assets/img/netflix1.png"
import netflix2 from "../assets/img/net2.png"
import netflix3 from "../assets/img/net3.png"
import netflix4 from "../assets/img/net4.png"
import netflix5 from "../assets/img/net5.png"
import netflix6 from "../assets/img/net6.png"
import netflix7 from "../assets/img/net7.png"
import netflix8 from "../assets/img/net8.png"
import netflix9 from "../assets/img/net9.png"
import netflix10 from "../assets/img/net10.png"
import netflix11 from "../assets/img/net11.png"




export const Projects = () => {

  const projects1 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      img1: airbnb,
    },

  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsArrowRight className=" text-white whiteColor z-50" />,
    prevArrow: <BsArrowLeft className=" text-white whiteColor z-50" />,

  };


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>

                  <div className="leverageHold">
                    <p className=" capitalize o">"creating leverage should be the first priority of every Homosapien. that leverage can be anything leverage of time, leverage of money, leverage of skills, or even leverage of your team. As it is the same leverage that can put you way ahead of your competitors" - A lesson from my trading journey.</p>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item  className="cursor-pointer">
                        <Nav.Link eventKey="first">AIRBNB</Nav.Link>
                      </Nav.Item>
                      <Nav.Item  className="cursor-pointer">
                        <Nav.Link eventKey="second">E-COMMERCE</Nav.Link>
                      </Nav.Item>
                      <Nav.Item  className="cursor-pointer">
                        <Nav.Link eventKey="third">NETFLIX</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>

                          <div>
                            <Slider {...settings}>
                              <img src={airbnbHome} className=" rounded-xl mb-8" />
                              <img src={airbnb3} className=" rounded-xl mb-8" />
                              <img src={airbnbSearch} className=" rounded-xl mb-8" />
                              <img src={search1} className=" rounded-xl mb-8" />
                              <img src={search2} className=" rounded-xl mb-8" />

                              <img src={airbnbPlaceDetail} className=" rounded-xl mb-8" />
                              <img src={airbnb4} className=" rounded-xl mb-8" />

                              <img src={airbnbCheckout} className=" rounded-xl mb-8" />
                            </Slider>


                            <div className="flex justify-center ccc">

                              <img src={Illustration} className="w20rem ml-10" />

                              <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">

                                  "The best Airbnb clone!! built using react and tailwind the project contains the home page,
                                  Search results page, place detail page, and the checkout page. the project is integrated
                                  with google-O auth, PayPal, google-pay, visa, Amex and Mastercard. on the home page, the user can
                                  select a stay from 100's of options and the nav bar gives the user an option to search
                                  for his destination, choose the dates and select the number of guests. which redirects to the search page of
                                  the specific destination where he has the option to sort the price from low to high. filter out
                                  couple-friendly options and even choose pet-friendly options. upon clicking a specific stay the
                                  user is then taken to the place detail page which shows more information about the place, such
                                  as reviews, who has hosted the destination and a calendar to choose the preferred dates, and once
                                  the dates are chosen the user is then taken to the checkout page which has PayPal, google-pay, visa,
                                  MasterCard and Amex integrated and the user can finally make the payment.<ExternalLink href="https://github.com/Govind783" className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my github </ExternalLink> "

                                </p>
                              </div>


                            </div>


                            <div className="flex relative speechHold">
                              <img src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github"
                              place="bottom"
                              content="github" />

                            <ReactTooltip
                              anchorId="live"
                              place="bottom"
                              content="live project" />

                            <div className="flex gap-6 relative bubbleContentHold">
                              <ExternalLink href="https://github.com/Govind783/airbnb-clone">
                                <BsGithub className=" inline-block white text-3xl" id="github" />
                              </ExternalLink>

                              <ExternalLink href="https://govinds-bookbnb.netlify.app/">
                                <BsGlobe className=" white text-3xl inline-block" id="live" />
                              </ExternalLink>
                            </div>

                          </div>
                        </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="second">
                        <Row>

                          <div>
                            <Slider {...settings}>
                              <img src={ecom1} className=" rounded-xl mb-8" />
                              <img src={ecom2} className=" rounded-xl mb-8" />
                              <img src={ecom3} className=" rounded-xl mb-8" />
                              <img src={ecom} className=" rounded-xl mb-8" />
                              <img src={ecom4} className=" rounded-xl mb-8" />
                              <img src={ecom5} className=" rounded-xl mb-8" />
                              <img src={ecom6} className=" rounded-xl mb-8" />
                              <img src={ecom7} className=" rounded-xl mb-8" />



                            </Slider>


                            <div className="flex justify-center ccc">

                              <img src={Illustration} className="w20rem ml-10" />

                              <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">
                                  "Show me a better e-commerce website than this in terms of features, functionality, UI UX A full
                                  fledged 8-page e-commerce website built using react and redux. The website comprises of the   home
                                  page, product detail page, cart and checkout page, under 20, under 40, for him, for her page, and the journal page.
                                  the home page consisting of the featured products and best sellers. the product detail page displays further
                                  information about a product such as other images, an FAQ section, similar products, and the review section to search for and filter out reviews.
                                  the cart page has google-pay, PayPal, visa, Amex and MasterCard integrated for the user to checkout.
                                  the under 20 and under 40 page have option to filter out products based on the category of the product
                                  i.e body-lotion, body-wash, and body-scrub. <ExternalLink href="https://github.com/Govind783" className="text-yellow-400 hover:text-yellow-500 uppercase"> See more on my github </ExternalLink>"

                                </p>
                              </div>


                            </div>


                            <div className="flex relative speechHold">
                              <img src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github2"
                              place="bottom"
                              content="github" />

                            <ReactTooltip
                              anchorId="live2"
                              place="bottom"
                              content="live project" />

                            <div className="flex gap-6 relative bubbleContentHold">
                              <ExternalLink href="https://github.com/Govind783/react-e-commerce-">
                                <BsGithub className=" inline-block white text-3xl" id="github2" />
                              </ExternalLink>

                              <ExternalLink href="https://govind-ecommerce.netlify.app/">
                                <BsGlobe className=" white text-3xl inline-block" id="live2" />
                              </ExternalLink>
                            </div>

                          </div>
                        </Row>



                      </Tab.Pane>
                      <Tab.Pane eventKey="third">

                        <Row>
                          <div>
                            <Slider {...settings}>
                              <img src={netflix1} className=" rounded-xl mb-8" />
                              <img src={netflix2} className=" rounded-xl mb-8" />
                              <img src={netflix3} className=" rounded-xl mb-8" />
                              <img src={netflix4} className=" rounded-xl mb-8" />
                              <img src={netflix5} className=" rounded-xl mb-8" />
                              <img src={netflix6} className=" rounded-xl mb-8" />
                              <img src={netflix7} className=" rounded-xl mb-8" />
                              <img src={netflix8} className=" rounded-xl mb-8" />
                              <img src={netflix9} className=" rounded-xl mb-8" />
                              <img src={netflix10} className=" rounded-xl mb-8" />
                              <img src={netflix11} className=" rounded-xl mb-8" />
                            </Slider>


                            <div className="flex justify-center ccc">

                              <img src={Illustration} className="w20rem ml-10" />

                              <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">
                                  "A Netflix clone built using react and redux the website comprises of the login page,
                                  the home page displays featured movies and tv shows, a trending section, and when hovered
                                  on, it tells you about the name, IMDB rating, and a short summary of the film. the user
                                  can even choose to pick a movie from any genre such as action, adventure, thriller,
                                  horror, etc. below which is the search bar. try searching for any movie and the result
                                  would be right in front of you. upon clicking a certain movie the user is taken to the
                                  movie detail page which shows the IMDB rating, cast, plot, genres, and similar movies
                                  based upon the genre. by clicking the "add to watch later" button a side-bar opens up
                                  displaying all the movies that you've added to the watch later list and upon clicking on the
                                  "watch on youtube" button you are then redirected to the youtube trailer link of that
                                  particular movie. the project uses TMDB as the backend api endpoint  <ExternalLink href="https://github.com/Govind783" className="text-yellow-400 hover:text-yellow-500 uppercase"> See more on my github </ExternalLink>"

                                </p>
                              </div>


                            </div>


                            <div className="flex relative speechHold">
                              <img src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github3"
                              place="bottom"
                              content="github" />

                            <ReactTooltip
                              anchorId="live3"
                              place="bottom"
                              content="live project" />

                            <div className="flex gap-6 relative bubbleContentHold">

                              <ExternalLink href="https://github.com/Govind783/netflix-clone">
                                <BsGithub className=" inline-block white text-3xl" id="github3" />
                              </ExternalLink>

                              <ExternalLink href="https://govinds-project.netlify.app/">
                                <BsGlobe className=" white text-3xl inline-block" id="live3" />
                              </ExternalLink>
                            </div>

                          </div>
                        </Row>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

/*

{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbSearch,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbCheckout,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: airbnbPlaceDetail,
    },

            */