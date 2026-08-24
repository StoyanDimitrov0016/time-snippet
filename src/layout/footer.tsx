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
    <footer className="shrink-0 pt-3 text-center text-xs text-white/45 sm:pt-5 sm:text-sm">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {contacts.map(({ href, label, icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <span className="text-base">{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
