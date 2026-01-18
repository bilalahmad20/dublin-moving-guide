// LocalStorage utility functions for persisting user progress

import { UserProgress } from '@/types';

const STORAGE_KEY = 'dublin-guide-progress';

export const saveProgress = (progress: UserProgress): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Failed to save progress to localStorage:', error);
    }
  }
};

export const loadProgress = (): UserProgress | null => {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load progress from localStorage:', error);
    }
  }
  return null;
};

export const clearProgress = (): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear progress from localStorage:', error);
    }
  }
};

export const exportProgressAsJSON = (progress: UserProgress): string => {
  return JSON.stringify(progress, null, 2);
};

export const importProgressFromJSON = (jsonString: string): UserProgress | null => {
  try {
    const progress = JSON.parse(jsonString);
    // Validate that it has the correct structure
    if (progress && progress.arrivalDate && Array.isArray(progress.completedTasks)) {
      return progress;
    }
    return null;
  } catch (error) {
    console.error('Failed to parse progress JSON:', error);
    return null;
  }
};
