import Marquee from "./ui/marquee";

interface TestimonyProps {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  img: string;
}

type TestimonyCardProps = Omit<TestimonyProps, "id">;

const testimonialData: TestimonyProps[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "YouTube Creator",
    testimonial:
      "YT Approver streamlined my workflow, letting me approve videos from anywhere without security concerns. A total game-changer!",
    img: "https://avatar.vercel.sh/Alex",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "Content Agency Owner",
    testimonial:
      "Managing clients was tough before YT Approver. The easy collaboration and automatic uploads have saved me a lot of time.",
    img: "https://avatar.vercel.sh/Sophia",
  },
  {
    id: 3,
    name: "Liam Patel",
    role: "Freelance Editor",
    testimonial:
      "YT Approver makes video approvals smooth, keeping everything secure and easy. Fast and simple for clients to use.",
    img: "https://avatar.vercel.sh/Liam",
  },
  {
    id: 4,
    name: "Emily Thompson",
    role: "Media Agency Manager",
    testimonial:
      "The cloud platform integration improved team collaboration and helped us complete projects faster without credential concerns.",
    img: "https://avatar.vercel.sh/Emily",
  },
  {
    id: 5,
    name: "Ryan Edwards",
    role: "YouTube Creator",
    testimonial:
      "YT Approver made the approval process quick, secure, and easy. It saves me time and provides peace of mind.",
    img: "https://avatar.vercel.sh/Ryan",
  },
];

const TestimonyCard = ({
  img,
  name,
  role,
  testimonial,
}: TestimonyCardProps) => {
  return (
    <div className="flex flex-col p-3 bg-white border dark:bg-gray-900/40 shadow-lg rounded-md w-[250px] ">
      <div className="flex gap-3 ">
        <div className="">
          <img className="w-9 h-9 rounded-full mb-4" src={img} alt={name} />
        </div>
        <div className="flex flex-col ">
          <p className="text-[15px] font-semibold text-gray-900 dark:text-gray-200">
            {name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <p className=" text-[13px] text-gray-700 dark:text-gray-300">
        {testimonial}
      </p>
    </div>
  );
};

const TestimonialMarquee = () => {
  return (
    <div className="mt-20">
      <p className="text-xl md:text-2xl font-thin text-center text-gray-900 dark:text-gray-100">
        See What our users Are Saying
      </p>
      <div className="px-10 md:px-20">
        <Marquee pauseOnHover className="mt-6 [--duration:40s] ">
          {testimonialData.map(({ id, img, name, role, testimonial }) => (
            <TestimonyCard
              key={id}
              img={img}
              name={name}
              role={role}
              testimonial={testimonial}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialMarquee;
