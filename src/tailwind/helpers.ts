import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// This function is useful for dynamically creating class name strings in a React component,
// ensuring that the resulting class names are valid and correctly merged
export const clsm = (...classes: ClassValue[]): string => {
  if (!classes) return '';

  return twMerge(clsx(classes));
};
