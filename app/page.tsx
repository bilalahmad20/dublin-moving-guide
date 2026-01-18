'use client';

import { useChecklist } from '@/contexts/ChecklistContext';
import ProgressBar from '@/components/ProgressBar';
import ChecklistItem from '@/components/ChecklistItem';
import Link from 'next/link';
import {
  Calendar,
  CheckSquare,
  BookOpen,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const {
    userProgress,
    setArrivalDate,
    getOverdueTasks,
    getUpcomingTasks,
    getTasksByCategory,
  } = useChecklist();

  const [showArrivalDatePicker, setShowArrivalDatePicker] = useState(
    !userProgress?.arrivalDate
  );
  const [dateInput, setDateInput] = useState('');

  const overdueTasks = getOverdueTasks();
  const upcomingTasks = getUpcomingTasks(7);
  const criticalTasks = getTasksByCategory('pre-arrival').concat(
    getTasksByCategory('week-1')
  ).filter(t => !t.completed && t.priority === 'critical').slice(0, 3);

  const handleSetArrivalDate = () => {
    if (dateInput) {
      setArrivalDate(dateInput);
      setShowArrivalDatePicker(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border border-green-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🇮🇪 Welcome to Dublin!
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Your comprehensive guide to moving to Ireland on a work permit
            </p>
            <p className="text-gray-600">
              This interactive guide will help you navigate through all the essential
              tasks: PPS number, IRP registration, banking, housing, and more. Track
              your progress and never miss a deadline!
            </p>
          </div>
        </div>
      </div>

      {/* Arrival Date Section */}
      {showArrivalDatePicker || !userProgress?.arrivalDate ? (
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
          <div className="flex items-start">
            <Calendar className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-yellow-900 mb-2">
                Set Your Arrival Date
              </h2>
              <p className="text-yellow-800 mb-4">
                To track deadlines and get personalized reminders, please set your
                arrival date in Dublin (or planned arrival date).
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="date"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="px-4 py-2 border-2 border-yellow-300 rounded-lg focus:outline-none focus:border-yellow-500"
                />
                <button
                  onClick={handleSetArrivalDate}
                  disabled={!dateInput}
                  className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Save Arrival Date
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800">
                <span className="font-medium">Arrival Date:</span>{' '}
                {new Date(userProgress.arrivalDate).toLocaleDateString('en-IE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <button
              onClick={() => setShowArrivalDatePicker(true)}
              className="text-sm text-green-700 hover:text-green-900 underline"
            >
              Change
            </button>
          </div>
        </div>
      )}

      {/* Progress Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
          Your Progress
        </h2>
        <ProgressBar />
      </div>

      {/* Alerts Section */}
      {(overdueTasks.length > 0 || upcomingTasks.length > 0) && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Overdue Tasks */}
          {overdueTasks.length > 0 && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold text-red-900">
                  Overdue Tasks ({overdueTasks.length})
                </h3>
              </div>
              <ul className="space-y-2">
                {overdueTasks.slice(0, 3).map((task) => (
                  <li key={task.id} className="text-red-800">
                    • {task.title}
                  </li>
                ))}
              </ul>
              {overdueTasks.length > 3 && (
                <Link
                  href="/dublin-moving-guide/checklist"
                  className="text-red-700 hover:text-red-900 font-medium mt-2 inline-block"
                >
                  View all →
                </Link>
              )}
            </div>
          )}

          {/* Upcoming Tasks */}
          {upcomingTasks.length > 0 && (
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-yellow-600 mr-2" />
                <h3 className="text-xl font-semibold text-yellow-900">
                  Due This Week ({upcomingTasks.length})
                </h3>
              </div>
              <ul className="space-y-2">
                {upcomingTasks.slice(0, 3).map((task) => (
                  <li key={task.id} className="text-yellow-800">
                    • {task.title}
                  </li>
                ))}
              </ul>
              {upcomingTasks.length > 3 && (
                <Link
                  href="/dublin-moving-guide/timeline"
                  className="text-yellow-700 hover:text-yellow-900 font-medium mt-2 inline-block"
                >
                  View timeline →
                </Link>
              )}
            </div>
          )}
        </div>
      )}

      {/* Critical Tasks */}
      {criticalTasks.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
            Critical Tasks
          </h2>
          <div className="space-y-4">
            {criticalTasks.map((task) => (
              <ChecklistItem key={task.id} task={task} showCategory />
            ))}
          </div>
        </div>
      )}

      {/* Quick Links */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Link
          href="/dublin-moving-guide/checklist"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-300"
        >
          <CheckSquare className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Full Checklist
          </h3>
          <p className="text-sm text-gray-600">
            See all tasks organized by timeline
          </p>
        </Link>

        <Link
          href="/dublin-moving-guide/timeline"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300"
        >
          <Calendar className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Timeline View
          </h3>
          <p className="text-sm text-gray-600">
            Visualize tasks on a timeline
          </p>
        </Link>

        <Link
          href="/dublin-moving-guide/guide"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-purple-300"
        >
          <BookOpen className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Complete Guide
          </h3>
          <p className="text-sm text-gray-600">
            Read detailed information
          </p>
        </Link>
      </div>
    </div>
  );
}
