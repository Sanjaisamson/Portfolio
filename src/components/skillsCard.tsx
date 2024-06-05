import React from 'react';

interface CardProps {
  name: string;
  logo: string;
}

const Card: React.FC<CardProps> = ({ name, logo}) => {
  
  return (
    <div className="progress-chart-container">
            <div className="progress-chart-card css">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  <div className="progress-chart-num">
                  <img src={logo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">{name}</h2>
              </div>
            </div>
    </div>
  );
};

export default Card;