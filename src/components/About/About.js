import React from 'react'
import styled from 'styled-components'
import MapContainer from './MapContainer';

export default function About (){

 return (
    <AboutWrapper>
      <div className="container-fluid about-wrapper my-4">
        <div className="map-container mb-4">
          <MapContainer />
        </div>
          <div className="row mb-4">
            <div className="col-6">
              <div className="card">
                <img src="img/about1.jpg" alt="testalt" className="about-card-img card-img-top"/>
                <div className="card-body h-100">
                  <h5 className="card-title about-card-title">our history</h5>
                  <p className="card-text about-card-text">
                    Termia was founded in 2004 as Termia Group’s flagship website.
                    We are a part of Termia Group, which is one of Europe’s largest online retailers.
                    Some of our sister websites include Myprotein, Zavvi, Coggles and Lookfantastic.
                    At Termia we select the finest products from the rest of our group, and use the specialist
                    knowledge from our other sites to help influence our luxury online department store.
                    Our home is in the North-West of England, and from this base we connect with our customers
                    all over the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card about-card h-100">
                <img src="img/about2.jpg" alt="testalt" className="about-card-img card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title about-card-title">our brands</h5>
                  <p className="card-text about-card-text">
                    Here at Termia we are your one-stop online destination. We hand-pick our products
                    to bring you the highest quality ranges each season, with hundreds of products lan
                    ding each month across fashion, homeware, health & beauty, electronics and gifts. We
                    have strong, long-standing relationships with our brands and work closely with them
                    to bring you the best ranges, competitions and more. Some of our most popular brands
                    include Le Creuset, Hugo Boss, ghd, L’Oreal, Apple, The North Face and LEGO.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <div className="card about-card h-100">
                <img src="img/about3.jpg" alt="testalt" className="about-card-img card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title about-card-title">why shop with us?</h5>
                  <p className="card-text about-card-text">
                    We offer free UK next day delivery when you spend £50 so you
                    can get the things you want, when you want, without having to wait.
                    We also offer free 2-3 working days UK delivery when you spend £30 or more.
                    We now deliver to over 200 countries with tracked postage available so you
                    can follow your order all the way to your doorstep. Our online shopping experience
                    is 100% safe and secure so you can have peace of mind when shopping for the things
                    you love.
                  </p>
                </div>
              </div>
            </div><div className="col-6">
              <div className="card about-card h-100">
                <img src="img/about4.jpg" alt="testalt" className="about-card-img card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title about-card-title">follow us</h5>
                  <p className="card-text about-card-text">
                    Join us on Facebook, Twitter and Instagram for the inside scoop on our latest offers,
                    trends & ranges. Need some more inspiration? Our blog features all our top lifestyle tips,
                    how-to guides and general inside-knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <div className="card about-card h-100">
                <img src="img/about5.jpg" alt="testalt" className="about-card-img card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title about-card-title">work with us</h5>
                  <p className="card-text about-card-text">
                    Want to get involved? We are always on the lookout for new,
                    cutting-edge brands and bloggers to work with. Whether you are interested in fashion,
                    interior design or health & beauty, you can earn commission while working with your
                    favourite luxury brands. Click here to find out more.
                  </p>
                </div>
              </div>
            </div><div className="col-6">
              <div className="card about-card h-100">
                <img src="img/about6.jpg" alt="testalt" className="about-card-img card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title about-card-title">contact us</h5>
                  <p className="card-text about-card-text">
                    Click here to speak to our customer services team.
                    For all press and blogger enquiries please contact Partnerships@termiagroup.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`

.row{
  padding:0 3rem;
}

.about-card-img{
  height: 45vh;
  object-fit:cover;
}

.about-card-title{
  text-transform:capitalize;
  text-align: center;
  font-family: Arial,sans-serif;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
}

.about-card-text{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.about-wrapper{
  padding:0 5rem !important;
}

`
