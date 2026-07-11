/**
 * GoalArc — the signature element.
 * Traces the D-shaped goal-area line of a handball court. Used to frame
 * hero moments and section transitions. Decorative only (aria-hidden).
 */
export function GoalArc({
  className = '',
  color = 'currentColor',
  strokeWidth = 2,
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 220"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* goal line */}
      <line x1="0" y1="218" x2="400" y2="218" stroke={color} strokeWidth={strokeWidth} />
      {/* the 6-metre arc: quarter-arcs at the posts joined by a straight run */}
      <path
        d="M60 218 A120 120 0 0 1 140 100 L260 100 A120 120 0 0 1 340 218"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* goal posts */}
      <line x1="150" y1="218" x2="150" y2="196" stroke={color} strokeWidth={strokeWidth} />
      <line x1="250" y1="218" x2="250" y2="196" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}
