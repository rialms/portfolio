import React from "react";
import "./AchievementCard.css";

function openUrlInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

export default function AchivementCard({ cardInfo, isDark }) {
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt="achievement"
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <p
              key={v.name}
              className={isDark ? "dark-mode" : null}
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
