'use client';

import { Task } from '@/types';
import { useChecklist } from '@/contexts/ChecklistContext';
import {
  Check,
  Clock,
  AlertCircle,
  ExternalLink,
  FileText,
  Lightbulb,
  Euro,
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import {
  getTaskStatusColor,
  getPriorityColor,
  getCategoryLabel,
  canCompleteTask,
  getDaysSinceArrival,
} from '@/lib/utils';

interface ChecklistItemProps {
  task: Task;
  showCategory?: boolean;
}

export default function ChecklistItem({ task, showCategory = false }: ChecklistItemProps) {
  const { toggleTask, userProgress, getTaskById } = useChecklist();
  const [isExpanded, setIsExpanded] = useState(false);

  const canComplete = canCompleteTask(task, userProgress?.completedTasks || []);
  const statusColor = getTaskStatusColor(task, userProgress?.arrivalDate || null);
  const priorityColor = getPriorityColor(task.priority);

  const daysSinceArrival = userProgress?.arrivalDate
    ? getDaysSinceArrival(userProgress.arrivalDate)
    : null;

  const daysUntilDeadline =
    daysSinceArrival !== null ? task.deadline - daysSinceArrival : null;

  const getDependencyNames = () => {
    if (!task.dependencies) return [];
    return task.dependencies
      .map(depId => getTaskById(depId))
      .filter(Boolean)
      .map(dep => dep!.title);
  };

  return (
    <div
      className={`border-2 rounded-lg p-4 ${statusColor} transition-all hover:shadow-md`}
    >
      <div className="flex items-start space-x-3">
        {/* Checkbox */}
        <div className="flex-shrink-0 pt-1">
          <button
            onClick={() => toggleTask(task.id)}
            disabled={!canComplete && !task.completed}
            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
              task.completed
                ? 'bg-green-500 border-green-500'
                : canComplete
                ? 'border-gray-300 hover:border-green-500 hover:bg-green-50'
                : 'border-gray-200 bg-gray-100 cursor-not-allowed'
            }`}
            title={
              !canComplete && !task.completed
                ? 'Complete required tasks first'
                : task.completed
                ? 'Mark as incomplete'
                : 'Mark as complete'
            }
          >
            {task.completed && <Check className="w-4 h-4 text-white" />}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3
                className={`text-lg font-semibold ${
                  task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                }`}
              >
                {task.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{task.description}</p>
            </div>

            {/* Expand button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Metadata badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            {showCategory && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {getCategoryLabel(task.category)}
              </span>
            )}

            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${priorityColor}`}
            >
              {task.priority.toUpperCase()}
            </span>

            {task.estimatedTime && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                <Clock className="w-3 h-3 mr-1" />
                {task.estimatedTime}
              </span>
            )}

            {task.cost && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                <Euro className="w-3 h-3 mr-1" />
                {task.cost}
              </span>
            )}

            {daysUntilDeadline !== null && !task.completed && (
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  daysUntilDeadline < 0
                    ? 'bg-red-100 text-red-700'
                    : daysUntilDeadline <= 7
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                <CalendarIcon className="w-3 h-3 mr-1" />
                {daysUntilDeadline < 0
                  ? `Overdue by ${Math.abs(daysUntilDeadline)} days`
                  : daysUntilDeadline === 0
                  ? 'Due today'
                  : `${daysUntilDeadline} days left`}
              </span>
            )}
          </div>

          {/* Expanded content */}
          {isExpanded && (
            <div className="mt-4 space-y-3">
              {/* Dependencies */}
              {task.dependencies && task.dependencies.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                  <div className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">
                        Required tasks:
                      </p>
                      <ul className="text-sm text-yellow-700 mt-1 list-disc list-inside">
                        {getDependencyNames().map((name, idx) => (
                          <li key={idx}>{name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Required Documents */}
              {task.documents.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center mb-1">
                    <FileText className="w-4 h-4 mr-1" />
                    Required Documents:
                  </h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {task.documents.map((doc, idx) => (
                      <li key={idx}>{doc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tips */}
              {task.tips.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center mb-1">
                    <Lightbulb className="w-4 h-4 mr-1" />
                    Tips:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {task.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* External Links */}
              {task.links.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 flex items-center mb-1">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Useful Links:
                  </h4>
                  <div className="space-y-1">
                    {task.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {link.title} →
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
