import React, { useState } from "react";
import FlipCard from "@app/components/Study/components/Card/FlipCard";

export default function FlipCardDemo({ activeTheme }) {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      id: 1,
      front: "Bonjour",
      back: "Hello",
    },
    {
      id: 2,
      front: "猫",
      back: "Cat",
    },
    {
      id: 3,
      front: "水",
      back: "Water",
    },
  ];

  return (
    <div className="w-full h-full">
      <FlipCard
        key={cards[index].id}
        card={cards[index]}
        activeTheme={activeTheme}
        displayState="quiz"
        allowRating={false}
        variant="demo"
        onPassComplete={() => setIndex((i) => (i + 1) % cards.length)}
      />
    </div>
  );
}
