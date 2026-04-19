import { useEffect, useState } from "react";

const encodeSvg = (svg: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const specialCharacterFallbacks: Record<string, string> = {
  "SpongeBob SquarePants": encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="60" fill="#fff7b0"/>
      <rect x="26" y="18" width="68" height="78" rx="10" fill="#f8df37" stroke="#9a7b00" stroke-width="4"/>
      <circle cx="48" cy="46" r="12" fill="#fff"/><circle cx="72" cy="46" r="12" fill="#fff"/>
      <circle cx="50" cy="48" r="4" fill="#1f2937"/><circle cx="70" cy="48" r="4" fill="#1f2937"/>
      <path d="M48 66 Q60 76 72 66" fill="none" stroke="#7c2d12" stroke-width="4" stroke-linecap="round"/>
      <rect x="42" y="78" width="36" height="9" rx="3" fill="#fff"/>
      <rect x="38" y="87" width="44" height="6" fill="#8b4513"/>
      <rect x="38" y="93" width="44" height="8" fill="#ef4444"/>
    </svg>
  `),
  "Pearl Krabs": encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="60" fill="#ffe3f1"/>
      <ellipse cx="60" cy="62" rx="28" ry="34" fill="#f472b6" stroke="#9d174d" stroke-width="4"/>
      <path d="M43 33 Q60 16 77 33" fill="none" stroke="#f472b6" stroke-width="12" stroke-linecap="round"/>
      <circle cx="50" cy="56" r="7" fill="#fff"/><circle cx="70" cy="56" r="7" fill="#fff"/>
      <circle cx="50" cy="58" r="3" fill="#1f2937"/><circle cx="70" cy="58" r="3" fill="#1f2937"/>
      <path d="M50 77 Q60 84 70 77" fill="none" stroke="#831843" stroke-width="4" stroke-linecap="round"/>
      <rect x="46" y="84" width="28" height="8" rx="4" fill="#f59e0b"/>
    </svg>
  `),
  "Mrs. Puff": encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="60" fill="#fff3bf"/>
      <circle cx="60" cy="64" r="31" fill="#f5d38d" stroke="#92400e" stroke-width="4"/>
      <circle cx="48" cy="54" r="10" fill="#fff"/><circle cx="72" cy="54" r="10" fill="#fff"/>
      <circle cx="50" cy="56" r="4" fill="#1f2937"/><circle cx="70" cy="56" r="4" fill="#1f2937"/>
      <path d="M48 76 Q60 84 72 76" fill="none" stroke="#7c2d12" stroke-width="4" stroke-linecap="round"/>
      <circle cx="60" cy="30" r="9" fill="#2563eb"/>
      <rect x="49" y="28" width="22" height="10" rx="4" fill="#fbbf24"/>
      <g fill="#7c3f00">
        <circle cx="32" cy="48" r="3"/><circle cx="28" cy="62" r="3"/><circle cx="32" cy="76" r="3"/>
        <circle cx="88" cy="48" r="3"/><circle cx="92" cy="62" r="3"/><circle cx="88" cy="76" r="3"/>
      </g>
    </svg>
  `),
  "Larry the Lobster": encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="60" fill="#ffe0e0"/>
      <ellipse cx="60" cy="64" rx="20" ry="28" fill="#ef4444" stroke="#991b1b" stroke-width="4"/>
      <circle cx="51" cy="53" r="7" fill="#fff"/><circle cx="69" cy="53" r="7" fill="#fff"/>
      <circle cx="52" cy="54" r="3" fill="#1f2937"/><circle cx="68" cy="54" r="3" fill="#1f2937"/>
      <path d="M48 72 Q60 80 72 72" fill="none" stroke="#7f1d1d" stroke-width="4" stroke-linecap="round"/>
      <path d="M38 40 L24 30 L30 52 Z" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
      <path d="M82 40 L96 30 L90 52 Z" fill="#ef4444" stroke="#991b1b" stroke-width="3"/>
      <path d="M43 88 L34 102" stroke="#991b1b" stroke-width="4" stroke-linecap="round"/>
      <path d="M77 88 L86 102" stroke="#991b1b" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `),
  "Karen Plankton": encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="60" fill="#d9fff0"/>
      <rect x="28" y="24" width="64" height="46" rx="8" fill="#475569" stroke="#1e293b" stroke-width="4"/>
      <rect x="34" y="30" width="52" height="34" rx="4" fill="#0f172a"/>
      <path d="M42 48 Q60 34 78 48" fill="none" stroke="#4ade80" stroke-width="4" stroke-linecap="round"/>
      <circle cx="60" cy="44" r="4" fill="#4ade80"/>
      <rect x="52" y="70" width="16" height="12" rx="3" fill="#94a3b8"/>
      <rect x="40" y="82" width="40" height="12" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="3"/>
      <circle cx="46" cy="100" r="4" fill="#64748b"/><circle cx="74" cy="100" r="4" fill="#64748b"/>
    </svg>
  `),
  "King Neptune": encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="60" fill="#d8fbff"/>
      <path d="M36 34 L48 18 L60 32 L72 18 L84 34 L84 46 L36 46 Z" fill="#fbbf24" stroke="#a16207" stroke-width="4"/>
      <circle cx="60" cy="58" r="24" fill="#67e8f9" stroke="#0e7490" stroke-width="4"/>
      <circle cx="51" cy="54" r="6" fill="#fff"/><circle cx="69" cy="54" r="6" fill="#fff"/>
      <circle cx="52" cy="55" r="3" fill="#1f2937"/><circle cx="68" cy="55" r="3" fill="#1f2937"/>
      <path d="M45 69 Q60 92 75 69" fill="#fff" stroke="#94a3b8" stroke-width="3"/>
      <path d="M49 48 Q60 42 71 48" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `),
};

const initialsFromName = (name: string) => {
  const parts = name
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
};

export const buildCharacterFallbackDataUri = (
  name: string,
  colorA = "#f8fafc",
  colorB = "#dbeafe",
  textColor = "#0f3b63",
) => {
  const initials = initialsFromName(name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="60" fill="url(#bg)" />
      <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="4" />
      <text
        x="60"
        y="68"
        text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="38"
        font-weight="700"
        fill="${textColor}"
      >${initials}</text>
    </svg>
  `;

  return encodeSvg(svg);
};

interface CharacterAvatarProps {
  src?: string;
  alt: string;
  className: string;
  fallbackSrc?: string;
}

const CharacterAvatar = ({ src, alt, className, fallbackSrc }: CharacterAvatarProps) => {
  const generatedFallback = fallbackSrc ?? specialCharacterFallbacks[alt] ?? buildCharacterFallbackDataUri(alt);
  const [currentSrc, setCurrentSrc] = useState(src || generatedFallback);

  useEffect(() => {
    setCurrentSrc(src || generatedFallback);
  }, [generatedFallback, src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== generatedFallback) {
          setCurrentSrc(generatedFallback);
        }
      }}
    />
  );
};

export default CharacterAvatar;
