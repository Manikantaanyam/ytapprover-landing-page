import { CheckCircle, Rocket, Upload } from "lucide-react";

const worksData = [
  {
    icon: <Upload color="red" />,
    title: "Editor Uploads",
    desc: "Editors upload finished videos to the platform along with metadata (title, description, tags, etc.) in a secure, simple process.",
  },
  {
    icon: <CheckCircle color="green" />,
    title: "Creator Approval",
    desc: "Creators receive instant notifications (via Slack or WhatsApp) to approve, reject, or request edits for videos.",
  },
  {
    icon: <Rocket color="red" />,
    title: "Upload to YouTube",
    desc: "Once the creator approves, the video is automatically uploaded to their YouTube channel—securely, without giving full account access to anyone.",
  },
];

const HowItWorks = () => {
  return (
    <div className="mt-14 flex flex-col items-center">
      <h1 className="text-2xl font-thin">How YtApprover works ?</h1>
      <div className="flex-col space-y-3 md:flex md:flex-row gap-3 mx-auto mt-10 px-10">
        {worksData.map(({ title, desc, icon }, key) => (
          <div
            className="flex flex-col space-y-3 border shadow-md rounded-md dark:bg-gray-900/60  p-6 max-w-xs"
            key={key}
          >
            <div className="flex gap-2">
              <span className="font-extrabold stroke-black">{icon}</span>
              <h1 className="font-thin text-black dark:text-white">{title}</h1>
            </div>
            <p className="dark:text-white/70 text-black/70 text-[15px]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
