import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "AI-VERSE makes coding accessible to everyone, regardless of their skill level. Dive into an intuitive learning experience designed to empower you.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Connect with fellow learners, share your experiences, and get help from mentors. Collaborate and grow together.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Whether you’re a beginner or an expert, our scalable learning paths ensure that you always have new challenges to conquer. Expand your skills with us.",
  },
  {
    icon: <GiftIcon />,
    title: "User-Centric Design",
    description:
      "Navigate effortlessly with our intuitive interface, designed to prioritize your learning and development needs.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Revolutionizing coding journey with personalized, interactive, and AI-driven learning experiences
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
