'use client';

import { useChecklist } from '@/contexts/ChecklistContext';
import { CheckCircle2, Circle, Calendar, Info, ChevronDown, ChevronUp, ExternalLink, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getGuideSectionBySlug } from '@/data/guide-content';
import GuideContentRenderer from '@/components/GuideContentRenderer';

export default function Home() {
  const { tasks, toggleTask, userProgress, setArrivalDate } = useChecklist();
  const [showArrivalPicker, setShowArrivalPicker] = useState(false);
  const [dateInput, setDateInput] = useState('');
  const [mounted, setMounted] = useState(false);
  const [expandedTasks, setExpandedTasks] = useState<Record<string, boolean>>({});

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

  const toggleTaskExpansion = (taskId: string) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  // Get guide section details for a task category
  const getGuideDetailsForCategory = (category: string) => {
    const categoryToSlugMap: Record<string, string> = {
      'pre-arrival': 'before-travel',
      'week-1': 'arrival',
      'month-1': 'pps-number',
      '90-days': 'irp-registration',
      'ongoing': 'housing',
    };

    const slug = categoryToSlugMap[category];
    return slug ? getGuideSectionBySlug(slug) : null;
  };

  // Show arrival date picker if not set
  if (showArrivalPicker || !userProgress?.arrivalDate) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          {/* Personal Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-[#6765E8] to-[#1CBC97] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              From your colleague Bilal 👋
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              🇮🇪 Your Complete Dublin Moving Guide
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I moved to Dublin, I had to figure everything out the hard way.
              I created this step-by-step guide so you don't have to! Follow my exact journey with every deadline,
              tip, and resource you need to settle in smoothly.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#6765E8] to-[#1CBC97] rounded-lg p-6 mb-6 text-white">
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Let's Start: When Are You Arriving?
            </h2>
            <p className="mb-4 opacity-90">
              Trust me, the PPS Number and IRP have strict deadlines (I almost missed mine!).
              Enter your arrival date so we can track everything together.
            </p>
            <div className="space-y-3">
              <input
                type="date"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                className="w-full px-4 py-3 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-lg text-gray-900"
                min={new Date().toISOString().split('T')[0]}
              />
              <button
                onClick={handleSetDate}
                disabled={!dateInput}
                className="w-full px-6 py-3 bg-white text-[#6765E8] rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
              >
                Let's Go! →
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-[#6765E8] mt-0.5 mr-2 flex-shrink-0" />
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">What you'll get:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>My complete step-by-step journey from arrival to settled</li>
                  <li>Detailed explanations of WHY each step matters</li>
                  <li>All the mistakes I made so you can avoid them</li>
                  <li>Direct links to every website, form, and booking you need</li>
                </ul>
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
    {
      category: 'pre-arrival',
      title: '📋 Before You Travel',
      subtitle: 'Get these sorted before your flight',
      color: 'purple',
      story: "I packed my bags thinking I was ready, but there were documents I almost forgot that would have caused major problems at Dublin immigration. Don't make my mistake!"
    },
    {
      category: 'week-1',
      title: '🛬 First Week in Dublin',
      subtitle: 'Your first 7 days - getting settled',
      color: 'blue',
      story: "My first week was chaotic. No SIM card, no way to pay for things, and I had no idea where to start with banking. Here's what you need to do immediately."
    },
    {
      category: 'month-1',
      title: '📱 First Month Tasks',
      subtitle: 'Critical setup - PPS Number & Tax',
      color: 'green',
      story: "This is where I almost got hit with emergency tax (50%!). The PPS Number process confused me at first, but once I figured it out, it was straightforward. Let me show you."
    },
    {
      category: '90-days',
      title: '🏛️ Within 90 Days (CRITICAL!)',
      subtitle: 'IRP registration - legally required',
      color: 'red',
      story: "The IRP (immigration card) has a strict 90-day deadline from arrival. I booked mine at day 85 and was stressed! Book as early as possible. This is legally required and costs €300."
    },
    {
      category: 'ongoing',
      title: '🏠 Ongoing & Long-term',
      subtitle: 'Housing and settling in',
      color: 'gray',
      story: "Finding housing in Dublin is tough. I stayed in a hotel for 3 weeks while searching. Here's how to avoid scams and find a real place."
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Personal Header */}
      <div className="bg-gradient-to-br from-[#6765E8] to-[#1CBC97] rounded-xl shadow-lg p-8 text-white">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-3">
              From Bilal • Userpilot Colleague 👋
            </div>
            <h1 className="text-3xl font-bold mb-2">
              Your Complete Dublin Moving Guide
            </h1>
            <p className="text-white/90">
              Follow my exact journey from work permit to fully settled in Dublin.
              I've included every detail, deadline, and lesson learned so your move is stress-free.
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Your Progress</span>
            <span className="text-sm font-bold">{completedTasks} of {totalTasks} completed</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-3xl font-bold">{progressPercent}%</span>
          </div>
        </div>

        {/* Arrival Date */}
        <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="text-sm">
              <span className="font-medium">Your Arrival:</span>{' '}
              {new Date(userProgress.arrivalDate).toLocaleDateString('en-IE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <button
            onClick={() => setShowArrivalPicker(true)}
            className="text-sm hover:text-white/80 underline"
          >
            Change
          </button>
        </div>
      </div>

      {/* Story-driven Checklist */}
      {taskGroups.map((group) => {
        const groupTasks = tasks.filter(t => t.category === group.category);
        const completedCount = groupTasks.filter(t => t.completed).length;
        const allCompleted = completedCount === groupTasks.length;
        const guideSection = getGuideDetailsForCategory(group.category);

        return (
          <div key={group.category} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            {/* Group Header */}
            <div className={`p-6 ${allCompleted ? 'bg-green-50 border-b-2 border-green-200' : 'bg-gray-50 border-b border-gray-200'}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {allCompleted && <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />}
                    <h2 className="text-2xl font-bold text-gray-900">
                      {group.title}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{group.subtitle}</p>
                </div>
                <span className="text-sm font-semibold text-gray-600 bg-white px-3 py-1 rounded-full">
                  {completedCount}/{groupTasks.length}
                </span>
              </div>

              {/* Bilal's Story */}
              <div className="bg-white/60 border-l-4 border-[#6765E8] rounded p-3 mt-3">
                <p className="text-sm text-gray-700 italic">
                  <span className="font-semibold not-italic text-[#6765E8]">Bilal's story:</span> {group.story}
                </p>
              </div>
            </div>

            {/* Tasks */}
            <div className="divide-y divide-gray-200">
              {groupTasks.map((task) => {
                const isExpanded = expandedTasks[task.id];

                return (
                  <div
                    key={task.id}
                    className={`p-5 transition-colors ${task.completed ? 'bg-green-50/30' : 'hover:bg-gray-50'}`}
                  >
                    <div className="flex items-start">
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleTask(task.id)}
                        className="mt-1 mr-4 flex-shrink-0"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-7 h-7 text-green-600" />
                        ) : (
                          <Circle className="w-7 h-7 text-gray-400 hover:text-[#6765E8]" />
                        )}
                      </button>

                      {/* Task Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className={`text-lg font-semibold text-gray-900 ${task.completed ? 'line-through' : ''}`}>
                              {task.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{task.description}</p>

                            {/* Quick Info Badges */}
                            <div className="mt-3 flex flex-wrap gap-2 text-xs">
                              {task.estimatedTime && (
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                                  ⏱️ {task.estimatedTime}
                                </span>
                              )}
                              {task.cost && (
                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                                  💰 {task.cost}
                                </span>
                              )}
                              {task.priority === 'critical' && (
                                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                                  🚨 CRITICAL
                                </span>
                              )}
                            </div>

                            {/* Expand/Collapse Button */}
                            <button
                              onClick={() => toggleTaskExpansion(task.id)}
                              className="mt-3 inline-flex items-center text-sm font-medium text-[#6765E8] hover:text-[#1CBC97] transition-colors"
                            >
                              {isExpanded ? (
                                <>
                                  Hide Details <ChevronUp className="w-4 h-4 ml-1" />
                                </>
                              ) : (
                                <>
                                  Click Here for Full Details <ChevronDown className="w-4 h-4 ml-1" />
                                </>
                              )}
                            </button>

                            {/* Expanded Details */}
                            {isExpanded && (
                              <div className="mt-4 space-y-4">
                                {/* Tips Section */}
                                {task.tips && task.tips.length > 0 && (
                                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
                                      💡 Bilal's Tips & Things I Learned:
                                    </p>
                                    <ul className="text-sm text-blue-800 space-y-2">
                                      {task.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start">
                                          <span className="mr-2">•</span>
                                          <span>{tip}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Documents Needed */}
                                {task.documents && task.documents.length > 0 && (
                                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                    <p className="text-sm font-semibold text-purple-900 mb-2">
                                      📄 Documents You'll Need:
                                    </p>
                                    <ul className="text-sm text-purple-800 space-y-1">
                                      {task.documents.map((doc, i) => (
                                        <li key={i}>✓ {doc}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Links */}
                                {task.links && task.links.length > 0 && (
                                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <p className="text-sm font-semibold text-green-900 mb-2">
                                      🔗 Official Links (The actual websites I used):
                                    </p>
                                    <div className="space-y-2">
                                      {task.links.map((link, i) => (
                                        <a
                                          key={i}
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center text-sm text-[#6765E8] hover:text-[#1CBC97] font-medium"
                                        >
                                          <ExternalLink className="w-4 h-4 mr-1" />
                                          {link.title}
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
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section Guide Details */}
            {guideSection && (
              <div className="bg-gradient-to-r from-[#6765E8]/5 to-[#1CBC97]/5 p-6 border-t border-gray-200">
                <button
                  onClick={() => toggleTaskExpansion(`guide-${group.category}`)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      📖 Complete Guide: {guideSection.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Click to read the full detailed explanation and everything I learned about this phase
                    </p>
                  </div>
                  {expandedTasks[`guide-${group.category}`] ? (
                    <ChevronUp className="w-5 h-5 text-[#6765E8] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6765E8] flex-shrink-0" />
                  )}
                </button>

                {expandedTasks[`guide-${group.category}`] && (
                  <div className="mt-4 bg-white rounded-lg p-6 border border-gray-200">
                    <GuideContentRenderer content={guideSection.content} />

                    {/* FAQs */}
                    {guideSection.faqs && guideSection.faqs.length > 0 && (
                      <div className="mt-6 space-y-4">
                        <h4 className="text-base font-bold text-gray-900 mb-3">❓ Common Questions I Had:</h4>
                        {guideSection.faqs.map((faq, idx) => (
                          <div key={idx} className="bg-blue-50 rounded-lg p-4">
                            <p className="font-semibold text-gray-900 mb-2">{faq.question}</p>
                            <p className="text-sm text-gray-700">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* External Links */}
                    {guideSection.externalLinks && guideSection.externalLinks.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-base font-bold text-gray-900 mb-3">🔗 Official Resources:</h4>
                        <div className="space-y-2">
                          {guideSection.externalLinks.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-[#6765E8] hover:text-[#1CBC97] font-medium"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {link.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Completion Message */}
      {progressPercent === 100 && (
        <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-900 mb-2">
            Amazing! You Did It!
          </h2>
          <p className="text-lg text-green-800 mb-4">
            You've completed all the essential tasks. Welcome to Dublin and welcome to the Userpilot team!
          </p>
          <p className="text-sm text-green-700 italic">
            - Bilal 🇮🇪
          </p>
        </div>
      )}

      {/* Need Help Section */}
      <div className="bg-gradient-to-r from-[#6765E8] to-[#1CBC97] rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-start">
          <MessageCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Stuck? Need Help?</h3>
            <p className="mb-3 opacity-90">
              I went through all of this myself! If you have any questions, get confused, or just want to
              double-check something, reach out to me directly.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold mb-2">📧 Contact Bilal:</p>
              <ul className="space-y-1 text-sm">
                <li>💬 <strong>Slack:</strong> @bilal</li>
                <li>📧 <strong>Email:</strong> bilal@userpilot.com</li>
              </ul>
            </div>
            <p className="text-sm mt-3 italic opacity-80">
              Seriously, don't hesitate! I'm happy to help and answer any questions. Moving to Dublin can be confusing,
              and I want your transition to be smooth.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
        <p className="text-sm text-gray-600">
          💚 Created with care by <span className="font-semibold text-[#6765E8]">Bilal</span> for Userpilot colleagues
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Last updated: January 2026
        </p>
      </div>
    </div>
  );
}
