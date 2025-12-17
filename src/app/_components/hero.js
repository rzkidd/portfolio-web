export default function Hero() {
  return (
    <div className="flex flex-col justify-center w-4/5 h-full text-textMain ">
      <h1 className="text-3xl">
        I&apos;m{" "}
        <span className="text-4xl font-bold text-textMain">Reza Saputra</span>
      </h1>
      <h2 className="text-xl font-medium text-secondary">Web Developer</h2>
      <a
        href="#contact"
        className="px-8 py-3 mt-5 transition duration-200 ease-in rounded-lg w-fit text-textMain bg-card hover:shadow-md"
      >
        Contact Me
      </a>
    </div>
  );
}
