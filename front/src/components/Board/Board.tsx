import React from "react";
import { Link } from "react-router-dom";
import meme_img from "../../assets/jerry_meme.jpg";
import Meme from "../Memes/Meme";
import { IMeme } from '../../types/meme'

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
  const [memes, setMemes] = React.useState<IMeme[]>([]) as any;

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/memes/")
      .then(response => response.json())
      .then(memes => setMemes(memes))
  }, [])

  return (
    <section className="board">
      {memes.map((meme, index) => (
        <div className="board-meme">
          <Meme key={index} {...meme} />
        </div>
      ))}
    </section>
  );
};

export default Board;
