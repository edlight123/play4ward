import Image from 'next/image';

/**
 * Photo — the real-image counterpart to ImagePlaceholder, with the same
 * `label` / `ratio` / `className` shape so a placeholder can be swapped for a
 * photo (or back) without touching the surrounding layout. `label` becomes the
 * alt text, which is why the photo keys in messages/*.json read as real
 * descriptions rather than "[REPLACE: …]" instructions.
 */
export function Photo({
  src,
  label,
  className = '',
  ratio = 'aspect-[4/3]',
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
}: {
  src: string;
  label: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative ${ratio} w-full overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={label}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
