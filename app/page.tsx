'use client';

import { useChecklist } from '@/contexts/ChecklistContext';
import { CheckCircle2, Circle, ChevronRight, Calendar, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const { tasks, toggleTask, userProgress, setArrivalDate } = useChecklist();
  const [currentStep, setCurrentStep] = useState(0);
  const [showArrivalPicker, setShowArrivalPicker] = useState(false);
  const [dateInput, setDateInput] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!userProgress?.arrivalDate) {
      setShowArrivalPicker(true);
    }
  }, [userProgress?.arrivalDate]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  const handleSetDate = () => {
    if (dateInput) {
      setArrivalDate(dateInput);
      setShowArrivalPicker(false);
    }
  };

  // Show arrival date picker if not set
  if (showArrivalPicker || !userProgress?.arrivalDate) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🇮🇪 Welcome to Your Dublin Moving Guide!
            </h1>
            <p className="text-lg text-gray-600">
              Let's get started with your move to Dublin, Ireland
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-green-600" />
              Step 1: When are you arriving in Dublin?
            </h2>
            <p className="text-gray-700 mb-4">
              Enter your arrival date (or planned date) so we can track important deadlines like PPS Number and IRP registration.
            </p>
            <div className="space-y-3">
              <input
                type="date"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                className="w-full px-4 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500 text-lg"
                min={new Date().toISOString().split('T')[0]}
              />
              <button
                onClick={handleSetDate}
                disabled={!dateInput}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
              >
                Continue →
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">What happens next?</p>
                <p>You'll see a simple step-by-step checklist of everything you need to do, from getting your SIM card to registering for your IRP card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate progress
  const completedTasks = tasks.filter(t => t.completed).length;
  const totalTasks = tasks.length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  // Group tasks by category in order
  const taskGroups = [
    { category: 'pre-arrival', title: '📋 Before You Travel', color: 'purple' },
    { category: 'week-1', title: '🛬 First Week in Dublin', color: 'blue' },
    { category: 'month-1', title: '📱 First Month Tasks', color: 'green' },
    { category: '90-days', title: '🏛️ Within 90 Days (Critical!)', color: 'red' },
    { category: 'ongoing', title: '🏠 Ongoing Tasks', color: 'gray' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header with Progress */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Your Dublin Moving Checklist
            </h1>
            <p className="text-gray-600 mt-1">
              Follow these steps in order. Check off each task as you complete it.
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm font-bold text-green-600">{completedTasks} of {totalTasks} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-green-600">{progressPercent}%</span>
          </div>
        </div>

        {/* Arrival Date Info */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-gray-800">
              <span className="font-medium">Arrival Date:</span>{' '}
              {new Date(userProgress.arrivalDate).toLocaleDateString('en-IE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <button
            onClick={() => setShowArrivalPicker(true)}
            className="text-sm text-green-700 hover:text-green-900 underline"
          >
            Change
          </button>
        </div>
      </div>

      {/* Step-by-Step Checklist */}
      {taskGroups.map((group) => {
        const groupTasks = tasks.filter(t => t.category === group.category);
        const completedCount = groupTasks.filter(t => t.completed).length;
        const allCompleted = completedCount === groupTasks.length;

        return (
          <div key={group.category} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Group Header */}
            <div className={`p-4 ${allCompleted ? 'bg-green-50' : 'bg-gray-50'} border-b border-gray-200`}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  {allCompleted && <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />}
                  {group.title}
                </h2>
                <span className="text-sm font-medium text-gray-600">
                  {completedCount}/{groupTasks.length} done
                </span>
              </div>
            </div>

            {/* Tasks */}
            <div className="divide-y divide-gray-200">
              {groupTasks.map((task, idx) => (
                <div
                  key={task.id}
                  className={`p-4 hover:bg-gray-50 transition-colors ${task.completed ? 'opacity-75' : ''}`}
                >
                  <div className="flex items-start">
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="mt-1 mr-4 flex-shrink-0"
                    >
                      {task.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400 hover:text-green-600" />
                      )}
                    </button>

                    {/* Task Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className={`font-semibold text-gray-900 ${task.completed ? 'line-through' : ''}`}>
                            {task.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{task.description}</p>

                          {/* Details */}
                          <div className="mt-2 flex flex-wrap gap-3 text-xs">
                            {task.estimatedTime && (
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                ⏱️ {task.estimatedTime}
                              </span>
                            )}
                            {task.cost && (
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                💰 {task.cost}
                              </span>
                            )}
                            {task.priority === 'critical' && (
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                                🚨 CRITICAL
                              </span>
                            )}
                          </div>

                          {/* Tips */}
                          {task.tips && task.tips.length > 0 && (
                            <div className="mt-3 bg-blue-50 border border-blue-200 rounded p-3">
                              <p className="text-xs font-medium text-blue-900 mb-1">💡 Tips:</p>
                              <ul className="text-xs text-blue-800 space-y-1">
                                {task.tips.map((tip, i) => (
                                  <li key={i}>• {tip}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Links */}
                          {task.links && task.links.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {task.links.map((link, i) => (
                                <a
                                  key={i}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-600 hover:text-blue-800 underline flex items-center"
                                >
                                  🔗 {link.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Completion Message */}
      {progressPercent === 100 && (
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-900 mb-2">
            Congratulations!
          </h2>
          <p className="text-lg text-green-800">
            You've completed all the essential tasks for moving to Dublin. Welcome to Ireland!
          </p>
        </div>
      )}
    </div>
  );
}
