import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <header className="text-center space-y-2 pt-6">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Time Snippet
        </h1>

        <Badge variant="secondary" className="gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live
        </Badge>
      </div>

      <p className="text-gray-600">Current time rendered in your favorite programming language</p>
    </header>
  );
}
