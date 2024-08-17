import SectionName from "../reusables/SectionName";
import image1 from "../../../../images/optimized/home/slide-1.jpg";
import image2 from "../../../../images/optimized/home/slide-2.jpg";
import image3 from "../../../../images/optimized/home/slide-3.jpg";
import { homepageURL } from "../../../../lib/data";
import { useEffect, useRef, useState } from "react";
import TrackRecord from "../reusables/TrackRecord";

export default function Benefits() {
  const [option, setOption] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    timer.current =
      !pause &&
      setTimeout(() => {
        if (option < 2) {
          setOption(option + 1);
        } else {
          setOption(0);
        }
      }, 8000);
  }, [option, pause]);

  function changeOption(index) {
    setOption(index);
  }

  function pauseOption() {
    setPause(true);
    clearTimeout(timer.current);
  }

  function continueOption() {
    setPause(false);
  }

  const optionGroup = [
    "Build and create with AI",
    "Five minutes analysis",
    "Measure growth impact",
  ];

  const image = [image1, image2, image3];
  return (
    <section>
      <SectionName title="BENEFITS" />
      <h2>Drive results 5x faster by meeting people where they are</h2>
      <div
        style={{ backgroundImage: `url(${image[option]})` }}
        onMouseLeave={continueOption}
        onTouchEnd={continueOption}
        onMouseOver={pauseOption}
        onTouchStart={pauseOption}
      >
        <div>
          <div>
            <button
              className={option === 0 ? "active" : null}
              onClick={() => {
                changeOption(0);
                pauseOption();
              }}
            >
              Build with AI
            </button>
            <span>|</span>
            <button
              className={option === 1 ? "active" : null}
              onClick={() => {
                changeOption(1);
                pauseOption();
              }}
            >
              Five minutes a day
            </button>
            <span>|</span>
            <button
              className={option === 2 ? "active" : null}
              onClick={() => {
                changeOption(2);
                pauseOption();
              }}
            >
              Measure Impact
            </button>
          </div>
          <div>
            <button
              className={option === 0 ? "active" : null}
              onClick={() => {
                changeOption(0);
                pauseOption();
              }}
            ></button>
            <span>|</span>
            <button
              className={option === 1 ? "active" : null}
              onClick={() => {
                changeOption(1);
                pauseOption();
              }}
            ></button>
            <span>|</span>
            <button
              className={option === 2 ? "active" : null}
              onClick={() => {
                changeOption(2);
                pauseOption();
              }}
            ></button>
          </div>
        </div>
        <h2>{optionGroup[option]}</h2>
        <p>Instantly turn collateral into research-driven experiences</p>
        <a href={homepageURL + "try-ai"}>Try the AI</a>
      </div>
      <div>
        <TrackRecord
          figure="92"
          symbol="%"
          statement="of employees prefer Arist"
        />
        <TrackRecord figure="+30" symbol="%" statement="confidence lift" />
        <TrackRecord figure="500" symbol="k" statement="employees trained" />
        <TrackRecord figure=">90" symbol="%" statement="satisfaction rates" />
      </div>
    </section>
  );
}
