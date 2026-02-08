import heroImg from "../../assets/images/Techie with pickleball passion.png";
export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer • Tech Athlete
          </h2>
          <div className="grid gap-8 md:gap-10 md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr] items-start">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-xl" />
              <img
                src={heroImg}
                alt="Deep Patel"
                className="relative w-full max-w-[320px] lg:max-w-[380px] rounded-2xl border border-white/10 shadow-2xl object-cover"
              />
            </div>

            <div className="relative space-y-6">
              <p className="text-white">
                Hello! I’m Deep Patel a software engineer and AI/ML Enthusiast
                who loves turning ideas into clean, reliable products with
                thoughtful user experiences.
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
        </div>
      </section>
    </>
  );
}
