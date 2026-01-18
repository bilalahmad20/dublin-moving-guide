'use client';

import { useChecklist } from '@/contexts/ChecklistContext';
import ChecklistItem from '@/components/ChecklistItem';
import { sortTasksByDeadline, getDaysSinceArrival, getTaskDeadlineDate } from '@/lib/utils';
import { Calendar, AlertCircle } from 'lucide-react';

export default function TimelinePage() {
  const { tasks, userProgress } = useChecklist();

  const sortedTasks = sortTasksByDeadline(tasks);
  const daysSince = userProgress?.arrivalDate
    ? getDaysSinceArrival(userProgress.arrivalDate)
    : null;

  if (!userProgress?.arrivalDate) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">📅 Timeline View</h1>
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8 text-center">
          <Calendar className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-yellow-900 mb-2">
            Set Your Arrival Date First
          </h2>
          <p className="text-yellow-800 mb-4">
            To view tasks on a timeline, please set your arrival date on the home page.
          </p>
          <a
            href="/dublin-moving-guide"
            className="inline-block px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-medium"
          >
            Go to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📅 Timeline View</h1>
        <p className="text-gray-600">
          All tasks organized by deadline relative to your arrival date
        </p>
      </div>

      {/* Current Status */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-blue-800">
            <span className="font-medium">Day {daysSince}</span> since arrival •{' '}
            {new Date(userProgress.arrivalDate).toLocaleDateString('en-IE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {sortedTasks.map((task, index) => {
          const deadline = task.deadline;
          const deadlineDate = getTaskDeadlineDate(userProgress.arrivalDate, deadline);
          const isPast = daysSince !== null && daysSince > deadline;
          const isCurrent = daysSince !== null && Math.abs(daysSince - deadline) <= 3;

          return (
            <div key={task.id} className="relative">
              {/* Timeline connector */}
              {index !== 0 && (
                <div className="absolute left-4 -top-4 w-0.5 h-4 bg-gray-300" />
              )}

              {/* Timeline dot */}
              <div className="flex items-start">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                    task.completed
                      ? 'bg-green-500 border-green-200'
                      : isCurrent
                      ? 'bg-yellow-500 border-yellow-200 animate-pulse'
                      : isPast && !task.completed
                      ? 'bg-red-500 border-red-200'
                      : 'bg-blue-500 border-blue-200'
                  }`}
                >
                  {isCurrent && !task.completed && (
                    <AlertCircle className="w-4 h-4 text-white" />
                  )}
                </div>

                <div className="ml-4 flex-1">
                  {/* Deadline info */}
                  <div className="mb-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        task.completed
                          ? 'bg-green-100 text-green-800'
                          : isPast
                          ? 'bg-red-100 text-red-800'
                          : isCurrent
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      Day {deadline < 0 ? `${deadline}` : `+${deadline}`} •{' '}
                      {deadlineDate.toLocaleDateString('en-IE', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  {/* Task card */}
                  <ChecklistItem task={task} showCategory />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
