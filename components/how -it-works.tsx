import { CheckCircle, Rocket, Upload } from "lucide-react";

const worksData = [
  {
    icon: <Upload color="red" />,
    title: "Editor Uploads",
    desc: "Editors upload finished videos to the platform along with metadata (title, description, tags, etc.) in a secure, simple process.",
  },
  {
    icon: <CheckCircle color="lightgreen" />,
    title: "Creator Approval",
    desc: "Creators receive instant notifications (via Slack or WhatsApp) to approve, reject, or request edits for videos.",
  },
  {
    icon: <Rocket color="yellow" />,
    title: "Upload to YouTube",
    desc: "Once the creator approves, the video is automatically uploaded to their YouTube channel—securely, without giving full account access to anyone.",
  },
];

const HowItWorks = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-2xl font-semibold">How it works ?</h1>
      <div className="flex gap-3 mx-auto mt-6 px-10">
        {worksData.map(({ title, desc, icon }, key) => (
          <div
            className="flex flex-col space-y-3 border border-hidden rounded-md bg-gray-700/80 dark:bg-zinc-800  p-6 max-w-xs"
            key={key}
          >
            <div className="flex gap-2">
              <span>{icon}</span>
              <h1 className="font-medium text-white">{title}</h1>
            </div>
            <p className="text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
