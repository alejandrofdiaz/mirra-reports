import Styles from 'components/SimplifiedReport.module.scss';
import { YoutubeEmbed } from 'components/YoutubeEmbed';
import { Report as ReportModel } from 'models/Report';
import React from 'react';

import { StaticMap } from './StaticMap';

interface Props {
  currentReport: ReportModel;
}

export const Report = ({ currentReport }: Props) => (
  <article className={`card ${Styles.wrapper}`}>
    <div className="card-image">
      <figure className="image is-4by3">
        <StaticMap
          center={[currentReport.eventCoordinates]}
          markers={[currentReport.eventCoordinates]}
          size={{ height: 480, width: 640 }}
          zoom={14}
        />
      </figure>
    </div>
    <div className={`card-content ${Styles.eventInfo}`}>
      <h3 className="subtitle is-6">{currentReport.eventLocationExtra}</h3>
      <h2 className="title is-5">{currentReport.eventLocation}</h2>
      <time dateTime={currentReport.eventTime}>
        {new Date(currentReport.eventTime).toLocaleString()}
      </time>
      <p className="sReport__eventDescription is-size-6">
        {currentReport.eventDescription}
      </p>
      <div className="sReport__vehicleInfo">
        <h4 className="subtitle is-5">Datos del vehículo</h4>
        <span className="tag is-light is-primary">
          {currentReport.vehicleId}
        </span>
        <span className="tag is-light is-primary">
          {currentReport.vehicleBrand}
        </span>
        <span className="tag is-light is-info">
          {currentReport.vehicleModel}
        </span>
        <span className="tag is-light">{currentReport.vehicleColor}</span>
        <p className="sReport__vehicleInfoExtra subtitle is-6">
          {currentReport.vehicleExtra}
        </p>
        <p className="sReport__driverGender">
          Género del denunciado: {currentReport.driveGender}
        </p>
      </div>
    </div>

    <div className="sReport__media">
      <h4 className="subtitle is-5">Pruebas de la denuncia</h4>
      <YoutubeEmbed className="sReport__youtube" src={currentReport.videoUrl} />
      <div className="sReport__otherMedia">
        {!!currentReport.journeyUrl && (
          <a
            className="tag is-warning"
            href={currentReport.journeyUrl}
            target="__blank"
          >
            Viaje Realizado
          </a>
        )}
      </div>
    </div>
  </article>
);
