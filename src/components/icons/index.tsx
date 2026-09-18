// Custom SVG icon components — add brand icons here
// Follow the Lucide pattern: forwardRef + size + className + strokeWidth

export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.83 14.12c-.25.7-1.45 1.34-2 1.38-.51.04-1.16.2-3.9-.81-3.3-1.24-5.4-4.47-5.56-4.68-.16-.2-1.33-1.77-1.33-3.38 0-1.61.84-2.4 1.14-2.73.3-.33.65-.41.87-.41.22 0 .43.01.62.01.2.01.47-.07.73.56.28.68.92 2.31.98 2.47.06.16.1.35.02.57-.08.22-.12.35-.24.54-.12.2-.25.43-.36.58-.12.15-.25.31-.11.6.14.29.63 1.04 1.35 1.69.92.82 1.7 1.08 1.94 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.2 1.2z" />
    </svg>
  );
}