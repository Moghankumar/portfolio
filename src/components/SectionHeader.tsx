interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p
        className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.1em] uppercase
        text-accent mb-3"
      >
        {label}
        <span className="h-px w-10 bg-accent opacity-40" />
      </p>
      <h2 className="text-[clamp(24px,4vw,36px)] font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[560px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
