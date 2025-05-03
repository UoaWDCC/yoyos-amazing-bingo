import { Pill } from "../pill";

const Credits = () => {
  return (
    <div className="aspect relative flex w-full max-w-[600px] flex-col items-center space-y-4 overflow-hidden rounded-xl bg-white py-8">
      <Pill>Credits</Pill>
      <p className="px-8 text-center">
        This game was made possible thanks to the contributions of these
        incredible people despite the project&apos;s tight timeline!
      </p>
      <hr className="border-pill w-full" />
      <div className="grid grid-cols-2 gap-8 overflow-y-scroll px-2 *:flex *:flex-col [&_h3]:font-bold [&_li]:flex [&_li]:flex-col [&_li]:gap-6">
        <li>
          <ul>
            <h3>Tech Director</h3>
            <p>Nate Williamson</p>
          </ul>
          <ul>
            <h3>Development Team</h3>
            <p>Nate Williamson</p>
            <p>David Zhu</p>
            <p>Chanasit Jitsawatpaiboon</p>
            <p>Owen Li</p>
            <p>Kotaro Yumiba</p>
            <p>Kevin Cheung</p>
            <p>Jerry Nguyen</p>
            <p>Andrew Qiu</p>
            <p>Anton Garay</p>
          </ul>
          <ul>
            <h3>Webster Director</h3>
            <p>Abbey Martinez</p>
          </ul>
          <ul>
            <h3>Design Committee</h3>
            <p>Andrew Qiu</p>
            <p>Yoyo Chen</p>
            <p>Chanasit Jitsawatpaiboon</p>
            <p>Deiza Talreja</p>
          </ul>
        </li>
        <li>
          <ul>
            <h3>Yoyo Director</h3>
            <p>Yoyo Chen</p>
          </ul>
          <ul>
            <h3>Projects Director</h3>
            <p>Jason Huang</p>
          </ul>
          <ul>
            <h3>Projects Team</h3>
            <p>Jos Badenas</p>
            <p>Seth Yoo</p>
            <p>Subeen Ban</p>
            <p>Nicholas Wilson</p>
          </ul>
          <ul>
            <h3>WDCC</h3>
            <p>Chris Valenzuela</p>
            <p>Kimberley Zhu</p>
          </ul>
          <ul>
            <h3>Extra thanks to</h3>
            <p>David Zhu</p>
            <p>Owen Li</p>
            <p>Jerry Nguyen</p>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Credits;
