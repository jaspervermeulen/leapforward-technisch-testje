'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'gray' | 'white' | 'blue';

interface ButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
}

export default function Button({
  children,
  icon,
  href,
  onClick,
  variant = 'gray',
  disabled,
}: ButtonProps) {
  const baseStyles =
    'w-full flex items-center justify-center gap-2 py-4 font-bold rounded-lg transition cursor-pointer';
  const shadowStyles =
    'shadow-[0_4px_0_0_var(--tw-shadow-color)] hover:translate-y-1 hover:shadow-[0_0px_0_0_var(--tw-shadow-color)]';

  const variants: Record<ButtonVariant, string> = {
    gray: 'bg-gray-200 text-primary-blue-dark [--tw-shadow-color:#9ca3af]',
    white: 'bg-white text-primary-blue-dark [--tw-shadow-color:#d1d5db]',
    blue: 'bg-primary-blue-dark text-white [--tw-shadow-color:#0E325B]',
  };

  const className = `${baseStyles} ${shadowStyles} ${variants[variant]} ${
    disabled ? 'pointer-events-none cursor-not-allowed' : ''
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children && <span>{children}</span>}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
}
