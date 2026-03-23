interface BrowserMockupProps {
  companyName: string;
  variant: "dark" | "light";
  className?: string;
  screenshotSrc?: string;
  websiteUrl?: string;
}

export default function BrowserMockup({
  companyName,
  variant,
  className = "",
  screenshotSrc,
  websiteUrl,
}: BrowserMockupProps) {
  const gradientClass =
    variant === "dark"
      ? "bg-gradient-to-br from-[#1e1b4b] to-[#4338ca]"
      : "bg-gradient-to-br from-accent to-primary";

  return (
    <div className={`overflow-hidden border border-border ${className}`}>
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 bg-[#f1f3f5] px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="block h-2.5 w-2.5 bg-[#ef4444]" />
          <span className="block h-2.5 w-2.5 bg-[#f59e0b]" />
          <span className="block h-2.5 w-2.5 bg-[#22c55e]" />
        </div>
        <div className="mx-auto border border-border bg-white px-4 py-1">
          <span className="text-xs text-dark/40 select-none">
            {websiteUrl
              ? websiteUrl
              : variant === "dark"
                ? "fortedgesecurity.ca"
                : "example.com"}
          </span>
        </div>
        {/* Spacer to balance the dots on the left */}
        <div className="w-[52px]" />
      </div>

      {/* Content area */}
      {screenshotSrc ? (
        <div className={`aspect-[16/10] overflow-hidden ${gradientClass}`}>
          <img
            src={screenshotSrc}
            alt={`${companyName} website screenshot`}
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <div
          className={`flex aspect-[16/10] items-center justify-center ${gradientClass}`}
        >
          <span className="text-2xl font-semibold text-white select-none md:text-3xl">
            {companyName}
          </span>
        </div>
      )}
    </div>
  );
}
