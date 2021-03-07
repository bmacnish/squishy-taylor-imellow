import "./App.css";
import React, { useState } from "react";
import Login from "../Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import goldenWattle from "../../media/yellow_wattle.jpg";
import wollemi from "../../media/wollemi-pine.jpg";
import Image from "react-bootstrap/Image";
import AudioPlayer from "../AudioPlayer/AudioPlayer"

const FAKE_PASSWORD = "waratah unveiled";

function App() {
  const [token, setToken] = useState();

  const handleSubmit = (password) => {
    setToken(password);
  };

  if (!token || token.value !== FAKE_PASSWORD) {
    return <Login handleSubmit={handleSubmit} />;
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <div className="backgroundImage">
        <div className="wrapper">
          <header>
            <h1>We Are The Guerrilla Gardeners</h1>
          </header>
          <nav class="d-none d-sm-block">
            <li>
              <h4>Home</h4>
              <h4>About Us</h4>
              <h4>Join</h4>
              <h4>Contact</h4>
            </li>
          </nav>
          <div className="body">
            <article>
              <h2>Hi there.</h2>

              <p>
                If you’ve made it into this website, we salute you! You’re a
                plant lover, just like us.
              </p>

              <p>
                Who are we? Well we’re not ghosts! We’re just regular people.
              </p>

              <p>
                We’re doctors. We’re security guards. We’re taxi drivers. We’re
                lawyers. We’re teachers. We’re students. We’re football players.
                We’re anyone and everyone who loves to plant seeds. In this way,
                we spread the beauty and diversity of flowers, shrubs, grasses
                or trees in all sorts of places all over our city.
              </p>

              <p>
                We plant things at night, in our time, in our own gardens and
                homes.
              </p>

              <p>We plant things across the whole city.</p>

              <p>We love to have nature close to us.</p>

              <p>
                Sometimes we meet up in person at certain locations—never the
                same place twice, never all of us at once either.
              </p>

              <p>
                When we meet, we say hello to all the new plants we’ve put into
                the earth, and goodbye to those plants that may not have made
                it. (And then we sit around and eat corn chips and guacamole!)
              </p>

              <p>
                You might have read what the news has been saying about us.
                Incredible! They’ve called us ghosts! That’s because sometimes
                we wear white and sometimes we move fast. (We literally do have
                football players among us!)
              </p>

              <p>Would you like to join us?</p>

              <p>It’s easy!</p>
              <h3>Our rules are:</h3>
              <ul>Plant seeds in your own time </ul>
              <ul>Plant seeds at night </ul>
              <ul>
                Come back to see your seeds sprouting and marvel in the
                magnificence of plant life!
              </ul>
              <ul>Don’t trespass or ruin other people’s things</ul>
              <ul>
                Be kind to each other and be kind to the world we live in!
              </ul>
              <div className="extraInformation">
                <div className="pageReference">
                  <h4>Turn to page 22</h4>
                </div>
                  <AudioPlayer />
              </div>
            </article>
            <div className="asideWrapper d-none d-sm-block">
              <aside>
                <h2>Member Contributions</h2>
              </aside>
              <aside>
                <h4>Why I Love the Golden Wattle</h4>
                <Image
                  src={goldenWattle}
                  alt="Close up of golden wattle flowers"
                  fluid
                />
                <p>
                  The flowers of the Golden Wattle have always reminded me
                  of the fluffy yellow chicken decorations you see at Easter 
                  time decorating eggs, bonnets and baskets!
                </p>
              </aside>
              <aside>
                <h4>The Mysteries of the Wollemi Pine</h4>
                <Image
                  src={wollemi}
                  alt="Close up of golden wattle flowers"
                  fluid
                />
                <p>
                  The story of the Wollemi Pine is one of a adventure, mystery
                  and the astonishing discovery of an ancient tree that
                  has grown since the time of the dinosaurs and yet managed to
                  stay hidden from science until just a few decades ago.
                </p>
              </aside>
            </div>
          </div>
          <footer>
            <h4>
              "Our work is not yet done" - Anonymous Guerrilla Gardener, 2021
            </h4>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
