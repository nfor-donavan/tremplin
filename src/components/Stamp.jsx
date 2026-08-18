export default function Stamp({ size = 96, className = "" }) {
  return (
    <svg
      className={`stamp ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="47" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" />
      <path
        id="stampCircle"
        d="M 60,13 A 47,47 0 1 1 59.9,13"
        fill="none"
      />
      <text fontFamily="'IBM Plex Mono', monospace" fontSize="9.5" letterSpacing="3" fill="currentColor">
        <textPath href="#stampCircle" startOffset="2%">
          VÉRIFIÉ · VERIFIED · VÉRIFIÉ · VERIFIED ·
        </textPath>
      </text>
      <path
        d="M40 61 L53 74 L82 45"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
