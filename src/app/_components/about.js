"use client";
export default function About() {
  return (
    <section className="w-full py-20 bg-card" id="about">
      <div
        className="w-full flex justify-center items-center delay-[150ms] duration-[300ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0 [animation-iteration-count:infinite]"
        data-taos-offset="0"
      >
        <div className="w-4/5 ">
          <h2 className="text-3xl font-semibold text-center text-textMain">
            About Me
          </h2>
          <div className="flex flex-col sm:flex-row">
            {/* <hr className="w-1/4 h-1 mt-2 bg-color-light-green sm:mt-7 sm:me-5"></hr> */}
            <p className="mt-5 text-center text-textMain">
              Highly motivated Software Developer especially for Web-based
              Applications. Possessing a strong skill set in{" "}
              <span className="font-bold text-secondary">
                HTML, CSS, JavaScript, PHP, MySQL, PostgreSQL, and Docker
              </span>
              . Logical and confident in my
              <span className="font-bold text-secondary">
                {" "}
                problem-solving abilities
              </span>
              , while recognizing my limitations in UI/UX design. Nevertheless,
              I have a strong desire to make the frontend user-friendly and
              aesthetically pleasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
