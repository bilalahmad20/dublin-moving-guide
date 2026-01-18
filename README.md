# 🇮🇪 Dublin Moving Guide

An interactive website for helping colleagues move to Dublin, Ireland on work permits. Track your progress through all essential tasks from PPS number application to IRP registration.

## ✨ Features

- **Interactive Checklist**: Track completion of all moving tasks with dependencies
- **Timeline View**: Visualize tasks relative to your arrival date
- **Complete Guide**: Detailed information covering every step
- **Resources Hub**: All important links and contacts in one place
- **Progress Tracking**: LocalStorage automatically saves your progress
- **Export/Import**: Backup and restore your progress as JSON
- **Mobile Responsive**: Works perfectly on all devices

## 📋 What's Included

All content from the comprehensive PDF guide:
- Pre-arrival preparations and document checklist
- Airport transportation options (Taxi, Aircoach, Dublin Express)
- Irish SIM cards (Three €20/month, GoMo €14.99/month)
- Digital banking (Wise & Revolut setup)
- PPS Number application (step-by-step)
- IRP registration (within 90 days)
- Tax/Revenue registration to avoid emergency tax
- Housing search tips with scam warnings
- All official government links
- Over 25 actionable tasks with deadlines

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000/dublin-moving-guide`

## 📦 Deployment to GitHub Pages

### 1. Create GitHub Repository

```bash
cd /Users/work/dublin-moving-guide
git init
git add .
git commit -m "feat: Dublin Moving Guide - interactive website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dublin-moving-guide.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. The workflow will automatically run on push to `main`

### 3. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/dublin-moving-guide/
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
- Builds the Next.js static export
- Deploys to GitHub Pages
- Runs on every push to `main` branch

## 🏗️ Project Structure

```
dublin-moving-guide/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage/dashboard
│   ├── checklist/         # Full checklist page
│   ├── timeline/          # Timeline visualization
│   ├── guide/             # Guide sections
│   │   ├── page.tsx       # Guide index
│   │   └── [slug]/        # Dynamic guide pages
│   └── resources/         # Resources directory
├── components/            # React components
│   ├── Navigation.tsx     # Site navigation
│   ├── ProgressBar.tsx    # Progress indicator
│   └── ChecklistItem.tsx  # Individual task component
├── contexts/              # React Context
│   └── ChecklistContext.tsx  # State management + localStorage
├── data/                  # Content data files
│   ├── checklist.ts       # 25+ tasks with metadata
│   ├── guide-content.ts   # 8 detailed guide sections
│   └── resources.ts       # Categorized external links
├── lib/                   # Utilities
│   ├── utils.ts           # Helper functions
│   └── localStorage.ts    # Progress persistence
├── types/                 # TypeScript definitions
│   └── index.ts           # All type definitions
└── .github/workflows/     # CI/CD
    └── deploy.yml         # GitHub Pages deployment
```

## 🎨 Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **GitHub Pages** for hosting

## 📝 Updating Content

### Adding New Tasks

Edit `data/checklist.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Task Title',
  description: 'Detailed description',
  category: 'week-1', // pre-arrival | week-1 | month-1 | 90-days | ongoing
  priority: 'critical', // critical | high | medium | low
  deadline: 7, // Days after arrival (negative for before arrival)
  estimatedTime: '1-2 hours',
  cost: '€300', // Optional
  documents: ['Passport', 'PPS Number'], // Required docs
  tips: ['Helpful tip 1', 'Helpful tip 2'],
  links: [{
    title: 'Official Website',
    url: 'https://example.ie',
    type: 'official' // official | form | booking | info
  }],
  dependencies: ['other-task-id'], // Tasks that must be done first
  completed: false,
}
```

### Adding Guide Sections

Edit `data/guide-content.ts`:

```typescript
{
  id: 'section-id',
  title: 'Section Title',
  slug: 'url-slug',
  priority: 1, // For ordering
  content: `# Markdown or HTML content here...`,
  relatedTasks: ['task-01', 'task-02'],
  externalLinks: [/* ... */],
  faqs: [{
    question: 'Common question?',
    answer: 'Detailed answer...'
  }]
}
```

### Adding Resources

Edit `data/resources.ts`:

```typescript
{
  id: 'resource-id',
  title: 'Resource Name',
  category: 'government', // government | housing | banking | mobile | transportation | community | emergency
  description: 'What this resource provides',
  links: [{
    title: 'Link Text',
    url: 'https://example.ie',
    type: 'official',
    description: 'Optional extra info'
  }]
}
```

## 🧪 Building & Testing

```bash
# Development
npm run dev

# Type checking
npx tsc --noEmit

# Build for production
npm run build

# Preview production build (after npm run build)
npx serve out
```

The build creates a static export in the `./out` directory.

## 🔮 Future Enhancements

Features that could be added:

- ⚠️ **Password Protection**: Add simple auth for internal use
- 🌙 **Dark Mode**: Toggle for dark/light themes
- 🔍 **Search**: Global search across all content
- ⏰ **Reminders**: Email/browser notifications for upcoming tasks
- 📅 **Calendar Export**: Download tasks as .ics file
- 🌐 **Multi-language**: Support for Arabic, Spanish, etc.
- 📊 **Analytics**: Track which tasks take longest
- 💬 **Comments**: Community tips on tasks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make changes and test: `npm run build`
4. Commit: `git commit -m "feat: add amazing feature"`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is for internal use to help colleagues relocate to Dublin.

## 💡 Support

- **Website Issues**: Create an issue on GitHub
- **Moving Questions**: Refer to guide sections or contact Bilal (guide author)

## 🙏 Acknowledgments

- Original PDF guide created by Bilal
- Built with [Claude Code](https://claude.ai/claude-code)
- Deployed on GitHub Pages

---

**Live Site**: `https://YOUR_USERNAME.github.io/dublin-moving-guide/`

Built with ❤️ for colleagues moving to Dublin
