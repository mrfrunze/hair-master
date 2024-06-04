import {hair3} from "../assets/"

const Contact = () => {
  return (
    <section className="request" id="contact">
      <div className="container">
        <div className="request-content">
          <div className="request-text">
              <h3>Contact me.</h3>
              <form className="contact-form">
                <input type="text" placeholder="Name"/>
              <input type="text" placeholder="Phone"/>
              <textarea type="text" placeholder="Comment"/>
              <button className="request-btn" type="submit" disabled>
                Submit
              </button>
              </form>
              
              
          </div>
          <div className="request-img">
              <figure>
                  <img src={hair3} alt="hair"/>
              </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact