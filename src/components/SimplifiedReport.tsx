import Styles from 'components/SimplifiedReport.module.scss';
import { SimplifiedReport as SimplifiedReportModel } from 'models/SimplifiedReport';
import React from 'react';

interface SimplifiedReportProps {
  currentReport: SimplifiedReportModel;
}

export const SimplifiedReport = ({ currentReport }: SimplifiedReportProps) => (
  <article className={`card ${Styles.wrapper}`}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          alt="Test"
          src="https://bulma.io/images/placeholders/640x480.png"
        />
      </figure>
    </div>
    <div className={`card-content ${Styles.eventInfo}`}>
      <h3 className="subtitle is-6">{currentReport.eventLocationExtra}</h3>
      <h2 className="title is-5">{currentReport.eventLocation}</h2>
      <time dateTime={currentReport.eventTime}>
        {new Date(currentReport.eventTime).toLocaleString()}
      </time>
      <p className="sReport__eventDescription">
        {currentReport.eventDescription}
      </p>
      <div className="sReport__vehicleInfo">
        <span className="tag is-light is-primary">
          {currentReport.vehicleBrand}
        </span>
        <span className="tag is-light is-info">
          {currentReport.vehicleModel}
        </span>
        <span className="tag is-light">{currentReport.vehicleColor}</span>
      </div>
    </div>
  </article>
);
