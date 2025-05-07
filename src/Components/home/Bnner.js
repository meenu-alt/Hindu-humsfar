import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdMan, MdWoman } from "react-icons/md";
import "./home.css";
import "./responsive.css";
import Select from "react-select";

export default function Bnner() {
  // for form caste
  // caste data
  const [casteOptions, setCasteOptions] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/caste.php"
      )
      .then((response) => {
        setCasteOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching caste data:", error);
      });
  }, []);
  // caste data
  // for form caste

  //  bg image
  const [bgImage, setBgImage] = useState(null);
  const [imageLoadError, setImageLoadError] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/banner-image.php"
      )
      .then((response) => {
        console.log("API Data:", response.data);
        if (response.data?.banner_image) {
          // Verify the image exists before setting it
          const img = new Image();
          img.onload = () => {
            setBgImage(response.data.banner_image);
            setImageLoadError(false);
          };
          img.onerror = () => {
            console.error("Image failed to load:", response.data.banner_image);
            setImageLoadError(true);
          };
          img.src = response.data.banner_image;
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        setImageLoadError(true);
      });
  }, []);
  //  bg image

  const [formData, setFormData] = useState({
    gender: "male",
    lookingFor: "female",
    religion: "Hindu",
    caste: "Select Caste",
    minAge: 25,
    maxAge: 46,
  });

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAgeChange = (e, type) => {
    const value = parseInt(e.target.value);
    if (type === "min") {
      setFormData((prev) => ({
        ...prev,
        minAge: Math.min(value, prev.maxAge),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        maxAge: Math.max(value, prev.minAge),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://hinduhumsafar.com/admin-mat/api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setApiData(data);
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-img">
        <div className="str">
          <div
            className="hom-head"
            style={{
              backgroundImage:
                bgImage && !imageLoadError ? `url('${bgImage}')` : "none",
              height: "700px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#f5f5f5", // Fallback color
              backgroundRepeat: "no-repeat",
              position: "relative", // For overlay content
            }}
          >
            {/* Dark overlay for better text visibility */}
            {bgImage && !imageLoadError && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              ></div>
            )}

            <div
              className="container"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="row">
                <div className="hom-ban">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <div className="banner-content">
                        <h1 className="text-light">
                          Your Journey To Love Begins{" "}
                          <span style={{ color: "#F4B818" }}>here !</span>
                        </h1>

                        <h3 className="text-light ">
                          Connect With Genuine Matches Who <br /> Share Your{" "}
                          <span style={{ color: "#F4B818" }}>values</span> and{" "}
                          <span style={{ color: "#F4B818" }}>dreams.</span>
                        </h3>

                        {apiData && (
                          <div
                            className="api-response"
                            style={{
                              marginTop: "20px",
                              padding: "10px",
                              backgroundColor: "rgba(255,255,255,0.2)",
                              borderRadius: "5px",
                            }}
                          >
                            <p style={{ color: "#fff" }}>
                              Success! {apiData.message}
                            </p>
                          </div>
                        )}

                        {error && (
                          <div
                            className="error-message"
                            style={{
                              marginTop: "20px",
                              padding: "10px",
                              backgroundColor: "rgba(255,0,0,0.2)",
                              borderRadius: "5px",
                            }}
                          >
                            <p style={{ color: "#fff" }}>Error: {error}</p>
                          </div>
                        )}

                        {/* Image load error message (debugging only) */}
                        {imageLoadError && (
                          <div style={{ color: "black", marginTop: "10px" }}>
                            Banner image failed to load
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <div className="wedding-form-container">
                        <div className="wedding-form">
                          <form onSubmit={handleSubmit}>
                            {/* Form sections remain exactly the same */}
                            {/* I'm A section */}
                            <div className="form-section">
                              <label className="form-label">I'm A</label>
                              <div className="gender-options">
                                <label
                                  className={`gender-option ${
                                    formData.gender === "male" ? "selected" : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                    className="hidden-radio"
                                  />
                                  <MdMan className="gender-icon" /> Male
                                </label>
                                <label
                                  className={`gender-option ${
                                    formData.gender === "female"
                                      ? "selected"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleChange}
                                    className="hidden-radio"
                                  />
                                  <MdWoman className="gender-icon" /> Female
                                </label>
                              </div>
                            </div>

                            {/* Looking For section */}
                            <div className="form-section">
                              <label className="form-label">
                                Looking For A
                              </label>
                              <div className="gender-options">
                                <label
                                  className={`gender-option ${
                                    formData.lookingFor === "male"
                                      ? "selected"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="lookingFor"
                                    value="male"
                                    checked={formData.lookingFor === "male"}
                                    onChange={handleChange}
                                    className="hidden-radio"
                                  />
                                  <MdMan className="gender-icon" /> Male
                                </label>
                                <label
                                  className={`gender-option ${
                                    formData.lookingFor === "female"
                                      ? "selected"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="lookingFor"
                                    value="female"
                                    checked={formData.lookingFor === "female"}
                                    onChange={handleChange}
                                    className="hidden-radio"
                                  />
                                  <MdWoman className="gender-icon" /> Female
                                </label>
                              </div>
                            </div>

                            {/* Religion and Caste */}
                            <div className="form-row">
                              <div className="form-section">
                                <label className="form-label">Religion</label>
                                <select
                                  name="religion"
                                  value={formData.religion}
                                  onChange={handleChange}
                                  className={`form-select ${
                                    formData.religion ? "selected" : ""
                                  }`}
                                >
                                  <option value="">Select Religion</option>
                                  <option value="Hindu">Hindu</option>
                                </select>
                              </div>
                              <div className="form-section">
                                <label className="form-label">Caste</label>
                                {/* <select
                                  name="caste"
                                  value={formData.caste}
                                  onChange={handleChange}
                                  className={`form-select ${
                                    formData.caste &&
                                    formData.caste !== "Select Caste"
                                      ? "selected"
                                      : ""
                                  }`}
                                >
                                  <option value="">Select Caste</option>
                                  {casteOptions.map((caste, index) => (
                                    <option key={index} value={caste}>
                                      {caste}
                                    </option>
                                  ))}
                                </select> */}
                                <Select
  options={casteOptions.map((caste) => ({ label: caste, value: caste }))}
  value={{ label: formData.caste, value: formData.caste }}
  onChange={(selected) => handleChange({ target: { name: "caste", value: selected.value } })}
/>
                              </div>
                            </div>

                            {/* Age Range */}
                            <div className="form-section">
                              <label className="form-label">
                                Of Age Around
                              </label>
                              <div className="age-display">
                                <span>{formData.minAge}</span>
                                <span>{formData.maxAge}</span>
                              </div>
                              <div className="age-slider-container">
                                <div className="age-slider-track">
                                  <div
                                    className="age-slider-range"
                                    style={{
                                      left: `${
                                        ((formData.minAge - 20) / 50) * 100
                                      }%`,
                                      right: `${
                                        100 -
                                        ((formData.maxAge - 20) / 50) * 100
                                      }%`,
                                    }}
                                  ></div>
                                </div>
                                <input
                                  type="range"
                                  min="20"
                                  max="70"
                                  value={formData.minAge}
                                  onChange={(e) => handleAgeChange(e, "min")}
                                  className="age-slider min-slider"
                                />
                                <input
                                  type="range"
                                  min="20"
                                  max="70"
                                  value={formData.maxAge}
                                  onChange={(e) => handleAgeChange(e, "max")}
                                  className="age-slider max-slider"
                                />
                              </div>
                              <div className="age-marks">
                                <span>20</span>
                                <span>30</span>
                                <span>40</span>
                                <span>50</span>
                                <span>60</span>
                                <span>70</span>
                              </div>
                            </div>

                            <button
                              type="submit"
                              className="submit-button"
                              disabled={loading}
                            >
                              {loading
                                ? "Submitting..."
                                : "Start Your Search Today!"}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
