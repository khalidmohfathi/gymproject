import React from "react";

export default function SliderItem({ items, number }) {
  return (
    <div className="row">
      {items.map((item, i) => {
        return (
          <div key={i} className={`col-${number}`}>
            <div className="slider-inner rounded-4">
              <img src={item.imgSrc} className="w-100 rounded-top-4" alt={item.name} />
              <div className="bg-grey py-2 px-2.5 rounded-bottom-4">
                <h4 className="text-white fw-bold ">{item.name}</h4>
                <p className="text-light-grey fw-medium">{item.role}</p>
                <a className="text-white d-flex align-items-center gap-2 text-decoration-none position-relative">
                  <span className="link-spotlight"></span>
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right-long text-red"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
