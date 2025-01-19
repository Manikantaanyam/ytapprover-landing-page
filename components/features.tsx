import {
  CheckCircle,
  Cloud,
  FastForward,
  KeyRound,
  Mail,
  Upload,
} from "lucide-react";

const featureData = [
  {
    id: 1,
    title: "Effortless Video Uploads",
    desc: "Editors upload videos with titles, descriptions, and tags without needing YouTube account access.",
    icon: <Upload />,
  },
  {
    id: 2,
    title: "Automated Notifications",
    desc: "Creators instantly get notified to approve or review videos, keeping things moving quickly.",
    icon: <Mail />,
  },
  {
    id: 3,
    title: "Fast & Secure Uploads",
    desc: "Approved videos are uploaded directly to YouTube, saving time while ensuring security.",
    icon: <FastForward />,
  },
  {
    id: 4,
    title: "Streamlined Collaboration",
    desc: "Simplify approvals between editors and creators with an easy-to-use, reliable workflow.",
    icon: <CheckCircle />,
  },
  {
    id: 5,
    title: "Seamless Integrations",
    desc: "Integrate with your favorite cloud platforms for smooth uploads and transfers.",
    icon: <Cloud />,
  },
  {
    id: 6,
    title: "Top-Notch Security",
    desc: "Keep your data and credentials secure with industry-leading encryption and privacy controls.",
    icon: <KeyRound />,
  },
];

const Features = () => {
  return (
    <div className="mt-14 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <p className="text-xl max-w-72 text-center md:text-2xl font-thin ">
          Why YTApprover is the Best Platform for Content Collaboration
        </p>
        <p className="text-sm max-w-80 md:text-base text-black dark:text-white/50 font-thin mt-4 md:max-w-xl text-center">
          YtApprover offers video uploads, secure approvals, and speed up your
          YouTube workflow with features designed for seamless collaboration
          between editors and creators.
        </p>
      </div>

      <div>
        <p></p>
        <div className="px-10 grid grid-cols-1 space-y-3 md:grid-cols-3 gap-3 mt-10">
          {featureData.map(({ title, desc, id, icon }) => (
            <div className="flex flex-col space-y-2" key={id}>
              <div className="flex gap-3 items-center">
                <span className="bg-black/70   dark:bg-gray-400/40 border rounded-md p-1 text-white">
                  {icon}
                </span>
                <h1 className="font-thin text-base  ">{title}</h1>
              </div>
              <p className="text-[14px] font-extralight text-black/70 dark:text-white/50 max-w-xs">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
