import { ShimmerButton } from "../components/ui/shimmer-button";

export function ShimmerButtonDemo({text}: {text: string}) {
  return (
    <ShimmerButton className="shadow-2xl">
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        {text}
      </span>
    </ShimmerButton>
  );
}
