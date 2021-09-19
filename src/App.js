import "./App.css";
import { useState, useEffect } from "react";
import Items from "./items";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Jumbotorn></Jumbotorn>
      <ConfusingSection></ConfusingSection>
      <Footer></Footer>
    </div>
  );
}

// topbar-
const Topbar = () => {
  return (
    <header className="topbar">
      <nav className="mantain-width row">
        <p className="simple-text">Hey, How are ypu doing?🙂</p>
        <div>
          <button className="btn">Sign in</button>
        </div>
      </nav>
    </header>
  );
};

// jumbotorn-
const Jumbotorn = () => {
  return (
    <section className="jumbotorn-section">
      <div className="mantain-width">
        <h1>
          Exclusive React Workshop <br />
          for begginers
        </h1>
        <p>
          Once in a year opportunity to learn and build your{" "}
          <a href="#">first react app</a>
        </p>
        <button className="btn">Learn More</button>
      </div>
    </section>
  );
};

// confusing-section-title
const ConfusingSectionTitle = () => {
  return (
    <div className="confusing-title">
      <h2 style={{ marginBottom: "0px", paddingTop: "15px" }}>
        JS Confusing Parts
      </h2>
      <p>
        Understand this, scope, hoisting, closure, inheritance, bind, call,
        apply, prototype, event delegation, dom, timers{" "}
        <span>and many more caveats.</span>
      </p>
    </div>
  );
};

const ConfusingItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/abedinforhan/json-data/main/tutorials.json`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));

    /*     const url = `https://raw.githubusercontent.com/abedinforhan/json-data/main/tutorials.json`;
    const res = await fetch(url);
    const data = await res.json();
    setItems(data); */
    // setItems(Items);
  }, []);
  // setItems(<Items></Items>);

  return (
    <div className="items-field">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <button className="btn">View Details</button>
        </div>
      ))}
    </div>
  );
};

const ConfusingSection = () => {
  return (
    <section className="mantain-width confusing-section">
      <div className="row">
        <div>
          <ConfusingSectionTitle></ConfusingSectionTitle>
          <ConfusingItems></ConfusingItems>
        </div>
        <PersonalTrainingComponent></PersonalTrainingComponent>
      </div>
    </section>
  );
};
const PersonalTraining = () => {
  return (
    <div>
      <h2>Personal Training for $30</h2>
      <p>
        If you need career guide, personal interview tips, mock interview, Life
        Coaching, or anything else, you can book me for 30 min. Just pay $30 via
        paypal to <a href="#">Codinism (my company)</a> and then book a time
        slot <a href="#">You can Book me</a>
      </p>
    </div>
  );
};

// personal training section-
const PersonalTrainingComponent = () => {
  return (
    <div className="widget-section">
      <PersonalTraining></PersonalTraining>
      <RecentVideos></RecentVideos>
      <RecentTalks></RecentTalks>
      <Invite></Invite>
    </div>
  );
};

const RecentVideos = () => {
  return (
    <div>
      <h1>Recent Videos</h1>
      <ul>
        <li>15+ tricks for dev tool</li>
        <li>Understanding this</li>
        <li>be expert in JS Array</li>
        <li>How Browsers works in 4 min</li>
      </ul>
      <button className="btn2">More on youtube</button>
    </div>
  );
};

// Recent Talks-
const RecentTalks = () => {
  return (
    <div>
      <h1>Recent Talks</h1>
      <ul>
        <li>
          <a href="#">Functional Programming: What, Why and How</a>
        </li>
        <li>
          <a href="#">JavaScript Code Quality</a>
        </li>
        <li>
          <a href="#">Angular JS for Absolute Beginners</a>
        </li>
        <li>
          <a href="#">Getting started with React JS</a>
        </li>
        <li>
          <a href="#">High Perf JS</a>
        </li>
        <li>
          <a href="#">Are you sure, you know JavaScripts</a>
        </li>
        <li>
          <a href="#">High Performance JS and CSS</a>
        </li>
        <li>
          <a href="#">What's New in ES6</a>
        </li>
        <li>
          <a href="#">Make Web Faster</a>
        </li>
      </ul>
      <button className="btn2">Speaker profile</button>
    </div>
  );
};
// Invite section-
const Invite = () => {
  return (
    <div>
      <h1>Invite to a talk</h1>
      <p>
        if you want to invite that js dude in any of your meetup, conference or
        hangout, send email to <a href="#">khan@gmail.com</a>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className="mantain-width"
      style={{ padding: "20px 0px", textAlign: "center" }}
    >
      <hr />
      <p>© thatJSDude 2021, a codinism initiative.</p>
      <p>Hosted by No-one🙃</p>
    </footer>
  );
};

export default App;
