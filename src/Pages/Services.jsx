import { useNavigate } from "react-router-dom";
import user from "../assets/user.png";
const services = () => {
    const navigate =useNavigate()
  function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
      let tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }

  window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
      let sliders = sliderSections[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        if (sliders[y].type === "range") {
          sliders[y].oninput = getVals;
          // Manually trigger event first time to display values
          sliders[y].oninput();
        }
      }
    }
  };
  return (
    <>
      <section style={{ backgroundColor: "#fef6e7" }}>
        <div className="container">
          <div
            className="row gx-5 p-5 "
            style={{ justifyContent: "space-between" }}
          >
            <div className="col-md-4 py-5 border border-dark bg-white">
              <p>
                <span className="fw-bold">Date</span>
              </p>

              <button type="button" class="btn btn-link date">
                Today
              </button>
              <button type="button" class="btn btn-link date">
                Choose dates
              </button>
              <button type="button" class="btn btn-link date">
                Within a week
              </button>
              <button type="button" class="btn btn-link date">
                Within 3 days
              </button>

              <div className="time">
                <h5>Time of the Day</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Morning(8am- 12pm)
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option2"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    Afternoon(12pm - 5pm)
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option3"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    Evening(5pm - 9.30pm)
                  </label>
                </div>
              </div>
              <p className="text-center fw-bold"> or choose a specific Time</p>

              <div className="tasker-form-select">
                <select class="form-select" aria-label="Default select example">
                  <option selected>I'm Flexible</option>
                  <option value="1">Albany</option>
                  <option value="2">Texus</option>
                  <option value="3">Temple</option>
                  <option value="3">Oklahoma</option>
                </select>
              </div>
              <hr></hr>

              <div class="form-group">
                <p>Price Range</p>
                <div class="range-slider">
                  <span class="rangeValues"></span>
                  <input
                    value="1000"
                    min="1000"
                    max="50000"
                    step="500"
                    type="range"
                  />
                  <input
                    value="50000"
                    min="1000"
                    max="50000"
                    step="500"
                    type="range"
                  />
                </div>
                <p>
                  {" "}
                  The average hourly rate is<span>$41.29/hr</span>
                </p>
              </div>
              <hr></hr>

              <h5>Tasker Type</h5>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Morning(8am- 12pm)
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option2"
                />
                <label class="form-check-label" for="defaultCheck2">
                  Afternoon(12pm - 5pm)
                </label>
              </div>
            </div>

            <div className="col-md-8 py-5 border border-dark bg-white">
              <div className="row">
                <div className="col-4 px-4">
                  <img className="px-5" src={user} />
                  <p className="text-center">
                    <a href="" style={{ color: "#F9AC25", fontWeight: "500" }}>
                      view profile & <br></br>review
                    </a>
                  </p>

                  <button
                  onClick={()=>navigate("/Servicedetails")}
                    type="button"
                    class="btn btn-warning text-center fw-bold"
                    style={{ width: "100%", color: "#fff" }}
                  >
                    select & continue
                  </button>

                  <p className="text-center py-3">
                    You can chat with your Tasker, adjust task details, or
                    change task time after booking.
                  </p>
                </div>

                <div className="col-8 px-4">
                  <div className="user">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: "700",
                        fontSize: "25px",
                      }}
                    >
                      <h2>Mykta k. </h2> $41.29/hr
                    </span>
                    <p
                      style={{
                        backgroundColor: "#fffaf2",
                        width: "90px",
                        color: "#ff8a00",
                      }}
                    >
                      Great value
                    </p>

                    <p>
                      You rated <span style={{ fontSize: "20px" }}> ★ 5</span>
                    </p>
                    <p>199 Furniture Assembly tasks</p>
                    <p>210 Assembly tasks overall</p>
                  </div>
                  <div
                    className="comment"
                    style={{ backgroundColor: "#f5f7f6", padding: "20px 20px" }}
                  >
                    <h4>How can i Help:</h4>

                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content. Lorem ipsum may be used as a
                      placeholder before the final copy is available.{" "}
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-4 px-4">
                  <img className="px-5" src={user} />
                  <p className="text-center">
                    <a href="" style={{ color: "#F9AC25", fontWeight: "500" }}>
                      view profile & <br></br>review
                    </a>
                  </p>

                  <button
                  onClick={()=>navigate("/Servicedetails")}
                    type="button"
                    class="btn btn-warning text-center fw-bold"
                    style={{ width: "100%", color: "#fff" }}
                  >
                    select & continue
                  </button>

                  <p className="text-center py-3">
                    You can chat with your Tasker, adjust task details, or
                    change task time after booking.
                  </p>
                </div>

                <div className="col-8 px-4">
                  <div className="user">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: "700",
                        fontSize: "25px",
                      }}
                    >
                      <h2>Mykta k. </h2> $41.29/hr
                    </span>
                    <p
                      style={{
                        backgroundColor: "#fffaf2",
                        width: "90px",
                        color: "#ff8a00",
                      }}
                    >
                      Great value
                    </p>

                    <p>
                      You rated <span style={{ fontSize: "20px" }}> ★ 5</span>
                    </p>
                    <p>199 Furniture Assembly tasks</p>
                    <p>210 Assembly tasks overall</p>
                  </div>
                  <div
                    className="comment"
                    style={{ backgroundColor: "#f5f7f6", padding: "20px 20px" }}
                  >
                    <h4>How can i Help:</h4>

                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content. Lorem ipsum may be used as a
                      placeholder before the final copy is available.{" "}
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};
export default services;
