import { Resource } from '@/types';

export const resources: Resource[] = [
  // GOVERNMENT SERVICES
  {
    id: 'gov-01',
    title: 'MyGovID - Government Online Identity',
    category: 'government',
    description: 'Irish government online identity system. Required for accessing MyWelfare, Revenue, and other government services.',
    links: [
      {
        title: 'MyGovID Portal',
        url: 'https://www.mygovid.ie/',
        type: 'official',
      },
    ],
  },
  {
    id: 'gov-02',
    title: 'PPS Number Application',
    category: 'government',
    description: 'Personal Public Service Number - required for tax, social welfare, and public services.',
    links: [
      {
        title: 'MyWelfare - Apply for PPS',
        url: 'https://www.mywelfare.ie/',
        type: 'official',
      },
      {
        title: 'PPS Number Information',
        url: 'https://www.gov.ie/en/service/get-a-personal-public-service-pps-number/',
        type: 'official',
        description: 'Complete guide to getting a PPS number',
      },
    ],
  },
  {
    id: 'gov-03',
    title: 'Revenue - Irish Tax Authority',
    category: 'government',
    description: 'Register for tax, manage your PAYE, and avoid emergency tax.',
    links: [
      {
        title: 'Revenue myAccount',
        url: 'https://www.revenue.ie/en/online-services/services/myaccount.aspx',
        type: 'official',
      },
      {
        title: 'Starting Your First Job',
        url: 'https://www.revenue.ie/en/jobs-and-pensions/starting-your-first-job/index.aspx',
        type: 'official',
      },
    ],
  },
  {
    id: 'gov-04',
    title: 'IRP Registration (Immigration)',
    category: 'government',
    description: 'Irish Residence Permit registration - must book within 90 days of arrival.',
    links: [
      {
        title: 'Immigration Service Delivery Portal',
        url: 'https://www.irishimmigration.ie/',
        type: 'official',
      },
      {
        title: 'Book IRP Appointment',
        url: 'https://www.irishimmigration.ie/burgh-quay-appointments/',
        type: 'official',
      },
      {
        title: 'Required Documents',
        url: 'https://www.irishimmigration.ie/registering-your-immigration-permission/how-to-register-your-immigration-permission-for-the-first-time/required-documents/',
        type: 'official',
      },
    ],
  },
  {
    id: 'gov-05',
    title: 'Employment Permits',
    category: 'government',
    description: 'Information about work permits in Ireland.',
    links: [
      {
        title: 'Employment Permits Information',
        url: 'https://www.citizensinformation.ie/en/moving-country/working-in-ireland/employment-permits/work-permits/',
        type: 'official',
      },
    ],
  },

  // HOUSING
  {
    id: 'housing-01',
    title: 'Daft.ie - Main Rental Platform',
    category: 'housing',
    description: 'Ireland\'s #1 property rental website. Almost all rentals are listed here.',
    links: [
      {
        title: 'Daft.ie',
        url: 'https://www.daft.ie/',
        type: 'official',
      },
    ],
  },
  {
    id: 'housing-02',
    title: 'Other Rental Platforms',
    category: 'housing',
    description: 'Alternative platforms for finding accommodation.',
    links: [
      {
        title: 'Rent.ie',
        url: 'https://www.rent.ie/',
        type: 'info',
      },
      {
        title: 'MyHome.ie',
        url: 'https://www.myhome.ie/rentals',
        type: 'info',
      },
    ],
  },

  // BANKING & MONEY
  {
    id: 'banking-01',
    title: 'Wise (Recommended)',
    category: 'banking',
    description: 'Multi-currency account with Euro IBAN. Best for currency exchange (0.5% fee). Can receive salary.',
    links: [
      {
        title: 'Wise',
        url: 'https://wise.com/',
        type: 'official',
      },
    ],
  },
  {
    id: 'banking-02',
    title: 'Revolut (Recommended)',
    category: 'banking',
    description: 'Digital bank with Irish IBAN. Free currency exchange on weekdays. Widely used in Ireland.',
    links: [
      {
        title: 'Revolut',
        url: 'https://www.revolut.com/',
        type: 'official',
      },
    ],
  },
  {
    id: 'banking-03',
    title: 'Traditional Irish Banks',
    category: 'banking',
    description: 'Brick-and-mortar banks for long-term banking needs.',
    links: [
      {
        title: 'Bank of Ireland',
        url: 'https://www.bankofireland.com/',
        type: 'official',
      },
      {
        title: 'AIB (Allied Irish Banks)',
        url: 'https://www.aib.ie/',
        type: 'official',
      },
      {
        title: 'Permanent TSB',
        url: 'https://www.permanenttsb.ie/',
        type: 'official',
      },
    ],
  },

  // MOBILE NETWORKS
  {
    id: 'mobile-01',
    title: 'Three Ireland (Recommended)',
    category: 'mobile',
    description: '€20/month prepay plan with unlimited data. Physical stores in city centre.',
    links: [
      {
        title: 'Three Prepay Plans',
        url: 'https://www.three.ie/plans/prepay-sim-only.html',
        type: 'official',
      },
    ],
  },
  {
    id: 'mobile-02',
    title: 'GoMo (Budget Option)',
    category: 'mobile',
    description: '€14.99/month unlimited everything (calls, texts, 5G data). Online only, supports eSIM.',
    links: [
      {
        title: 'GoMo',
        url: 'https://gomo.ie/',
        type: 'official',
      },
    ],
  },
  {
    id: 'mobile-03',
    title: 'Other Mobile Providers',
    category: 'mobile',
    description: 'Alternative mobile network providers.',
    links: [
      {
        title: 'Vodafone Ireland',
        url: 'https://www.vodafone.ie/',
        type: 'official',
      },
      {
        title: 'Eir Mobile',
        url: 'https://www.eir.ie/mobile/',
        type: 'official',
      },
    ],
  },

  // TRANSPORTATION
  {
    id: 'transport-01',
    title: 'Airport Transfer - Aircoach',
    category: 'transportation',
    description: '24-hour coach service from Dublin Airport to city centre. ~€10, every 15 minutes.',
    links: [
      {
        title: 'Aircoach',
        url: 'https://www.aircoach.ie/',
        type: 'booking',
      },
    ],
  },
  {
    id: 'transport-02',
    title: 'Airport Transfer - Dublin Express',
    category: 'transportation',
    description: 'Express coach from airport to city. ~€9-10, every 15 minutes.',
    links: [
      {
        title: 'Dublin Express',
        url: 'https://www.dublinexpress.ie/',
        type: 'booking',
      },
    ],
  },
  {
    id: 'transport-03',
    title: 'Taxi Apps',
    category: 'transportation',
    description: 'Apps for booking taxis in Dublin.',
    links: [
      {
        title: 'Free Now (Recommended)',
        url: 'https://www.free-now.com/ie/',
        type: 'booking',
        description: 'Widely used taxi app in Dublin',
      },
      {
        title: 'Uber (uses regular taxis)',
        url: 'https://www.uber.com/',
        type: 'booking',
        description: 'In Ireland, Uber dispatches regular taxis',
      },
    ],
  },
  {
    id: 'transport-04',
    title: 'Dublin Public Transport',
    category: 'transportation',
    description: 'Information about Dublin buses, Luas (tram), and DART (train).',
    links: [
      {
        title: 'Dublin Bus',
        url: 'https://www.dublinbus.ie/',
        type: 'official',
      },
      {
        title: 'Transport for Ireland',
        url: 'https://www.transportforireland.ie/',
        type: 'official',
        description: 'Journey planner and transport info',
      },
      {
        title: 'Leap Card',
        url: 'https://www.leapcard.ie/',
        type: 'official',
        description: 'Smart card for public transport',
      },
    ],
  },

  // COMMUNITY & SUPPORT
  {
    id: 'community-01',
    title: 'Expat & International Communities',
    category: 'community',
    description: 'Facebook groups and community organizations for expats in Dublin.',
    links: [
      {
        title: 'Dublin Expats Facebook Group',
        url: 'https://www.facebook.com/groups/dublinexpats',
        type: 'info',
        description: 'Large community of expats in Dublin',
      },
      {
        title: 'MRCI - Migrant Rights Centre',
        url: 'https://www.mrci.ie/',
        type: 'info',
        description: 'Support for migrants and work permit holders',
      },
    ],
  },

  // EMERGENCY CONTACTS
  {
    id: 'emergency-01',
    title: 'Emergency Services',
    category: 'emergency',
    description: 'Important emergency contact numbers in Ireland.',
    links: [
      {
        title: 'Emergency Services: 112 or 999',
        url: 'https://www.gov.ie/en/service/253939-emergency-services/',
        type: 'official',
        description: 'Police, Fire, Ambulance',
      },
      {
        title: 'Non-Emergency Garda: 1800 666 111',
        url: 'https://www.garda.ie/',
        type: 'official',
        description: 'Irish police (Garda Síochána)',
      },
    ],
  },
];

// Helper function to get resources by category
export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter(r => r.category === category);
}

// Helper function to get all categories
export function getAllCategories(): string[] {
  const categories = resources.map(r => r.category);
  return Array.from(new Set(categories));
}
