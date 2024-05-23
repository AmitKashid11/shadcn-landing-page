// import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                AI-VERSE
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                AI_VERSE{" "}
              </span> is an innovative platform that transforms coding education by leveraging the advanced Llama 3 model. 
              With features like code generation, intelligent bug detection, and AI-Interviewer it empowers students to learn efficiently. 
              Our user-friendly interface and personalized learning paths make mastering programming intuitive and engaging, 
              positioning AI-VERSE as a key tool for developing future tech talent
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
