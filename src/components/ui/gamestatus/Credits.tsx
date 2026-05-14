import { Pill } from "../pill";

const Credits = () => {
  return (
    <div className="relative flex w-full max-w-[600px] flex-col items-center space-y-4 overflow-hidden rounded-xl bg-white py-8">
      <Pill>Credits</Pill>
      <hr className="border-pill w-full" />
      <div className="relative h-[450px] w-full overflow-hidden">
        <div className="credits-roll absolute w-full px-8 pt-12 text-center [&_h2]:mb-4 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:mb-1 [&_h3]:font-bold [&_section]:mb-6">
          <h2>2026</h2>

          <section>
            <h3>Tech Director</h3>
            <p>Koutaro Yumiba</p>
          </section>

          <section>
            <h3>Development Team</h3>
            <p>Henry Gao</p>
          </section>

          <section>
            <h3>Design Committee</h3>
            <p>Nakyung Lee</p>
          </section>

          <section>
            <h3>Projects Director</h3>
            <p>Eshana Kumar</p>
          </section>

          <section>
            <h3>Projects Team</h3>
            <p>Brandon Chan</p>
            <p>Kyle Rosser</p>
            <p>Matthew Qu</p>
            <p>Nancy Wei</p>
          </section>

          <section>
            <h3>WDCC</h3>
            <p>Chris Valenzuela</p>
            <p>Maternus Kuang</p>
          </section>

          <hr className="border-pill my-8 w-full" />

          <h2>2025</h2>
          <p className="mb-6 text-sm italic">
            Huge thanks to the 2025 team whose work laid the foundation for this
            game!
          </p>

          <section>
            <h3>Tech Director</h3>
            <p>Nate Williamson</p>
          </section>

          <section>
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
          </section>

          <section>
            <h3>Webster Director</h3>
            <p>Abbey Martinez</p>
          </section>

          <section>
            <h3>Design Committee</h3>
            <p>Andrew Qiu</p>
            <p>Yoyo Chen</p>
            <p>Chanasit Jitsawatpaiboon</p>
            <p>Deiza Talreja</p>
          </section>

          <section>
            <h3>Yoyo Director</h3>
            <p>Yoyo Chen</p>
          </section>

          <section>
            <h3>Projects Director</h3>
            <p>Jason Huang</p>
          </section>

          <section>
            <h3>Projects Team</h3>
            <p>Jos Badenas</p>
            <p>Seth Yoo</p>
            <p>Subeen Ban</p>
            <p>Nicholas Wilson</p>
          </section>

          <section>
            <h3>WDCC</h3>
            <p>Chris Valenzuela</p>
            <p>Kimberley Zhu</p>
          </section>

          <section>
            <h3>Extra thanks to</h3>
            <p>David Zhu</p>
            <p>Owen Li</p>
            <p>Jerry Nguyen</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Credits;
