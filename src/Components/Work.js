import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et",
    },
    {
      image: DeliveryMeals,
      title: "Fast Delivery",
      text: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
    },
  ];
  return (
    <div className="Work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheadding">Work</p>
        <h1 className="primary-text"> How it works </h1>
        <p className="primary-text">
        The easiest way to order is to install the our app.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data)=>(<div className="work-section-info">
            <div className="infor-boxes-img-container">
                <img src={data.image} alt="" />
                </div>
                <h2> {data.title}</h2>
                <p>{data.text}</p>
        </div>))}
      </div>
    </div>
  );
};

export default Work;
