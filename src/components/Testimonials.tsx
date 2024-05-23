import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://images.freeimages.com/images/large-previews/765/yin-yang-symbol-1-1159880.jpg",
    name: "John Doe React",
    userName: "@Ak47",
    comment: "This landing page is awesome!",
  },
  {
    image: "https://tse1.mm.bing.net/th?id=OIP.R3BjyoNT_SMz5muV6ngr5gHaHa&pid=Api&P=0&h=220",
    name: "John Doe React",
    userName: "@DarkSketch",
    comment:
      "Code Generater of AI-VERSE does not directly gave me code ,instead it lead me to write code through hints and direction.Thanks AI-VERSE.",
  },

  {
    image: "https://e7.pngegg.com/pngimages/731/1018/png-clipart-gold-colored-and-black-aztec-calendar-maya-civilization-aztec-calendar-stone-mayan-calendar-civilization-culture-calendar.png",
    name: "John Doe React",
    userName: "@Abhya",
    comment:
      "Each feature I see in AI-VERSE is a demand of industry now a days, & worked exactly to my expectation. Good work, Keep going.",
  },
  {
    image: "https://thumbs.dreamstime.com/b/dreamcatcher-icon-simple-vector-dream-catcher-tribal-feather-239241911.jpg",
    name: "John Doe React",
    userName: "@CodeR3d",
    comment:
      "@All use that AI-Interviewer, it's really awesome. It can detect every emotion you go through during real deal..!",
  },
  {
    image: "https://tse3.mm.bing.net/th?id=OIP._XMS4u7UOzFhxz00lzm0EwHaHa&pid=Api&P=0&h=220",
    name: "John Doe React",
    userName: "@Xavier",
    comment:
      " That Code Explainer pinpointed areas for improvement in my problem-solving approach and code explanation skills. Real work. ",
  },
  {
    image: "https://tse1.mm.bing.net/th?id=OIP.G32zf9n__MD5imYhxwzThQHaHa&pid=Api&P=0&h=220",
    name: "John Doe React",
    userName: "@X4V1N",
    comment:
      "AI-VERSE is a powerful tool that can benefit coders of all levels. Whether you're a student, educator, or professional, AI-VERSE can help you improve your coding skills and achieve your coding goals.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover What People Say About
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          AI-VERSE
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      Explore testimonials and discover how AI-VERSE empowers coders of all levels.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
