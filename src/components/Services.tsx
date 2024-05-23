import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Generator",
    description:
      "Bypass boilerplate code generation and delve into core principles. Generate high-quality code samples in seconds, accelerating your learning odyssey.",
    icon: <ChartIcon />,
  },
  {
    title: "Code Explainer",
    description:
      "Effortlessly decipher complex code. AI Explainer unlocks understanding with clear explanations, fueling your coding mastery.",
    icon: <WalletIcon />,
  },
  {
    title: "Code Documentor",
    description:
      "AI-VERSE creates comprehensive Markdown docs for your code, freeing you to focus on what matters most - coding!",
    icon: <MagnifierIcon />,
  },
  {
    title: "Code Debugger",
    description:
      "AI-VERSE pinpoints vulnerabilities with precision, enabling students to hone their critical thinking and problem-solving skills.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Code Reviewer",
    description:
      "Get personalized code feedback at scale. Leverage advanced AI to pinpoint areas for improvement, fast-tracking your coding proficiency.",
    icon: <MagnifierIcon />,
  },
  {
    title: "AI-Interviewer",
    description:
      "Conquer coding interviews with our AI simulator. Practice real-world scenarios, refine your responses, and boost your confidence.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Enter a totally new world with AI and the promise of coding adventure.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[500px] md:w-[700px] lg:w-[800px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
