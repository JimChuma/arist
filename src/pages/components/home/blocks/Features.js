import SectionName from "../reusables/SectionName";
import { homepageURL } from "../../../../lib/data";
import image from "../../../../images/optimized/home/img-1.jpg"

export default function Features() {
  return (
    <section>
      <SectionName title="FEATURES" />
      <h2>How it works</h2>
      <div>
        <div>
          <h2>A better way to train</h2>
          <p>
            Less time, more impact. Backed by Stanford research, Arist replaces
            legacy trainings with continuous enablement
          </p>
          <div>
            <SectionName title="No new apps" />
            <SectionName title="19% skill lift" />
            <SectionName title="1-click access to training" />
            <SectionName title="Frontline-compliant" />
          </div>
          <a href={homepageURL + "stanford-research"}>Read the research</a>
        </div>
        <div style={{backgroundImage: `url(${image})`}}></div>
      </div>
    </section>
  );
}
