import { useState } from "react";
import Header from "./Header";
function StartScreen({ numQuestions, dispatch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "start", payload: { name, email } });
  }
  return (
    <div className="start">
      <Header />
      <h2>Mathematical Talent Exam</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="beginform">
        <div className="forminput">
          <h4>Name:</h4>
          <input
            className="btn"
            type="text"
            placeholder="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="forminput">
          <h4>Email:</h4>
          <input
            className="btn"
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <h3 className="instructions-heading">Instructions:</h3>
        <ul>
          <li>
            <h5>
              Use the same Email ID that was used to register for the event,
              once entered it cannot be changed.
            </h5>
          </li>
          <li>
            <h5>You will have 30 mins to attempt the entire quiz.</h5>
          </li>
          <li>
            <h5>There will be 5 sections, with 6 question each.</h5>
          </li>
          <li>
            <h5>
              Every correctly answered question awards 1 point. There is no
              negative marking.
            </h5>
          </li>
          <li>
            <h5>
              Navigation between questions is disabled. Answer the questions as
              you come across them.
            </h5>
          </li>
          <li>
            <h5>
              Once all questions are attempted or the time runs out, the quiz
              will submit automatically.
            </h5>
          </li>
        </ul>
        <button
          type="submit"
          className="btn  "
          // onClick={() => dispatch({ type: "start" })}
        >
          Let's Start
        </button>
      </form>
    </div>
  );
}

export default StartScreen;
