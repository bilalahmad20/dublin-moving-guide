'use client';

import { useChecklist } from '@/contexts/ChecklistContext';

export default function ProgressBar() {
  const { getProgressPercentage, tasks } = useChecklist();

  const progress = getProgressPercentage();
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Overall Progress
        </span>
        <span className="text-sm font-semibold text-green-700">
          {completedCount} / {totalCount} tasks
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
          style={{ width: `${progress}%` }}
        >
          {progress > 10 && (
            <span className="text-xs font-bold text-white">{progress}%</span>
          )}
        </div>
      </div>
      {progress === 100 && (
        <p className="mt-2 text-sm text-green-700 font-semibold text-center">
          🎉 Congratulations! You've completed all tasks!
        </p>
      )}
    </div>
  );
}
