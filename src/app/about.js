'use client'
export default function About() {
    return (
        <section className="w-full mt-32 pt-10" id="about">
            <div className="w-full flex justify-center items-center delay-[150ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="300">
                <div className="w-4/5 ">
                    <h2 className="text-color-green font-semibold text-3xl" >About</h2>
                    <div className="flex flex-col sm:flex-row">
                        <hr className="w-1/4 h-1 bg-color-light-green mt-2 sm:mt-7 sm:me-5"></hr>
                        <p className="text-color-green mt-5">
                            Highly motivated Software Developer especially for Web-based
                            Applications. Possessing a strong skill set in HTML, CSS, JavaScript,
                            PHP, MySQL, PostgreSQL, and Docker. <span className="text-color-light-green font-bold">Logical and confident in my
                            problem-solving abilities</span>, while recognizing my limitations in UI/UX
                            design. Nevertheless, I have a strong desire to make the frontend
                            user-friendly and aesthetically pleasing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
