import { useId } from "react";

export function Logo({ className = "h-7 w-7" }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <path d="M12.5 10L22 16L12.5 22V10Z" fill="#F3F5F9" />
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3E7BFA" />
          <stop offset="1" stopColor="#38C6B9" />
        </linearGradient>
      </defs>
    </svg>
  );
}