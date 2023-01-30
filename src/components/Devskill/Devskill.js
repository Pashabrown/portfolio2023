import React, { useState } from "react";
// import "./styles.css";

export default function App() {
  //
  const [state, setState] = useState({
    skills: [{  }],
    newSkill: { skill: "", level: "3" }
  });

  function addSkill(e) {
    e.preventDefault()
    setState((prevState) => ({
      skills: [...prevState.skills, state.newSkill],
      newSkill: { skill: "", level: "3" }
    }));
  }

  function handleChange(e) {
    /* 
      the setter function 
      allows us to access previous state 
      and override it with new values 
    */
    console.log("The name of the input is:", e.target.name);

    //   setState((prevState) => {
    //     console.log("prevState", {...prevState});
    //     console.log("prevState.newSkill", prevState.newSkill);

    //     return {
    //       ...prevState,
    //       newSkill: {
    //         ...prevState.newSkill,
    //         [e.target.name]: e.target.value
    //       }
    //     };
    //   });
    // }

    setState((prevState) => ({
      ...prevState,
      newSkill: {
        ...prevState.newSkill,
        [e.target.name]: e.target.value
      }
    }));
  }

  return (
          <section>
            <div className="skillstyle"></div>
            
            {state.skills.map((s) => (
              <article key={s.skill}>
                <div>{s.skill}</div> <div>{s.level}</div>
              </article>
            ))}
            {/* <hr /> */}
      <form onSubmit={addSkill}>
        <label>
          <span></span>
          <select
            name="skill"
            value={state.newSkill.skill}
            onChange={handleChange}
            >
            <option title="Required SKILL"><b>Required SKILL</b></option>
            <option value="Go">Go</option>
            <option value="Ruby">Ruby</option>
            <option value="Python">Python</option> 
            <option value="Javascript">Javascript</option>
            <option value="React">React</option> 
          </select>
        </label>
        <label>
          <span className="skillstyle">LEVEL</span>
          <select
            name="level"
            value={state.newSkill.level}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button className="buttonstyle1">ADD SKILL</button>
      </form>
    </section>
  );
}
