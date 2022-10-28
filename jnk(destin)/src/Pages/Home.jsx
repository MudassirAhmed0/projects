import React from 'react'

const Home = () => {
  return (
    <div className='boxed_wrapper'>
    {/* .preloader */}
    <div className=" " />
    {/* /.preloader */}
    {/* Main Header */}
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 logo-column">
              <figure className="logo-box">
                <a href="index-2.html"><img src="images/logo.png" alt="" /></a>
              </figure>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 menu-column">
              <div className="menu-area">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    {/* Toggle Button */}      
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="current"><a href="index-2.html">Home</a></li>
                      <li className="dropdown"><a href="#">Pages</a>
                        <ul>
                          <li><a href="service.html">Our Services</a></li>
                          <li><a href="tour.html">Tour Page</a></li>
                          <li><a href="faq.html">Faq Page</a></li>
                          <li><a href="error.html">404 Error</a></li>
                        </ul>
                      </li>
                      <li><a href="about.html">About Us</a></li>
                      <li className="dropdown"><a href="#">Gallery</a>
                        <ul>
                          <li><a href="gallery.html">Our Gallery</a></li>
                          <li><a href="gallery-fullwidth.html">Gallery Fullwidth</a></li>
                        </ul>
                      </li>  
                      <li className="dropdown"><a href="#">Blog</a>
                        <ul>
                          <li><a href="blog-grid.html">Blog Grid</a></li>
                          <li><a href="blog-standard.html">Blog Standard</a></li>
                          <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                      </li>                              
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Sticky Header*/}
      <div className="sticky-header">
        <div className="container">
          <div className="header-content">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 logo-column">
                <figure className="small-logo-box">
                  <a href="index-2.html"><img src="images/small-logo.png" alt="" /></a>
                </figure>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 menu-column">
                <div className="menu-area">
                  <nav className="main-menu navbar-expand-lg">
                    <div className="navbar-header">
                      {/* Toggle Button */}      
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div className="navbar-collapse collapse clearfix">
                      <ul className="navigation clearfix">
                        <li className="current"><a href="index-2.html">Home</a></li>
                        <li className="dropdown"><a href="#">Pages</a>
                          <ul>
                            <li><a href="service.html">Our Services</a></li>
                            <li><a href="tour.html">Tour Page</a></li>
                            <li><a href="faq.html">Faq Page</a></li>
                            <li><a href="error.html">404 Error</a></li>
                          </ul>
                        </li>
                        <li><a href="about.html">About Us</a></li>
                        <li className="dropdown"><a href="#">Gallery</a>
                          <ul>
                            <li><a href="gallery.html">Our Gallery</a></li>
                            <li><a href="gallery-fullwidth.html">Gallery Fullwidth</a></li>
                          </ul>
                        </li>  
                        <li className="dropdown"><a href="#">Blog</a>
                          <ul>
                            <li><a href="blog-grid.html">Blog Grid</a></li>
                            <li><a href="blog-standard.html">Blog Standard</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                          </ul>
                        </li>                              
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Sticky Header*/}
    </header>
    {/* End Main Header */}
    {/* Main slider */}
    <section className="main-slider">
      <div className="container-fluid">
        <ul className="main-slider-carousel owl-carousel owl-theme slide-nav">
          <li className="slider-wrapper">
            <div className="image"><img src="images/main-slider/1.jpg" alt="" /></div>
            <div className="slider-caption">
              <div className="container">
                <div className="slider-content">
                  <h3 className="title">Destin Property</h3>
                  <div className="text">480, La Corner St,Sanfransisco ,CA 52698</div>
                  <ul className="list centred">
                    <li>2500 <span>Area Sq-ft</span></li>
                    <li>3 <span>Bedrooms</span></li>
                    <li>3 <span>Kitchen</span></li>
                  </ul>
                  <h1 className="price">$&nbsp;25,000</h1>
                  <div className="link"><a href="#">View Details</a></div>
                </div>
              </div>                             
            </div>
            <div className="slide-overlay" />
          </li>
          <li className="slider-wrapper">
            <div className="image"><img src="images/main-slider/2.jpg" alt="" /></div>
            <div className="slider-caption">
              <div className="container">
                <div className="slider-content">
                  <h3 className="title">Destin Property</h3>
                  <div className="text">480, La Corner St,Sanfransisco ,CA 52698</div>
                  <ul className="list centred">
                    <li>2500 <span>Area Sq-ft</span></li>
                    <li>3 <span>Bedrooms</span></li>
                    <li>3 <span>Kitchen</span></li>
                  </ul>
                  <h1 className="price">$&nbsp;25,000</h1>
                  <div className="link"><a href="#">View Details</a></div>
                </div>
              </div>                            
            </div>
            <div className="slide-overlay" />
          </li>
        </ul>
      </div>
    </section>
    {/* main-slider end */}
    {/* about-section */}
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-sm-12">
            <figure className="img-box wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="images/resource/1.jpg" alt="" /></figure>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-content">
              <h2>about destin</h2>
              <div className="text">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about-section end */}
    {/* intro-section */}
    <section className="intro-section">
      <div className="container">
        <ul className="intro-content clearfix">
          <li className="single-item">
            <div className="content-box">
              <div className="icon-box"><i className="flaticon-calendar" /></div>
              <div className="text">Years of Build</div>
              <h3 className="number">4</h3>
            </div>
          </li>
          <li className="single-item">
            <div className="content-box">
              <div className="icon-box"><i className="flaticon-measure" /></div>
              <div className="text">Square Feet</div>
              <h3 className="number">2200</h3>
            </div>
          </li>
          <li className="single-item">
            <div className="content-box">
              <div className="icon-box"><i className="flaticon-bathtub" /></div>
              <div className="text">BATHROOM</div>
              <h3 className="number">3</h3>
            </div>
          </li>
          <li className="single-item">
            <div className="content-box">
              <div className="icon-box"><i className="flaticon-car" /></div>
              <div className="text">Car Parking</div>
              <h3 className="number">1</h3>
            </div>
          </li>
          <li className="single-item">
            <div className="content-box">
              <div className="icon-box"><i className="flaticon-bed" /></div>
              <div className="text">BedRooms</div>
              <h3 className="number">3</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
    {/* intro-section end */}
    {/* property-highlight */}
    <section className="property-highlight">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="highlight-content">
              <h3>destin HIGHLIGHTS</h3>
              <div className="top-text">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              </div>
              <div className="content-box">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-item">
                      <h4><a href="#">FABULOUS VIEW</a></h4>
                      <div className="text">Nemo enim ipsam voluptatem quia voluptas sit adipisci velit, sed quia non numquam</div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-item">
                      <h4><a href="#">QUIET NIEGBOURHOOD</a></h4>
                      <div className="text">Nemo enim ipsam voluptatem quia voluptas sit adipisci velit, sed quia non numquam</div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-item">
                      <h4><a href="#">NATURAL ENVIRONMENT</a></h4>
                      <div className="text">Nemo enim ipsam voluptatem quia voluptas sit adipisci velit, sed quia non numquam</div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="single-item">
                      <h4><a href="#">LARGEST COMMUNITY</a></h4>
                      <div className="text">Nemo enim ipsam voluptatem quia voluptas sit adipisci velit, sed quia non numquam</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <figure className="img-box"><img src="images/background/1.jpg" alt="" /></figure>
          </div>
        </div>
      </div>
    </section>
    {/* property-highlight end */}
    {/* destin-details */}
    <section className="destin-details">
      <div className="container">
        <h2 className="sec-title centred">destin Details</h2>
        <div className="title-text centred">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,<br />sed quia consequuntur magni dolores eos qui ratione</div>
        <div className="custom-tab-title centred">
          <ul className="tab-title clearfix">
            <li data-tab-name="details" className="active">Interior Details</li>
            <li data-tab-name="review">Exterior Details</li>
            <li data-tab-name="review1">Room Dimensions</li>
          </ul>
        </div>
        <div className="tab-details-content">
          <div className="tab-content" id="details">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <figure className="img-box wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="images/resource/2.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>interior Details</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="review">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <figure className="img-box"><img src="images/resource/3.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>Exterior Details</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="review1">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <figure className="img-box"><img src="images/resource/4.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>Room Dimensions</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* destin-details end */}
    {/* features-section */}
    <section className="features-section">
      <div className="container">
        <h2 className="sec-title centred">destin Features</h2>
        <div className="title-text centred">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,<br />sed quia consequuntur magni dolores eos qui ratione</div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-item">
              <div className="icon-box"><i className="flaticon-magic" /></div>
              <h4><a href="#">Fully Furnished</a></h4>
              <div className="text">Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-item">
              <div className="icon-box"><i className="flaticon-roller" /></div>
              <h4><a href="#">Royal Touch Paint</a></h4>
              <div className="text">Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-item">
              <div className="icon-box"><i className="flaticon-measure" /></div>
              <h4><a href="#">Latest Interior Design</a></h4>
              <div className="text">Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-item">
              <div className="icon-box"><i className="flaticon-shield" /></div>
              <h4><a href="#">Non Stop Security</a></h4>
              <div className="text">Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-item">
              <div className="icon-box"><i className="flaticon-leaf" /></div>
              <h4><a href="#">Living Inside a Nature</a></h4>
              <div className="text">Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-item">
              <div className="icon-box"><i className="flaticon-graphic-design" /></div>
              <h4><a href="#">Luxurious Fittings</a></h4>
              <div className="text">Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* features-section end */}
    {/* gallery-section */}
    <section className="gallery-section sec-pad">
      <div className="container">
        <h2 className="sec-title centred">photo gallery</h2>
        <div className="title-text centred">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,<br />sed quia consequuntur magni dolores eos qui ratione</div>
        <div className="sortable-masonry mixed-gallery-section">
          <ul className="filter-tabs filter-btns post-filter centred">
            <li className="active filter" data-role="button" data-filter=".all">All</li>
            <li className="filter" data-role="button" data-filter=".branding">Bedroom</li>
            <li className="filter" data-role="button" data-filter=".design">Livingroom</li>
            <li className="filter" data-role="button" data-filter=".development">Kitchen</li>
            <li className="filter" data-role="button" data-filter=".others">Garage</li>
          </ul>
          <div className="row items-container clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 default-portfolio-item masonry-item all">
              <div className="single-item">
                <figure className="img-box">
                  <img src="images/resource/gallery-1.jpg" alt="" />
                </figure>
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="overlay-content">
                      <h4><a href="#">Project Name</a></h4>
                      <ul className="list">
                        <li><a href="#"><i className="fa fa-link" /></a></li>
                        <li><a href="images/resource/gallery-1.jpg" className="lightbox-image"><i className="fa fa-eye" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 default-portfolio-item masonry-item all branding development others">
              <div className="single-item">
                <figure className="img-box">
                  <img src="images/resource/gallery-2.jpg" alt="" />
                </figure>
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="overlay-content">
                      <h4><a href="#">Project Name</a></h4>
                      <ul className="list">
                        <li><a href="#"><i className="fa fa-link" /></a></li>
                        <li><a href="images/resource/gallery-2.jpg" className="lightbox-image"><i className="fa fa-eye" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 default-portfolio-item masonry-item all design branding development">
              <div className="single-item">
                <figure className="img-box">
                  <img src="images/resource/gallery-3.jpg" alt="" />
                </figure>
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="overlay-content">
                      <h4><a href="#">Project Name</a></h4>
                      <ul className="list">
                        <li><a href="#"><i className="fa fa-link" /></a></li>
                        <li><a href="images/resource/gallery-3.jpg" className="lightbox-image"><i className="fa fa-eye" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 default-portfolio-item masonry-item all branding development others design">
              <div className="single-item">
                <figure className="img-box">
                  <img src="images/resource/gallery-4.jpg" alt="" />
                </figure>
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="overlay-content">
                      <h4><a href="#">Project Name</a></h4>
                      <ul className="list">
                        <li><a href="#"><i className="fa fa-link" /></a></li>
                        <li><a href="images/resource/gallery-4.jpg" className="lightbox-image"><i className="fa fa-eye" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 default-portfolio-item masonry-item all design development branding ">
              <div className="single-item">
                <figure className="img-box">
                  <img src="images/resource/gallery-5.jpg" alt="" />
                </figure>
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="overlay-content">
                      <h4><a href="#">Project Name</a></h4>
                      <ul className="list">
                        <li><a href="#"><i className="fa fa-link" /></a></li>
                        <li><a href="images/resource/gallery-5.jpg" className="lightbox-image"><i className="fa fa-eye" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 default-portfolio-item masonry-item all design development ">
              <div className="single-item">
                <figure className="img-box">
                  <img src="images/resource/gallery-6.jpg" alt="" />
                </figure>
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="overlay-content">
                      <h4><a href="#">Project Name</a></h4>
                      <ul className="list">
                        <li><a href="#"><i className="fa fa-link" /></a></li>
                        <li><a href="images/resource/gallery-6.jpg" className="lightbox-image"><i className="fa fa-eye" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* gallery-section end */}
    {/* room-dimensions */}
    <section className="room-dimensions">
      <div className="container">
        <h2 className="sec-title centred">Room Dimensions</h2>
        <div className="title-text centred">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,<br />sed quia consequuntur magni dolores eos qui ratione</div>
        <div className="custom-tab-title-one centred">
          <ul className="tab-title clearfix">
            <li data-tab-name="details-one" className="active">Living Room</li>
            <li data-tab-name="review-one">Bedrooms</li>
            <li data-tab-name="review1-one">Pool</li>
            <li data-tab-name="review2-one">Kitchen</li>
            <li data-tab-name="review3-one">Garage</li>
            <li data-tab-name="review4-one">Yard</li>
          </ul>
        </div>
        <div className="tab-details-content-one">
          <div className="tab-content" id="details-one">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <figure className="img-box wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="images/resource/5.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>Living Room</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="review-one">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <figure className="img-box"><img src="images/resource/5.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>Bedrooms</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="review1-one">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <figure className="img-box"><img src="images/resource/5.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>Pool</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="review2-one">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <figure className="img-box"><img src="images/resource/5.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>Kitchen</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="review3-one">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <figure className="img-box"><img src="images/resource/5.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>Garage</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="review4-one">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <figure className="img-box"><img src="images/resource/5.jpg" alt="" /></figure>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="content-box">
                  <h4>Yard</h4>
                  <div className="text">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  </div>
                  <ul className="list"> 
                    <li>Water Strg : 5000/ltr</li>
                    <li>Bathroom : 2</li>
                    <li>Bedrooms : 2</li>
                    <li>No of Stair : 4</li>
                    <li>Parking Capacity : 4</li>
                    <li>No of Floors : 2</li>
                    <li>No Air Condition : 2</li>
                    <li>No of Kitchen : 1</li>
                    <li>Swimming Pool : 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* room-dimensions end */}
    {/* our-agent */}
    <section className="our-agent centred">
      <div className="container">
        <h2 className="sec-title">Our Agent</h2>
        <div className="title-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed<br />quia consequuntur magni dolores eos qui ratione</div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 agent-column">
            <div className="single-item">
              <ul className="agent-social">
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
              </ul>
              <figure className="img-box"><a href="#"><img src="images/resource/team-1.jpg" alt="" /></a></figure>
              <div className="lower-content">
                <h4><a href="#">Alvis Milan</a></h4>
                <div className="text">Real estate agent</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 agent-column">
            <div className="single-item">
              <ul className="agent-social">
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
              </ul>
              <figure className="img-box"><a href="#"><img src="images/resource/team-2.jpg" alt="" /></a></figure>
              <div className="lower-content">
                <h4><a href="#">Jhon Doe</a></h4>
                <div className="text">Real estate agent</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 agent-column">
            <div className="single-item">
              <ul className="agent-social">
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
              </ul>
              <figure className="img-box"><a href="#"><img src="images/resource/team-3.jpg" alt="" /></a></figure>
              <div className="lower-content">
                <h4><a href="#">Hugo Smith</a></h4>
                <div className="text">Real estate agent</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 agent-column">
            <div className="single-item">
              <ul className="agent-social">
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
              </ul>
              <figure className="img-box"><a href="#"><img src="images/resource/team-4.jpg" alt="" /></a></figure>
              <div className="lower-content">
                <h4><a href="#">Jenny Salvia</a></h4>
                <div className="text">Real estate agent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* our-agent end */}
    {/* testimonial-section */}
    <section className="testimonial-section sec-pad centred" style={{backgroundImage: 'url(images/background/2.jpg)'}}>
      <div className="container">
        <h2 className="sec-title">clients testimoinal</h2>
        <div className="title-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,<br />sed quia consequuntur magni dolores eos qui ratione</div>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
            <div className="testimonial-slider">
              <div className="testimonial-content">
                <div className="author-info">
                  <figure className="author-thumb"><img src="images/resource/1.png" alt="" /></figure>
                  <h4>Carl Arthur</h4>
                </div>
                <div className="text">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
                </div>
              </div>
              <div className="testimonial-content">
                <div className="author-info">
                  <figure className="author-thumb"><img src="images/resource/1.png" alt="" /></figure>
                  <h4>Carl Arthur</h4>
                </div>
                <div className="text">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
                </div>
              </div>
              <div className="testimonial-content">
                <div className="author-info">
                  <figure className="author-thumb"><img src="images/resource/1.png" alt="" /></figure>
                  <h4>Carl Arthur</h4>
                </div>
                <div className="text">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* testimonial-section end */}
    {/* news-section */}
    <section className="news-section sec-pad">
      <div className="container">
        <h2 className="sec-title centred">latest news</h2>
        <div className="title-text centred">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,<br />sed quia consequuntur magni dolores eos qui ratione</div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 news-column">
            <div className="news-content">
              <figure className="img-box"><a href="blog-single.html"><img src="images/resource/news-1.jpg" alt="" /></a></figure>
              <div className="lower-content">
                <div className="date">17 May</div>
                <h4><a href="blog-single.html">Tips For Having an Estate Sale</a></h4>
                <div className="text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quiunt.</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-column">
            <div className="news-content">
              <figure className="img-box"><a href="blog-single.html"><img src="images/resource/news-2.jpg" alt="" /></a></figure>
              <div className="lower-content">
                <div className="date">17 May</div>
                <h4><a href="blog-single.html">Green valley near our villa</a></h4>
                <div className="text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quiunt.</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 news-column">
            <div className="news-content">
              <figure className="img-box"><a href="blog-single.html"><img src="images/resource/news-3.jpg" alt="" /></a></figure>
              <div className="lower-content">
                <div className="date">17 May</div>
                <h4><a href="blog-single.html">Real Estate Lead Generation Tips</a></h4>
                <div className="text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quiunt.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* news-section end */}
    {/* main-footer */}
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="about-widget footer-widget">
              <div className="footer-title"><h4>ABOUT US</h4></div>
              <div className="text">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos rem ipsum quia dolor sit amet, consectetur.
              </div>
              <div className="contact-info">
                <div className="single-item">
                  <div className="icon-box"><i className="fa fa-phone" /></div>
                  <div className="text"><span>Phone:</span> + 844 123 456 78 90</div>
                </div>
                <div className="single-item">
                  <div className="icon-box"><i className="fa fa-map-marker" /></div>
                  <div className="text"><span>Add:</span> 123 Third Street Fifth Avenue, Manhattan, New York, USA</div>
                </div>
                <div className="single-item">
                  <div className="icon-box"><i className="fa fa-envelope" /></div>
                  <div className="text"><span>Email:</span> contact@company.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div className="footer-post footer-widget">
              <div className="footer-title"><h4>RECENT NEWS</h4></div>
              <div className="single-post">
                <div className="time">5 Minutes Ago</div>
                <div className="text"><a href="blog-single.html">The addams Family making your way in the world.</a></div>
              </div>
              <div className="single-post">
                <div className="time">5 Minutes Ago</div>
                <div className="text"><a href="blog-single.html">The addams Family making your way in the world.</a></div>
              </div>
              <div className="single-post">
                <div className="time">5 Minutes Ago</div>
                <div className="text"><a href="blog-single.html">The addams Family making your way in the world.</a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
            <div className="link-widget footer-widget">
              <div className="footer-title"><h4>USEFULL LINKS</h4></div>
              <ul className="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Faq &amp; Support</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
            <div className="subscribe-widget footer-widget">
              <div className="footer-title"><h4>NEWSLETTERS</h4></div>
              <div className="subscribe-form">
                <form action="#" method="post">
                  <div className="form-group">
                    <i className="fa fa-user" />
                    <input type="text" name="name" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <i className="fa fa-envelope-o" />
                    <input type="email" name="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <button type="submit">SUBSCRIBE NOW</button>
                  </div>
                </form>
              </div>
              <ul className="footer-social">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* main-footer end */}
    {/* footer-bottom */}
    <div className="footer-bottom centred">
      <div className="container">
        <div className="copyright">© Copyrights 2018 <a href="#">Destin</a>. All Rights Reserved</div>
      </div>
    </div>
    {/* footer-bottom end */}
    {/*Scroll to top*/}
    <div className="scroll-top scroll-to-target" data-target=".main-header"><span className="icon fa fa-angle-up" /></div>
    {/*jquery js */}
  </div>

  )
}

export default Home