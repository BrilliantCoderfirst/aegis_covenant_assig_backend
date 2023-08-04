import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ keyName, value }) => {
  return (
    <>
      <div className="card-hover">
        <div className="card-hover__content">
          <h3 className="card-hover__title">
            {keyName} <br />
            <span>{value}</span> Rs
          </h3>
          <p className="card-hover__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            quisquam doloremque nostrum laboriosam, blanditiis libero corporis
            nulla a aut?
          </p>
          <a href="#" className="card-hover__link">
            <span style={{ paddingRight: "15px" }}>Use Coupen</span>
            <span className="arrowIcon">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
        <div className="card-hover__extra">
          <h4>
            Use Coupen <span>now</span> and get <span>40%</span> discount!
          </h4>
        </div>
        <img
          src="https://media.istockphoto.com/id/816320540/photo/airplane-and-road-with-motion-blur-effect-at-sunset-landscape-with-passenger-airplane-is.jpg?s=170667a&w=0&k=20&c=Z8RUwgHDsWsyJqbksrOulYqHJDi3fMRDtW8T2W0ccGc="
          alt=""
        />
      </div>
    </>
  );
};

export default Card;
