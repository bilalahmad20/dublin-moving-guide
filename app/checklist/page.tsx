'use client';

import { useChecklist } from '@/contexts/ChecklistContext';
import ChecklistItem from '@/components/ChecklistItem';
import ProgressBar from '@/components/ProgressBar';
import { getCategoryLabel } from '@/lib/utils';
import { TaskCategory } from '@/types';
import { Download, Upload, Trash2, Filter } from 'lucide-react';
import { useState } from 'react';

export default function ChecklistPage() {
  const {
    tasks,
    getTasksByCategory,
    exportProgress,
    importProgress,
    clearProgress,
  } = useChecklist();

  const [selectedCategory, setSelectedCategory] = useState<TaskCategory | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState(true);

  const categories: Array<TaskCategory | 'all'> = [
    'all',
    'pre-arrival',
    'week-1',
    'month-1',
    '90-days',
    'ongoing',
  ];

  const filteredTasks = selectedCategory === 'all'
    ? tasks
    : getTasksByCategory(selectedCategory);

  const displayedTasks = showCompleted
    ? filteredTasks
    : filteredTasks.filter(t => !t.completed);

  const handleExport = () => {
    const json = exportProgress();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dublin-guide-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          importProgress(content);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📋 Complete Checklist
        </h1>
        <p className="text-gray-600">
          Track all tasks needed to settle in Dublin. Check off items as you complete them.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <ProgressBar />
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 flex items-center mr-2">
              <Filter className="w-4 h-4 mr-1" />
              Filter:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'All' : getCategoryLabel(category)}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowCompleted(!showCompleted)}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm font-medium"
            >
              {showCompleted ? 'Hide' : 'Show'} Completed
            </button>
            <button
              onClick={handleExport}
              className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium flex items-center"
            >
              <Download className="w-4 h-4 mr-1" />
              Export
            </button>
            <button
              onClick={handleImport}
              className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium flex items-center"
            >
              <Upload className="w-4 h-4 mr-1" />
              Import
            </button>
            <button
              onClick={clearProgress}
              className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium flex items-center"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Clear All
            </button>
          </div>
        </div>
      </div>

      {/* Task Count */}
      <div className="text-sm text-gray-600">
        Showing {displayedTasks.length} of {tasks.length} tasks
        {selectedCategory !== 'all' && ` in ${getCategoryLabel(selectedCategory)}`}
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {displayedTasks.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500">
              {showCompleted
                ? 'No tasks found in this category.'
                : 'No incomplete tasks in this category. Great job!'}
            </p>
          </div>
        ) : (
          displayedTasks.map((task) => (
            <ChecklistItem key={task.id} task={task} showCategory={selectedCategory === 'all'} />
          ))
        )}
      </div>
    </div>
  );
}
