import React from "react";
import collageImage from "./images/lovecaptured2.jpg"; 

const WeddingCollageSection = () => {
  return (
    <>
      <style>
        {`
      .wedding-collage-section {
  width: 100%;
  justify-content: center;
  align-items: center;
  margin:0 auto;
}

.wedding-collage-img {
  max-width: 100%;
  height: auto;
      margin: 0 auto;
    justify-content: center;
    display: flex
;
}
.headingg{
    margin-bottom: 16px;
}

`}
      </style>
      <section className="wedding-collage-section">
      <div className="headingg">
      <h3 className="text-center"><span style={{color: "#E53D5C"}}> Love</span> Captured in Moments</h3>
      </div>
        <img
          src={collageImage}
          alt="Wedding Collage"
          className="wedding-collage-img"
        />
      </section>
    </>
  );
};

export default WeddingCollageSection;
