import React from "react";
import meme_pic from "../../assets/jerry_meme.jpg";

interface IMeme {
  id: number;
  name: string;
  description: string;
  owner: number;
  tags: string;
}

const Meme: React.FC<IMeme> = props => {
  return (
    <section>
      <h2 className="meme-title">{props.name}</h2>
      <span className="meme-buttons-align">
        <button className="meme-button">&lt; Prev</button>
        <button className="meme-button">Random</button>
        <button className="meme-button">Next &gt;</button>
      </span>
      <img className="meme-image" src={meme_pic} alt="meeeme" />
      <p>description: {props.description}</p>
      <p>tags: {props.tags}</p>
    </section>
  );
};

export default Meme;
