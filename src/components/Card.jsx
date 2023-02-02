import React from "react";
import marcus from "../images/marcus.jpg";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "../scss/card.scss";

const Card = () => {
  return (
    <div className="accommodation">
      <div className="card-body">
        <h3>Accommodation in Marseille</h3>
        <div className="card-right">
          <div className="card-inner">
            <img
              className="card-img-r"
              src={marcus}
              width="200"
              alt="Marseille"
            />
            <div className="card-accomodation">
              <div className="card-title-r">
                <b>Auberge la Cannebière</b>
              </div>
              <div className="card-text-r">Night starting at 25 £</div>
              <div className="card-stars">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
          <div className="card-inner">
            <img
              className="card-img-r"
              src={marcus}
              width="200"
              alt="Marseille"
            />
            <div className="card-title-r">Auberge la Cannebière</div>
            <div className="card-text-r">Night starting at 25 £</div>
            <div className="card-stars">
              <FaMapMarkerAlt />
            </div>
          </div>
          <div className="card-inner">
            <img
              className="card-img-r"
              src={marcus}
              width="200"
              alt="Marseille"
            />
            <div className="card-title-r">Auberge la Cannebière</div>
            <div className="card-text-r">Night starting at 25 £</div>
            <div className="card-stars">
              <FaMapMarkerAlt />
            </div>
          </div>
        </div>

        <div className="card-right-b">
          <div className="card-inner">
            <img
              className="card-img-r"
              src={marcus}
              width="200"
              alt="Marseille"
            />
            <div className="card-title-r">Auberge la Cannebière</div>
            <div className="card-text-r">Night starting at 25 £</div>
            <div className="card-stars">
              <FaMapMarkerAlt />
            </div>
          </div>
          <div className="card-inner">
            <img
              className="card-img-r"
              src={marcus}
              width="200"
              alt="Marseille"
            />
            <div className="card-title-r">Auberge la Cannebière</div>
            <div className="card-text-r">Night starting at 25 £</div>
            <div className="card-stars">
              <FaMapMarkerAlt />
            </div>
          </div>
          <div className="card-inner">
            <img className="card-img-r" src={marcus} alt="Marseille" />
            <div className="card-title-r">Auberge la Cannebière</div>
            <div className="card-text-r">Night starting at 25 £</div>
            <div className="card-stars">
              <FaMapMarkerAlt />
            </div>
            {/* Responsive CSS Grid Layout in React */}
          </div>
        </div>
        <h3>Show more</h3>
      </div>

      <div className="card-popular">
        <h3>Most Popular</h3>
        <div className="mostpopular-body">
          <div className="mostpopular-inner">
            <img className="card-img-popular" src={marcus} alt="Marseille" />
            <div className="popular-items">
              <div className="card-title-popular">
                <b>Auberge la Cannebière</b>
              </div>
              <div className="card-text-popular">Night starting at 25 £</div>
              <div className="card-stars-popular">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
          <div className="mostpopular-inner">
            <img className="card-img-popular" src={marcus} alt="Marseille" />
            <div className="popular-items">
              <div className="card-title-popular">Auberge la Cannebière</div>
              <div className="card-text-popular">Night starting at 25 £</div>
              <div className="card-stars-popular">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
          <div className="mostpopular-inner">
            <img className="card-img-popular" src={marcus} alt="Marseille" />
            <div className="popular-items">
              <div className="card-title-popular">Auberge la Cannebière</div>
              <div className="card-text-popular">Night starting at 25 £</div>
              <div className="card-stars-popular">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
