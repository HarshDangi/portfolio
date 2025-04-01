import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {Arrow} from "../../components/buttons/Arrow/Arrow";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

function openUrlInNewTab(url) {
  if (!url) {
    return;
  }
  var win = window.open(url, "_blank");
  win.focus();
}

function rgba(values, darkness = 0) {
  if (typeof values === "undefined") {
    return null;
  }
  const rgbaValues = [...values, darkness];
  return "rgba(" + rgbaValues.join(", ") + ")";
}
function ProjectFront({project, onClick = () => {}}) {
  const {isDark} = useContext(StyleContext);

  return (
    <div
      className={
        isDark
          ? "dark-mode project-card project-card-dark"
          : "project-card project-card-light"
      }
      style={{position: "relative"}}
    >
      {project.back ? (
        <a
          href="/"
          style={{
            position: "absolute",
            right: "0.4rem",
            top: "0.4rem",
            zIndex: 1,
            color: isDark ? "white" : "black"
          }}
          onClick={onClick}
        >
          <Arrow
            dirc="right"
            style={{
              color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.2)"
            }}
            transisitionColor={isDark ? "white" : "black"}
          />
        </a>
      ) : null}
      {project.image ? (
        <div className="project-image">
          {project.image.src ? (
            <img
              src={project.image.src}
              alt={project.projectName}
              style={project.image.style}
            ></img>
          ) : (
            <div style={project.image.style}>
              <DisplayLottie animationData={project.image.lottie} />
            </div>
          )}
        </div>
      ) : null}
      <div className="project-detail">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {project.projectName}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {project.projectDesc}
        </p>
        {project.footerLink ? (
          <div className="project-card-footer">
            {project.footerLink.map((link, i) => {
              return (
                <span
                  key={i}
                  className={isDark ? "dark-mode project-tag" : "project-tag"}
                  onClick={() => openUrlInNewTab(link.url)}
                >
                  {link.name}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ProjectBack({project, onClick = () => {}}) {
  const {isDark} = useContext(StyleContext);

  return (
    <div
      className={
        isDark
          ? "dark-mode project-card project-card-dark"
          : "project-card project-card-light"
      }
      style={{position: "relative"}}
    >
      <a
        href="/"
        style={{
          position: "absolute",
          right: "0.4rem",
          top: "0.4rem",
          zIndex: 1
        }}
        onClick={onClick}
      >
        <Arrow
          dirc="left"
          style={{color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.7)"}}
          transisitionColor={isDark ? "white" : "black"}
        />
      </a>

      <div className="project-detail">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {project.projectName}
        </h5>
        <hr></hr>
        <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
          {project.heading}
        </h3>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {project.content}
        </p>
        {project.footerLink ? (
          <div className="project-card-footer">
            {project.footerLink.map((link, i) => {
              return (
                <span
                  key={i}
                  className={isDark ? "dark-mode project-tag" : "project-tag"}
                  onClick={() => openUrlInNewTab(link.url)}
                >
                  {link.name}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Project({project}) {
  const [isInverted, setInverted] = useState(false);
  const invertButtonOnClick = e => {
    e.preventDefault();
    setInverted(!isInverted);
  };
  return isInverted ? (
    <ProjectBack
      project={{...project.back, projectName: project.projectName}}
      onClick={invertButtonOnClick}
    />
  ) : (
    <ProjectFront project={project} onClick={invertButtonOnClick} />
  );
}

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          {bigProjects.subtitle ? (
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>
          ) : null}

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return <Project project={project} key={i} />;
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
