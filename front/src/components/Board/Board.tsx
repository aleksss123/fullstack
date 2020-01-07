import React from "react";
import { Link } from "react-router-dom";
import meme_img from "../../assets/jerry_meme.jpg";
import Meme from "../Memes/Meme";

const memesList = [
  {
    id: 1,
    name: "Jerry cringed",
    description: "nice meme lmao",
    tags: "animals",
    owner: 1
  },
  {
    id: 2,
    name: "Philosoraptor",
    description: "nice meme lmaoo",
    tags: "animals but bigger",
    owner: 1
  }
];

const Board: React.FC = () => {
  return (
    <section className="board">
      {memesList.map((meme, index) => (
        <Link to="/meme">
          <div className="board-meme">
            <Meme key={meme.id} {...meme} />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Board;
