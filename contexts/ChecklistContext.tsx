'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Task, UserProgress, ChecklistContextType, TaskCategory } from '@/types';
import { tasks as initialTasks } from '@/data/checklist';
import {
  saveProgress,
  loadProgress,
  clearProgress as clearStoredProgress,
  exportProgressAsJSON,
  importProgressFromJSON,
} from '@/lib/localStorage';
import {
  getDaysSinceArrival,
  isTaskOverdue,
  isTaskUpcoming,
  canCompleteTask,
} from '@/lib/utils';

const ChecklistContext = createContext<ChecklistContextType | undefined>(undefined);

export function ChecklistProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setUserProgress(savedProgress);
      // Update tasks with completion status
      setTasks(prevTasks =>
        prevTasks.map(task => ({
          ...task,
          completed: savedProgress.completedTasks.includes(task.id),
          completedDate: savedProgress.completedTasks.includes(task.id)
            ? task.completedDate
            : undefined,
        }))
      );
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && userProgress) {
      saveProgress(userProgress);
    }
  }, [userProgress, isLoaded]);

  const setArrivalDate = (date: string) => {
    const newProgress: UserProgress = {
      arrivalDate: date,
      completedTasks: userProgress?.completedTasks || [],
      lastUpdated: new Date().toISOString(),
    };
    setUserProgress(newProgress);
  };

  const toggleTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    // Check dependencies
    if (!task.completed && !canCompleteTask(task, userProgress?.completedTasks || [])) {
      alert('Please complete the required tasks first!');
      return;
    }

    const isCompleted = task.completed;
    const newCompletedTasks = isCompleted
      ? (userProgress?.completedTasks || []).filter(id => id !== taskId)
      : [...(userProgress?.completedTasks || []), taskId];

    const newProgress: UserProgress = {
      arrivalDate: userProgress?.arrivalDate || '',
      completedTasks: newCompletedTasks,
      lastUpdated: new Date().toISOString(),
    };

    setUserProgress(newProgress);
    setTasks(prevTasks =>
      prevTasks.map(t =>
        t.id === taskId
          ? {
              ...t,
              completed: !isCompleted,
              completedDate: !isCompleted ? new Date().toISOString() : undefined,
            }
          : t
      )
    );
  };

  const clearProgress = () => {
    if (confirm('Are you sure you want to clear all progress? This cannot be undone.')) {
      clearStoredProgress();
      setUserProgress(null);
      setTasks(initialTasks);
    }
  };

  const exportProgress = (): string => {
    if (!userProgress) {
      return JSON.stringify({ error: 'No progress to export' });
    }
    return exportProgressAsJSON(userProgress);
  };

  const importProgress = (data: string) => {
    try {
      const progress = importProgressFromJSON(data);
      if (progress) {
        setUserProgress(progress);
        setTasks(prevTasks =>
          prevTasks.map(task => ({
            ...task,
            completed: progress.completedTasks.includes(task.id),
          }))
        );
        alert('Progress imported successfully!');
      } else {
        alert('Invalid progress data. Please check your file.');
      }
    } catch (error) {
      alert('Failed to import progress. Please check your data format.');
    }
  };

  const getTaskById = (taskId: string): Task | undefined => {
    return tasks.find(t => t.id === taskId);
  };

  const getTasksByCategory = (category: TaskCategory): Task[] => {
    return tasks.filter(t => t.category === category);
  };

  const getOverdueTasks = (): Task[] => {
    if (!userProgress?.arrivalDate) return [];
    return tasks.filter(task => isTaskOverdue(userProgress.arrivalDate, task));
  };

  const getUpcomingTasks = (days: number = 7): Task[] => {
    if (!userProgress?.arrivalDate) return [];
    return tasks.filter(task => isTaskUpcoming(userProgress.arrivalDate, task, days));
  };

  const getProgressPercentage = (): number => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.completed).length;
    return Math.round((completed / tasks.length) * 100);
  };

  const value: ChecklistContextType = {
    tasks,
    userProgress,
    setArrivalDate,
    toggleTask,
    clearProgress,
    exportProgress,
    importProgress,
    getTaskById,
    getTasksByCategory,
    getOverdueTasks,
    getUpcomingTasks,
    getProgressPercentage,
  };

  return (
    <ChecklistContext.Provider value={value}>
      {children}
    </ChecklistContext.Provider>
  );
}

export function useChecklist() {
  const context = useContext(ChecklistContext);
  if (context === undefined) {
    throw new Error('useChecklist must be used within a ChecklistProvider');
  }
  return context;
}
