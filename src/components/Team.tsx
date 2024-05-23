import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  comment: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Aman Kadam",
    position: "Lead Developer",
    comment:"Ensuring the seamless integration of cutting-edge AI technologies in AI-VERSE.",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      // {
      //   name: "Facebook",
      //   url: "https://www.facebook.com/",
      // },
      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/",
      // },
    ],
    
  },
  {
    imageUrl: "https://drive.google.com/file/d/1M-SC8pLz4P7tjMrqmmgJKlktdLKdImxm/view?usp=sharing",
    name: "Amit Kashid",
    position: "Tech Lead",
    comment:"Turning complex problems into elegant solutions, one line of code at a time.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/amit-kashid-738aab297/" },
      // {
      //   name: "Facebook",
      //   url: "https://www.facebook.com/",
      // },
      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/",
      // },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Abhishek Sarkale",
    position: "Frontend Developer",
    comment:"Bringing designs to life with clean and efficient code.",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/",
      // },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Arbaj Pathan",
    position: "Resource Manager",
    comment:"Connecting our vision with our audience through impactful campaigns.",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      // {
      //   name: "Facebook",
      //   url: "https://www.facebook.com/",
      // },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      We are AI-VERSE - a team of developers, researchers, and enthusiasts working hand-in-hand to shape the future of learning.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position,comment, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{comment}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
