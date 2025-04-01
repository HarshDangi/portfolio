import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
import {Arrow} from "../buttons/Arrow/Arrow";

const GetDescBullets = ({descBullets, isDark}) => {
  return descBullets
    ? descBullets.map((item, i) => (
        <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
          {item}
        </li>
      ))
    : null;
};

const Skills = ({skills}) => {
  if (!skills || skills.length === 0) {
    return;
  }

  return <p>Skills: {skills.join(", ")}</p>;
};

function rgb(values) {
  return typeof values === "undefined"
    ? null
    : "rgb(" + values.join(", ") + ")";
}

function rgba(values, darkness = 0) {
  if (typeof values === "undefined") {
    return null;
  }
  const rgbaValues = [...values, darkness];
  return "rgba(" + rgbaValues.join(", ") + ")";
}

function ExperienceCardFront({
  cardInfo,
  isDark,
  colorArrays,
  getColorArrays,
  imgRef,
  onClick
}) {
  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <a
        href="/"
        style={{
          position: "absolute",
          right: "0.4rem",
          top: "0.4rem",
          zIndex: 1,
          float: "right",
          color: "white"
        }}
        onClick={onClick}
      >
        <Arrow
          dirc="right"
          style={{
            color: rgba(
              colorArrays?.length ? colorArrays : [255, 255, 255],
              colorArrays?.length ? 0.9 : 0.4
            )
          }}
        />
      </a>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          style={{
            background: isDark ? "black" : "white",
            ...cardInfo.logoStyle
          }}
          onLoad={() => colorArrays.length === 0 && getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
      </div>
      <div className="experience-skills-details">
        <hr />
        <Skills skills={cardInfo.skills} />
      </div>
    </div>
  );
}

function ExperienceCardBack({
  cardInfo,
  isDark,
  colorArrays,
  getColorArrays,
  imgRef,
  onClick
}) {
  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      {/* <div style={{background: rgb(colorArrays)}} className="experience-banner-back">
        <a href="/" style={{position: "absolute", left: "84%", top: "4%", zIndex: 1}} onClick={onClick}>
          <Arrow dirc="left" style={{color: rgba(colorArrays?.length ? colorArrays : [255,255,255], colorArrays?.length ? 0.9 : 0.4)}}/>
        </a>
        <div className="experience-blurred_div-back"></div>
        <div className="experience-div-company-back">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

      </div> */}
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <a
          href="/"
          style={{
            position: "absolute",
            right: "0.4rem",
            top: "0.4rem",
            zIndex: 1,
            color: "white"
          }}
          onClick={onClick}
        >
          <Arrow
            dirc="left"
            style={{
              color: rgba(
                colorArrays?.length ? colorArrays : [255, 255, 255],
                colorArrays?.length ? 0.9 : 0.4
              )
            }}
          />
        </a>
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          style={{
            background: isDark ? "black" : "white",
            ...cardInfo.logoStyle
          }}
          onLoad={() => colorArrays.length === 0 && getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isInverted, setInverted] = useState(false);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    const imr = imgRef.current;
    try {
      setColorArrays(colorThief.getColor(imr));
    } catch (e) {}
  }

  const invertButtonOnClick = e => {
    e.preventDefault();
    setInverted(!isInverted);
  };
  if (isInverted) {
    return (
      <ExperienceCardBack
        cardInfo={cardInfo}
        isDark={isDark}
        colorArrays={colorArrays}
        getColorArrays={getColorArrays}
        imgRef={imgRef}
        onClick={invertButtonOnClick}
      />
    );
  }
  return (
    <ExperienceCardFront
      cardInfo={cardInfo}
      isDark={isDark}
      colorArrays={colorArrays}
      getColorArrays={getColorArrays}
      imgRef={imgRef}
      onClick={invertButtonOnClick}
    />
  );
}
