import "./Skills.css";
const Skills = ({ SkillsData }) => {
  return (
    <>
              <div className="title">
                <h2>
                  <span>T</span>echnical <span>S</span>kills
                </h2>
              </div>
      {SkillsData.map((value, index) => {
        return (
          <>
            <div className="skills-container" key={index}>
              <div className="box">
                <div className="icons">
                  <span id={value.id}>{value.icon}</span>
                </div>
                <div className="progress-box">
                  <div
                    className="progress-bar"
                    style={{ width: `${value.level}` }}
                  ></div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Skills;
