import { CiLinkedin } from "react-icons/ci";
import { FaCode, FaGithub } from "react-icons/fa";

const contacts = [
  {
    href: "https://github.com/StoyanDimitrov0016/time-snippet",
    label: "Source",
    icon: <FaCode />,
  },
  {
    href: "https://github.com/StoyanDimitrov0016/",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/stoyan-dimitrov-25bb71259/",
    label: "LinkedIn",
    icon: <CiLinkedin />,
  },
] as const;

export default function Footer() {
  return (
    <footer className="pt-10 text-center text-sm text-gray-500">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {contacts.map(({ href, label, icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 inline-flex items-center gap-2"
          >
            <span className="text-base">{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
