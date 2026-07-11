import { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

type Variant = 'primary' | 'outline' | 'ghost' | 'onDark';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-wide transition-all duration-200 focus-visible:outline-offset-4 disabled:opacity-50';

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-coral text-white shadow-card hover:bg-coral-600 hover:-translate-y-0.5 hover:shadow-lift',
  outline:
    'border-2 border-ink/20 text-ink hover:border-ink hover:-translate-y-0.5',
  ghost: 'text-ink hover:bg-ink/5',
  onDark:
    'bg-white text-ink hover:bg-gold hover:text-ink hover:-translate-y-0.5 shadow-card',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

// Internal link (locale-aware) vs external link (opens new tab).
export function Button({
  href,
  external = false,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: CommonProps & { href: string; external?: boolean }) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
