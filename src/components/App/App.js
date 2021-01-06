import "./App.css";
import React, { useState } from "react";
import Login from "../Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState();

  const handleSubmit = (password) => {
    setToken(password);
  };

  // if (!token || token.value !== "growth") {
  //   return <Login handleSubmit={handleSubmit} />;
  // }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <div className="wrapper">
        <header>
          <h1>We Are The Guerilla Gardeners</h1>
        </header>
        <nav>
          <li>
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Join</h4>
            <h4>Contact</h4>
          </li>
        </nav>
        <body>
          <article>
            <h2>Hi there.</h2>

            <p>
              If you’ve made it into this website, we salute you! You’re a plant
              lover, just like us.
            </p>

            <p>Who are we? Well we’re not ghosts! We’re just regular people.</p>

            <p>
              We’re doctors. We’re security guards. We’re taxi drivers. We’re
              lawyers. We’re teachers. We’re students. We’re football players.
              We’re anyone and everyone who loves to plant seeds. In this way,
              we spread the beauty and diversity of flowers, shrubs, grasses or
              trees in all sorts of places all over our city.
            </p>

            <p>
              We plant things at night, in our time, in our own gardens and
              homes.
            </p>

            <p>We plant things across the whole city.</p>

            <p>We love to have nature close to us.</p>

            <p>
              Sometimes we meet up in person at certain locations—never the same
              place twice, never all of us at once either.
            </p>

            <p>
              When we meet, we say hello to all the new plants we’ve put into
              the earth, and goodbye to those plants that may not have made it.
              (And then we sit around and eat corn chips and guacamole!)
            </p>

            <p>
              You might have read what the news has been saying about us.
              Incredible! They’ve called us ghosts! That’s because sometimes we
              wear white and sometimes we move fast. (We literally do have
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
            <ul>Be kind to each other and be kind to the world we live in!</ul>
          </article>
          <div className="asideWrapper">
            <aside>
              <h4>Why I love the golden wattle</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </aside>
            <aside>
              <h4>The Mysteries of the Wollemi Pine</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </aside>
            <aside className="pageReference">
              <h4>Turn to page XXX</h4>
            </aside>
          </div>
        </body>
        <footer>
          <h4>
            "Our work is not yet done" - Anonymous Guerilla Gardener, 2021
          </h4>
        </footer>
      </div>
    </>
  );
}

export default App;
