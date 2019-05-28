import React from 'react';
import s from './RouteGenerator.module.css';

const RouteGenerator = () => {
  return (
      <div className={s.block}>
          <div className={s.difficulties}>
              <button>Easy</button>
              <button>Hard</button>
          </div>
          <div>
              <p>Your route is from here to here</p>
          </div>
          <div className={s.map}>
                <p>Map</p>
          </div>
      </div>
  )
};

export default RouteGenerator;