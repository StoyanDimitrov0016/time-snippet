export default function Header() {
  return (
    <header className="flex shrink-0 flex-col items-center gap-2 pt-1 text-center sm:gap-3 sm:pt-3">
      <h1 className="bg-linear-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl lg:text-4xl">
        Time Snippet
      </h1>

      <p className="max-w-xl text-xs text-white/55 sm:text-sm lg:text-base">
        A live, copy-ready time object rendered in your favorite programming language.
      </p>
    </header>
  );
}
