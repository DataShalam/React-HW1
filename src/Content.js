import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <main className="content">
      <div className="content-box">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_QL75_UX190_CR0,0,190,281_.jpg"
          alt="Placeholder"
        />
        <div className="content-description">
          <h2 className="content-title">Iron Man</h2>
          <p>2008 &#8226; PG-13 &#8226; 2h 6m</p>
          <p>
            Tony Stark. Genius, billionaire, playboy, philanthropist. Son of
            legendary inventor and weapons contractor Howard Stark. When Tony
            Stark is assigned to give a weapons presentation to an Iraqi unit
            led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That
            ride ends badly when Stark's Humvee that he's riding in is attacked
            by enemy combatants. He survives - barely - with a chest full of
            shrapnel and a car battery attached to his heart.
          </p>
        </div>
      </div>

      <div className="content-box">
        <div className="content-description">
          <h2 className="content-title">Iron Man 2</h2>
          <p>2010 &#8226; PG-13 &#8226; 2h 4m</p>
          <p>
            With the world now aware of his dual life as the armored superhero
            Iron Man, billionaire inventor Tony Stark faces pressure from the
            government, the press, and the public to share his technology with
            the military. Unwilling to let go of his invention, Stark, along
            with Pepper Potts, and James "Rhodey" Rhodes at his side, must forge
            new alliances - and confront powerful enemies.
          </p>
        </div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_QL75_UY281_CR1,0,190,281_.jpg"
          alt="Placeholder"
        />
      </div>

      <div className="content-box">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg"
          alt="Placeholder"
        />
        <div className="content-description">
          <h2 className="content-title">Iron Man 3</h2>
          <p>2013 &#8226; PG-13 &#8226; 2h 10m</p>
          <p>
            Marvel's "Iron Man 3" pits brash-but-brilliant industrialist Tony
            Stark/Iron Man against an enemy whose reach knows no bounds. When
            Stark finds his personal world destroyed at his enemy's hands, he
            embarks on a harrowing quest to find those responsible. This
            journey, at every turn, will test his mettle. With his back against
            the wall, Stark is left to survive by his own devices, relying on
            his ingenuity and instincts to protect those closest to him.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Content;
