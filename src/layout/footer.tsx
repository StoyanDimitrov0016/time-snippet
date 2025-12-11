const contacts = [
  { href: "https://github.com/StoyanDimitrov0016/time-snippet", label: "Source" },
  { href: "https://github.com/StoyanDimitrov0016/", label: "GitHub" },
  { href: "https://www.linkedin.com/in/stoyan-dimitrov-25bb71259/", label: "LinkedIn" },
] as const;

export default function Footer() {
  return (
    <footer className="pt-10 text-center text-sm text-gray-500">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {contacts.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className=" hover:text-gray-900"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
