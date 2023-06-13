import React from "react";

export default function Home() {
  return (
    <div id="home">
      <div id="cover-image">
        <img id="staff" src="/assets/placeholder_staff.jpg" alt="Staff" />
      </div>
      <div className="home-bottom">
        <div id="cert" className="home-div">
          <div className="home-text">
            Building on a solid foundation for over 50 years, our structural
            steel fabrication company combines expertise, craftsmanship, and
            innovation to bring your vision to life. With a legacy of
            excellence, we deliver exceptional solutions that stand tall,
            ensuring strength, durability, and precision in every project we
            undertake. Trust our experience to shape your success.
          </div>
          <div>
            <img className="home-img" src="/assets/placeholder_img.jpg" />
          </div>
        </div>

        <div className="home-div">
          <div>
            <img className="home-img" src="/assets/placeholder_img.jpg" />
          </div>
          <div className="home-text">
            As a leading provider of steel erection services, we pride ourselves
            on our ability to safely and efficiently handle complex steel
            structures. Our experienced team possesses the expertise to execute
            projects of any scale, from commercial buildings to industrial
            facilities. With meticulous planning, adherence to industry
            standards, and a focus on client satisfaction, we bring your vision
            to life.
          </div>
        </div>

        <div className="home-div">
        <div className="home-text">
          We offer a wide range of steel surface treatment solutions to enhance
          the durability and aesthetics of your steel products. Our advanced
          coatings, including galvanizing and powder coating, provide
          exceptional protection against corrosion and wear. With our attention
          to detail and commitment to quality, we ensure your steel components
          have a long-lasting finish that exceeds expectations
        </div>
        <div>
            <img className="home-img" src="/assets/placeholder_img.jpg" />
        </div>
        </div>
      </div>
    </div>
  );
}
