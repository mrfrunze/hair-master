import React from 'react'

const Works = () => {
  return (
    <section className="works" id="work">
            <h2 className="inner-title">Gallery</h2>
            <div className="container">
                <div className="works-block" data-aos="fade-up" data-aos-duration="800">
                    <div className="works-item">
                        <figure>
                            <img src="img/hair1.jpg" alt=""/>
                        </figure>
                    </div>
                    <div className="works-item">
                        <figure>
                            <img src="img/hair2.jpg" alt=""/>
                        </figure>
                    </div>
                    <div className="works-item">
                        <figure>
                            <img src="img/hair3.jpg" alt=""/>
                        </figure>
                    </div>
                    <div className="works-item">
                        <figure>
                            <img src="img/hair4.jpg" alt=""/>
                        </figure>
                    </div>
                    <div className="works-item">
                        <figure>
                            <img src="img/hair5.jpg" alt=""/>
                        </figure>
                    </div>
                    <div className="works-item">
                        <figure>
                            <img src="img/hair6.jpg" alt=""/>
                        </figure>
                    </div>
                </div>
                {/* <button className="works-btn"><a href="">Больше робот</a></button> */}
            </div>
        </section>
  )
}

export default Works