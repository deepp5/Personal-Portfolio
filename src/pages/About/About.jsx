export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer • Tech Athlete
          </h2>
          <div className="relative space-y-6">
            <p className="text-white">
              Hello! I’m Deep Patel a software engineer and AI/ML Enthusiast who
              loves turning ideas into clean, reliable products with thoughtful
              user experiences.
            </p>

            <p className="text-white">
              I’m majoring in Computer Science and Mathematics, and I love the
              problem-solving side of both breaking big challenges into clear,
              logical steps. I bring that same mindset to the gym too show up,
              stay consistent, and keep improving.
            </p>

            <p className="text-white">
              Outside of coding, you’ll usually find me dancing or playing
              pickleball same energy discipline, consistency, and teamwork.
            </p>

            <div className="pt-2">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p className="text-white">
                  Train like an athlete. Build like an engineer.
                </p>
                <cite className="mt-4 block font-medium text-white">
                  Deep Patel
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
