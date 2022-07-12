import Link from "next/link";

export default function FullLink({ to, a11y, label, styles }) {
  return (
    <Link href={to}>
      <a
        aria-label={a11y}
        className={`hover:text-blue-600 hover:scale-125 transition-all focus:text-blue-600 ${styles}`}
      >
        {label}
      </a>
    </Link>
  );
}
