// Core Types for Dublin Moving Guide

export type TaskCategory = 'pre-arrival' | 'week-1' | 'month-1' | '90-days' | 'ongoing';
export type TaskPriority = 'critical' | 'high' | 'medium' | 'low';
export type LinkType = 'official' | 'form' | 'booking' | 'info';

export interface ExternalLink {
  title: string;
  url: string;
  type: LinkType;
  description?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  priority: TaskPriority;
  deadline: number; // Days after arrival (e.g., 3 for "within 3 days", 90 for "within 90 days")
  estimatedTime: string; // e.g., "2-3 hours", "30 minutes"
  cost?: string; // e.g., "€300", "€20/month"
  dependencies?: string[]; // IDs of tasks that must be completed first
  completed: boolean;
  completedDate?: string; // ISO date string
  links: ExternalLink[];
  tips: string[];
  documents: string[]; // Required documents (e.g., "Passport", "Employment Permit")
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GuideSection {
  id: string;
  title: string;
  slug: string;
  content: string; // Main content (can be markdown)
  subsections?: GuideSubsection[];
  relatedTasks: string[]; // Task IDs
  externalLinks: ExternalLink[];
  faqs?: FAQ[];
  priority?: number; // For ordering
}

export interface GuideSubsection {
  title: string;
  content: string;
  tips?: string[];
}

export interface Resource {
  id: string;
  title: string;
  category: 'government' | 'housing' | 'banking' | 'mobile' | 'transportation' | 'community' | 'emergency';
  links: ExternalLink[];
  description: string;
}

export interface UserProgress {
  arrivalDate: string; // ISO date string
  completedTasks: string[]; // Task IDs
  lastUpdated: string; // ISO date string
}

export interface ChecklistContextType {
  tasks: Task[];
  userProgress: UserProgress | null;
  setArrivalDate: (date: string) => void;
  toggleTask: (taskId: string) => void;
  clearProgress: () => void;
  exportProgress: () => string;
  importProgress: (data: string) => void;
  getTaskById: (taskId: string) => Task | undefined;
  getTasksByCategory: (category: TaskCategory) => Task[];
  getOverdueTasks: () => Task[];
  getUpcomingTasks: (days: number) => Task[];
  getProgressPercentage: () => number;
}
