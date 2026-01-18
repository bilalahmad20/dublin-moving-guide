# Changelog

All notable changes to the Dublin Moving Guide will be documented in this file.

## [1.0.0] - 2026-01-18

### Added
- Initial release of Dublin Moving Guide interactive website
- Complete checklist with 25+ tasks covering pre-arrival to 90-day deadlines
- Interactive task tracking with dependencies and localStorage persistence
- Timeline view showing tasks relative to arrival date
- Comprehensive guide sections covering:
  - Before travel preparations
  - Airport arrival and transportation
  - Getting Irish SIM card (Three, GoMo)
  - Banking setup (Wise, Revolut)
  - PPS Number application process
  - IRP registration (within 90 days)
  - Tax/Revenue registration
  - Housing search with scam warnings
- Resources page with categorized external links
- Progress tracking with export/import functionality
- Responsive design for mobile and desktop
- GitHub Pages deployment via GitHub Actions
- Over 50 external links to official Irish government services
- FAQs for common questions
- Task filtering by category and completion status
- Visual progress bar
- Deadline tracking and overdue alerts

### Features
- **Progress Persistence**: Automatic save to localStorage
- **Export/Import**: Backup and restore progress as JSON
- **Task Dependencies**: Can't complete tasks without prerequisites
- **Arrival Date Tracking**: Calculates deadlines relative to arrival
- **Category Organization**: Pre-arrival, Week 1, Month 1, 90-days, Ongoing
- **Priority Levels**: Critical, High, Medium, Low
- **Cost Indicators**: Shows fees for tasks (e.g., €300 IRP fee)
- **Time Estimates**: Expected duration for each task
- **Required Documents**: Lists what you need for each task
- **Tips & Tricks**: Helpful advice for each task
- **External Links**: Direct links to official websites

### Technical
- Built with Next.js 14+ and TypeScript
- Styled with Tailwind CSS
- Icons from Lucide React
- Configured for static export to GitHub Pages
- React Context for state management
- Type-safe with comprehensive TypeScript definitions

---

## Future Versions (Planned)

### [1.1.0] - Planned
- Password protection for internal use
- Dark mode toggle
- Search functionality across all content

### [1.2.0] - Planned
- Email/browser reminders for upcoming tasks
- Calendar export (.ics files)
- Multi-language support (Arabic, Spanish)

### [1.3.0] - Planned
- Community comments on tasks
- Analytics for common bottlenecks
- Admin panel for content updates
