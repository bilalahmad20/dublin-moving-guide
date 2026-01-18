// Utility functions

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Task } from '@/types';

// Tailwind CSS class merging utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date utility functions
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getDaysSinceArrival(arrivalDate: string): number {
  const arrival = new Date(arrivalDate);
  const today = new Date();
  const diffTime = today.getTime() - arrival.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function getTaskDeadlineDate(arrivalDate: string, deadlineDays: number): Date {
  const arrival = new Date(arrivalDate);
  const deadline = new Date(arrival);
  deadline.setDate(deadline.getDate() + deadlineDays);
  return deadline;
}

export function isTaskOverdue(arrivalDate: string, task: Task): boolean {
  if (task.completed) return false;
  const daysSince = getDaysSinceArrival(arrivalDate);
  return daysSince > task.deadline;
}

export function isTaskUpcoming(arrivalDate: string, task: Task, daysAhead: number): boolean {
  if (task.completed) return false;
  const daysSince = getDaysSinceArrival(arrivalDate);
  const daysUntilDeadline = task.deadline - daysSince;
  return daysUntilDeadline > 0 && daysUntilDeadline <= daysAhead;
}

export function sortTasksByDeadline(tasks: Task[]): Task[] {
  return [...tasks].sort((a, b) => a.deadline - b.deadline);
}

export function sortTasksByPriority(tasks: Task[]): Task[] {
  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

export function canCompleteTask(task: Task, completedTaskIds: string[]): boolean {
  if (!task.dependencies || task.dependencies.length === 0) {
    return true;
  }
  return task.dependencies.every(depId => completedTaskIds.includes(depId));
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'pre-arrival': 'Before Arrival',
    'week-1': 'First Week',
    'month-1': 'First Month',
    '90-days': 'Within 90 Days',
    'ongoing': 'Ongoing',
  };
  return labels[category] || category;
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    critical: 'text-red-600 bg-red-50 border-red-200',
    high: 'text-orange-600 bg-orange-50 border-orange-200',
    medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    low: 'text-green-600 bg-green-50 border-green-200',
  };
  return colors[priority] || colors.low;
}

export function getTaskStatusColor(task: Task, arrivalDate: string | null): string {
  if (task.completed) {
    return 'bg-green-100 border-green-300';
  }
  if (!arrivalDate) {
    return 'bg-gray-100 border-gray-300';
  }
  if (isTaskOverdue(arrivalDate, task)) {
    return 'bg-red-100 border-red-300';
  }
  if (isTaskUpcoming(arrivalDate, task, 7)) {
    return 'bg-yellow-100 border-yellow-300';
  }
  return 'bg-blue-100 border-blue-300';
}

export function searchTasks(tasks: Task[], query: string): Task[] {
  const lowerQuery = query.toLowerCase();
  return tasks.filter(task =>
    task.title.toLowerCase().includes(lowerQuery) ||
    task.description.toLowerCase().includes(lowerQuery) ||
    task.tips.some(tip => tip.toLowerCase().includes(lowerQuery)) ||
    task.documents.some(doc => doc.toLowerCase().includes(lowerQuery))
  );
}
