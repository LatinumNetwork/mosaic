import React from 'react';
import './button.css';

export type ButtonProps = {
  primary?: boolean;
  size: string;
  backgroundColor?: string;
  label: string;
  [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, label, ...props }: ButtonProps ) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
