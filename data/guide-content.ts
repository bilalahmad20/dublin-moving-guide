import { GuideSection } from '@/types';

export const guideSections: GuideSection[] = [
  {
    id: 'before-travel',
    title: 'Before You Travel to Ireland',
    slug: 'before-travel',
    priority: 1,
    content: `
# Before You Travel to Ireland

Moving to a new country can be overwhelming, but proper preparation will make your transition smooth. Here's everything you need to prepare before flying to Dublin.

## Documents Checklist

Before flying, make sure you have **all necessary documents readily accessible in your carry-on**. This includes:

- **Passport** (with your entry visa if you are from a visa-required country)
- **Employment Permit** (original or printed certificate of your Critical Skills or General Employment Permit) - You will need to show this to the immigration officer on arrival
- **Employment offer or contract letter** from your employer in Ireland
- **Proof of accommodation** in Dublin (hotel booking confirmation)
- **Travel insurance** covering your trip (often required for visa and helpful for initial stay)

### Financial Preparation

Have some euros in cash and/or a credit/debit card. Ireland uses the Euro (€). ATMs are abundant in Dublin, so you can withdraw cash upon arrival if needed. Ensure your home bank is aware you'll be abroad, or better yet, have a fee-free international card.

**Tip**: Bring approximately €100-200 in cash for your first day.
    `,
    relatedTasks: ['pre-01', 'pre-02'],
    externalLinks: [],
    faqs: [
      {
        question: 'What happens at immigration control?',
        answer: 'At Dublin Airport immigration, the officer will ask for your passport, visa, and employment permit. They may also ask for your job offer letter and where you will be staying. Be prepared to show these. The officer will stamp your passport with a landing stamp (typically valid for 90 days) and instruct you to register with Irish Immigration.',
      },
      {
        question: 'How much cash should I bring?',
        answer: 'Bring €100-200 in cash for immediate expenses. Most places in Dublin accept card payments, but cash is useful for small vendors or emergencies.',
      },
    ],
  },

  {
    id: 'arrival',
    title: 'Arriving in Dublin',
    slug: 'arrival',
    priority: 2,
    content: `
# Arriving in Dublin: Transportation from the Airport

Dublin Airport is about 15 km from Dublin City Centre. You have several transportation options:

## Taxi (€30-40)

Taking a taxi is the most convenient option, especially with luggage. Taxis are available 24/7 at designated ranks outside Terminal 1 and Terminal 2.

- **Cost**: €30-40 to city centre (depending on traffic and exact location)
- **Duration**: 25-40 minutes
- **Best for**: Late arrival, multiple people, lots of luggage

**Tip**: Ensure the driver uses the meter (standard practice). Fares may be higher during public holidays or late at night.

### Taxi Apps

- **Free Now** (recommended): Widely used in Dublin, allows card payment
- **Uber**: Dispatches regular taxis (ridesharing not available in Ireland)

## Airport Coach Buses (€9-10)

Express coach buses are cheaper and comfortable. Two reliable services:

### Aircoach
- **Cost**: €10 one-way (€12 return)
- **Frequency**: Every 15 minutes (24-hour service)
- **Duration**: 25-35 minutes
- Buy tickets from driver (cash or card) or kiosk
- Route 700 to central Dublin

### Dublin Express
- **Cost**: €9-10 one-way
- **Frequency**: Every 15 minutes
- **Duration**: ~30 minutes
- Slightly cheaper if booked online

Both services drop off at Dublin City Centre (O'Connell Street area).

## Public City Bus (€3-4)

Standard Dublin Bus routes (16, 41) are the cheapest option but have many stops and no dedicated luggage space. Good if you're on a tight budget and have time.
    `,
    relatedTasks: ['arr-02'],
    externalLinks: [
      {
        title: 'Aircoach',
        url: 'https://www.aircoach.ie/',
        type: 'booking',
      },
      {
        title: 'Dublin Express',
        url: 'https://www.dublinexpress.ie/',
        type: 'booking',
      },
    ],
    faqs: [
      {
        question: 'Which transport option is best?',
        answer: 'For 2+ people with luggage, a taxi is cost-effective (split the fare). For solo travelers or those on a budget, Aircoach or Dublin Express is recommended - comfortable, frequent, and affordable.',
      },
    ],
  },

  {
    id: 'mobile-sim',
    title: 'Getting an Irish SIM Card',
    slug: 'mobile-sim',
    priority: 3,
    content: `
# Getting Connected: SIM Card and Mobile Data

One of your first tasks should be getting a local SIM card for your phone. Having an Irish SIM gives you a local number (useful for delivery, taxi, OTP codes) and affordable mobile data.

## Where to Buy

**Don't buy at the airport** - overpriced. Wait until you're in the city centre where mobile phone stores and convenience shops are plentiful.

## Recommended Providers

### Three Ireland (€20/month)

**Best for**: Most people, physical store support

- **Cost**: €20/month prepay
- **Data**: Unlimited (fair usage ~120GB)
- **Calls/Texts**: ~200 minutes, large allotment
- **Network**: Good coverage in Dublin, 5G available
- **Where**: Stores on Grafton Street, Henry Street

**How to get it**:
1. Visit a Three store with your passport (ID required for SIM registration)
2. Staff will activate and help you top-up for first month
3. Active within minutes with Irish phone number

### GoMo (€14.99/month)

**Best for**: Budget-conscious, comfortable with online-only

- **Cost**: €14.99/month for life
- **Data**: Unlimited (5G)
- **Network**: Uses Eir network (decent in cities)
- **Caveat**: No physical stores - order online
- **eSIM**: Supports eSIM for instant activation

**How to get it**:
1. Go to gomo.ie and sign up
2. Choose eSIM (instant) or physical SIM (shipped)
3. Provide Irish address for delivery
4. Pay with card - subscription auto-charges monthly

### Other Options

- **Vodafone**: ~€30/month for unlimited data (more expensive)
- **Tesco Mobile / LycaMobile**: Budget options but less data

## Why You Need an Irish Number

- **OTP codes** for Irish services, banks
- **PPS number application** requires local number
- **Unlimited data** for Google Maps, Uber, navigation
- **No roaming charges** within Ireland
    `,
    relatedTasks: ['week-01'],
    externalLinks: [
      {
        title: 'Three Ireland Prepay',
        url: 'https://www.three.ie/plans/prepay-sim-only.html',
        type: 'official',
      },
      {
        title: 'GoMo',
        url: 'https://gomo.ie/',
        type: 'official',
      },
    ],
    faqs: [
      {
        question: 'Can I use eSIM?',
        answer: 'Yes! GoMo supports eSIM for instant activation. Three also offers eSIM in-store. This is great if you want to keep your home SIM active.',
      },
      {
        question: 'Is my phone unlocked?',
        answer: 'Your phone must be unlocked to use a different carrier\'s SIM. Check with your home carrier before traveling.',
      },
    ],
  },

  {
    id: 'pps-number',
    title: 'Getting Your PPS Number',
    slug: 'pps-number',
    priority: 4,
    content: `
# Getting Your PPS Number (PPSN)

The PPS number (Personal Public Service Number) is like a social security number - essential for tax, social welfare, public services, and more.

## Why You Need It

Without a PPSN, your employer cannot properly set you up on the tax system, meaning you'll be taxed at **emergency rates (around 50%)** until you sort it out. Also needed for:
- Healthcare services
- Opening certain bank accounts
- Driver's license
- Public services registration

**Bottom line: Apply immediately, ideally within the first few days of arrival.**

## How to Apply

### Step 1: Create MyGovID Account

Go to [MyGovID website](https://www.mygovid.ie/) and sign up for a basic account using your email and mobile number.

### Step 2: Apply Online via MyWelfare

1. Log in to [MyWelfare.ie](https://www.mywelfare.ie/) using your MyGovID
2. Find "Apply for PPS Number" service
3. Fill out online application form
4. Upload required documents (see below)

### Step 3: Required Documents

**Proof of Identity**: Passport (photo page)

**Proof of Address in Ireland**:
- Hotel booking confirmation with your name and address
- Official letter from employer
- Utility bill or bank statement (if available)

**Proof of Why You Need PPSN**:
- Job offer letter or employment contract
- Letter from employer on company letterhead confirming you need PPS number for payroll

### Step 4: Attend Appointment

After submitting online, you'll be scheduled for an **in-person appointment** at an Intreo Centre (Social Welfare office) - usually King's Inns Street or Parnell Street in Dublin.

**Bring**: All original documents you uploaded

**What happens**: Staff will verify your papers, may ask standard questions, then process the request.

### Step 5: Receive Your PPSN

Your PPS Number will be **mailed to you** in 2-4 weeks at the address you provided. It's a letter with your number - keep it safe!

**Tip**: If you might change addresses soon, use your office address or a friend's address where you can definitely receive mail.

## Emergency Tax

If you start work before receiving your PPSN, you'll be on emergency tax (~40-50% of pay). Don't panic - it's not lost money. Once you get your PPSN and register with Revenue (see Tax/Revenue section), those taxes will be refunded or adjusted.

**To minimize emergency tax**: Get PPSN quickly AND register your job on Revenue's system ASAP.
    `,
    relatedTasks: ['week-04', 'week-05', 'month-01', 'month-02'],
    externalLinks: [
      {
        title: 'MyGovID',
        url: 'https://www.mygovid.ie/',
        type: 'official',
      },
      {
        title: 'MyWelfare - Apply for PPS',
        url: 'https://www.mywelfare.ie/',
        type: 'official',
      },
      {
        title: 'PPS Number Guide',
        url: 'https://www.gov.ie/en/service/get-a-personal-public-service-pps-number/',
        type: 'official',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to get a PPS number?',
        answer: 'From online application to receiving the letter: typically 2-4 weeks. The in-person appointment is usually scheduled within a few days of your online submission.',
      },
      {
        question: 'Can I use hotel booking as proof of address?',
        answer: 'Yes! Many people use hotel booking confirmations successfully. As long as it shows your name and a Dublin address, it should be accepted.',
      },
    ],
  },

  {
    id: 'irp-registration',
    title: 'IRP Registration (Irish Residence Permit)',
    slug: 'irp-registration',
    priority: 5,
    content: `
# Irish Residence Permit (IRP) – Registering with Immigration

Within **90 days of arrival**, you are legally required to register with Irish Immigration and obtain an IRP card (formerly GNIB card).

## What is the IRP?

The IRP card is a credit-card sized ID showing you have permission to live and work in Ireland under your work permit. You must carry it when traveling in/out of Ireland, and it serves as your re-entry permission.

## The 90-Day Rule

You must **book an appointment within 90 days** of arrival. If you can't get an actual appointment slot before 90 days (common due to high demand), that's okay - as long as you have **booked one**, you won't be penalized for waiting beyond 90 days.

**Key**: Book the earliest available appointment and keep that confirmation!

## How to Book Your IRP Appointment

### Step 1: Create ISD Account

Go to the [Immigration Service Delivery Customer Portal](https://www.irishimmigration.ie/) and register for an account (separate from MyGovID).

### Step 2: Book First-Time Registration

1. Log in to ISD portal
2. Select "Book a first-time registration appointment" in Dublin
3. Choose Burgh Quay as location
4. Select any available slot (check regularly for cancellations!)

**Appointment slots fill fast** - check daily, especially early morning or late night when new slots might open.

### Step 3: Confirmation

Once you secure a slot, you'll get a confirmation email. **Print or save this** - it's your proof of compliance even if the appointment is beyond 90 days.

## Preparing for the Appointment

### Required Documents

- **Passport** with landing stamp from airport
- **Employment Permit** original certificate
- **Employer Letter** stating your employment, job title, start date
- **Proof of Address** (hotel booking, lease, utility bill)
- **Debit/Credit Card** for €300 fee (cash NOT accepted)

### At Burgh Quay

**Location**: Burgh Quay Registration Office, Dublin 2 (by River Liffey)

**What happens**:
1. Arrive 10-15 minutes early
2. Staff review your documents
3. They take your fingerprints and photo
4. Pay €300 fee by card
5. Passport stamped with Stamp 1 (work permit permission)
6. Get passport back same day (usually)

**Duration**: 1-2 hours

### After Appointment

Your IRP card will be **mailed to your address** in 1-3 weeks. It contains:
- Your photo
- Name
- PPS number
- Immigration stamp type (Stamp 1)
- Validity dates (usually 1 year for first registration)

## Travel Note

Until you have your IRP card, **do not travel outside Ireland** if you're from a visa-required country. You won't be able to re-enter without a multi-entry visa. Once you have the IRP, it serves as your re-entry permission.
    `,
    relatedTasks: ['month-04', 'month-05', 'month-06', '90day-01', '90day-02'],
    externalLinks: [
      {
        title: 'ISD Customer Portal',
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
    faqs: [
      {
        question: 'What if I can\'t get an appointment within 90 days?',
        answer: 'As long as you BOOKED the appointment within 90 days, you\'re compliant - even if the actual appointment date is beyond 90 days. Keep your confirmation email as proof.',
      },
      {
        question: 'Can I pay the €300 fee in cash?',
        answer: 'No, payment is by debit or credit card only. Make sure your card has sufficient limit and notify your bank of this transaction.',
      },
      {
        question: 'How long is the IRP card valid?',
        answer: 'For work permit holders, typically 1 year for first registration, even if your permit is 2 years. You\'ll need to renew annually online.',
      },
    ],
  },

  {
    id: 'banking',
    title: 'Banking and Money Management',
    slug: 'banking',
    priority: 6,
    content: `
# Managing Your Money: Bank Accounts and Payments

Ireland is quite modern with payments - card payments accepted almost everywhere, even for small amounts (contactless tap is common).

## Digital Banking (Wise & Revolut) - Start Here!

### Wise (Highly Recommended)

**What it is**: Multi-currency account with Euro IBAN

**Why use it**:
- Convert currencies at mid-market rate (only ~0.5% fee)
- Get paid your salary (employer can pay to your Euro IBAN)
- Spend in Ireland with Wise debit card
- Much cheaper than using foreign bank card (3% fees)

**How to set up**:
1. Download Wise app
2. Verify identity (passport)
3. Transfer money from home bank
4. Convert to EUR in app
5. Get physical card mailed or use digital card immediately

### Revolut (Also Recommended)

**What it is**: App-based bank with Irish IBAN (EU banking license)

**Why use it**:
- No exchange markup on weekdays (0.5% on amounts over free allowance)
- Excellent for everyday spending
- Instant transfers to other Revolut users (very popular in Ireland)
- Good budgeting features
- Can receive salary

**How to set up**:
1. Download Revolut app
2. Create account and verify ID
3. Top up with home currency or card
4. Convert to EUR for free
5. Spend with Revolut card

## Why Use Wise/Revolut?

If you use your foreign bank card for every transaction:
- **Foreign exchange fees**: Often 3% per transaction
- **ATM fees**: $5-10 per withdrawal
- **Poor exchange rates**

With Wise/Revolut:
- **Fees**: 0.5-1% total
- **Savings**: Hundreds of euros over time
- **Local payment**: Accepted everywhere like a local card

## Traditional Irish Bank Account (Later)

Eventually you may want an account with Bank of Ireland, AIB, or Permanent TSB for long-term needs (mortgages, etc.).

**Requirements**:
- Photo ID (passport)
- Proof of Irish address (utility bill, lease)
- PPS number
- Proof of employment

**Challenge**: As a newcomer, you won't have utility bill or permanent address yet. This is why Wise/Revolut are lifesavers - use them in the interim.

Once you have a permanent address and proof (utility bill or lease), you can open a traditional bank account.

## Day-to-Day Money Tips

- Keep ~€100 cash for small vendors or emergencies
- When using cards, **always choose EUR** if prompted (not your home currency)
- Link Wise/Revolut to Apple Pay/Google Pay for tap-to-pay
- ATM withdrawals: Use bank ATMs (AIB, BOI) to avoid surcharges
    `,
    relatedTasks: ['week-02', 'week-03', 'ongoing-02'],
    externalLinks: [
      {
        title: 'Wise',
        url: 'https://wise.com/',
        type: 'official',
      },
      {
        title: 'Revolut',
        url: 'https://www.revolut.com/',
        type: 'official',
      },
      {
        title: 'Bank of Ireland',
        url: 'https://www.bankofireland.com/',
        type: 'official',
      },
    ],
    faqs: [
      {
        question: 'Can my employer pay salary to Wise or Revolut?',
        answer: 'Yes! Both provide you with an IBAN that can receive SEPA payments (standard for Irish salaries). Many employers are fine with this, especially initially.',
      },
      {
        question: 'How much do currency exchanges cost?',
        answer: 'Wise: ~0.5% fee. Revolut: Free on weekdays up to a limit, then 0.5%, and 1% on weekends. Traditional banks: Often 3-5% markup.',
      },
    ],
  },

  {
    id: 'tax-revenue',
    title: 'Tax Registration (Revenue)',
    slug: 'tax-revenue',
    priority: 7,
    content: `
# Registering for Tax and Revenue (Stopping Emergency Tax)

After securing your PPS number, you need to register with **Revenue** (Irish tax authority) and register your job. This ensures you're taxed correctly under PAYE (Pay As You Earn) system.

## Set Up Revenue myAccount

### Step 1: Access myAccount

Go to [Revenue myAccount](https://www.revenue.ie/en/online-services/services/myaccount.aspx) and log in using your **MyGovID** (same login as PPS application).

### Step 2: Register Your Employment

1. Navigate to "Jobs and Pensions" section (PAYE Services)
2. Click "Add a new job"
3. Enter:
   - Employer's Registered Name
   - Employer's Tax Registration Number (TRN) - get from HR or payslip
   - Your start date
4. Submit

### What Happens Next

Revenue generates a **Revenue Payroll Notification (RPN)** and makes it available to your employer. The RPN tells your employer how much tax to deduct, incorporating your standard credits so you aren't overtaxed.

## Why This Matters

**If you skip this step**: Your employer might not know your PPSN or that this is your first job, and you could stay on emergency tax longer.

**With proper registration**: You'll only pay normal income tax (20% on part of income, 40% on higher portion) plus USC, rather than a flat 50% emergency rate.

Ireland's tax system provides an annual tax credit (~€3,550 for single person) which significantly reduces tax on initial earnings. The RPN accounts for this.

## Ireland Tax Overview

- **Tax Credits**: ~€3,550/year for single person (reduces taxable amount)
- **Standard Rate**: 20% on income up to ~€42,000
- **Higher Rate**: 40% on income above ~€42,000
- **USC** (Universal Social Charge): Additional ~0.5-8% depending on income
- **PRSI** (Social Security): ~4% employee contribution

## Tax Status

After registration, verify your tax status in myAccount:
- Single, no dependents (most common)
- Married (joint assessment if applicable)

Revenue will default to single person tax credits initially.

## What If I Was on Emergency Tax?

If your first paycheck had emergency tax deducted, don't worry! Once Revenue updates your employer with the RPN, subsequent paychecks will be correct. You can also claim a refund for overpaid tax through myAccount.
    `,
    relatedTasks: ['month-03'],
    externalLinks: [
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
    faqs: [
      {
        question: 'When should I register with Revenue?',
        answer: 'As soon as you get your PPS number - ideally before your first paycheck. This prevents emergency tax.',
      },
      {
        question: 'What is emergency tax rate?',
        answer: 'Emergency tax is typically 40-50% of your gross pay. It applies when Revenue doesn\'t have your PPSN and tax details on file.',
      },
    ],
  },

  {
    id: 'housing',
    title: 'Finding Housing in Dublin',
    slug: 'housing',
    priority: 8,
    content: `
# Finding Long-term Accommodation

Dublin's housing market is competitive, so start looking early. Most newcomers initially stay in temporary accommodation (hotel/Airbnb) for 2-4 weeks while searching.

## Main Platforms

### Daft.ie (Primary)

**Ireland's #1 property listing website** - almost every rental is posted here.

**How to use**:
1. Go to [Daft.ie](https://www.daft.ie/)
2. Filter for Dublin, set your budget, choose areas
3. Browse listings
4. Contact landlords/agents immediately when you see something suitable
5. Arrange viewing (or virtual viewing if not in long-term accommodation yet)

**Important**: New listings get snapped up quickly. Be prepared to send many inquiries.

**Red Flags**:
- Anyone asking for deposit before viewing - SCAM
- Landlord "abroad" asking for money transfer - SCAM
- If it sounds too good to be true - it is

### Facebook Groups & Marketplace

Useful for finding room-shares or sublets:
- "Dublin Rent Accommodation"
- "Housing in Dublin"
- Facebook Marketplace

**Caution**: Same scam warnings apply. Never pay before viewing in person or via trusted video call.

### Other Platforms

- **Rent.ie**: Overlaps with Daft but worth checking
- **MyHome.ie**: Another rental listing site
- **WhatsApp Groups**: Company housing groups or community groups sometimes have leads

## Documents Landlords Want

- Employment letter or job offer
- Recent pay slips (if you've started work)
- References (previous landlord or employer)
- Proof of ability to pay rent

Since you're just arriving, use your job offer letter and reference from previous landlord if available. Showing you have stable employment helps.

## Temporary Stay Strategy

Given the tight market:
1. Book hotel/Airbnb for 2-4 weeks initially
2. Use that time to attend viewings
3. Apply for multiple places
4. Budget for temporary accommodation costs

## Avoiding Scams

**Golden Rule**: Never pay anything until you've:
- Viewed the property in person (or trusted person has)
- Met the landlord/agent face-to-face or via verified video call
- Have a signed lease in hand

**Common Scams**:
- "I'm abroad, send deposit to secure it" - NO
- Asking for payment via Western Union/wire transfer before viewing - NO
- Photos that look like hotel rooms or too perfect - suspicious

**Legitimate Process**:
- View property
- Discuss terms
- Sign lease
- Pay deposit (usually 1 month rent)
- Get keys

Daft.ie itself is reliable, but scammers post fake ads. Use official channels and trust your instincts.

## Typical Dublin Rent Costs

- **Room in shared house**: €700-1,000/month
- **Studio apartment**: €1,400-1,800/month
- **1-bed apartment**: €1,800-2,400/month
- **City centre vs suburbs**: City centre more expensive

## Once You Secure Housing

- Get lease/tenancy agreement
- Set up utilities (if not included)
- Get utility bills - these are proof of address for bank accounts
- Register address with IRP if needed
    `,
    relatedTasks: ['week-06', 'ongoing-01'],
    externalLinks: [
      {
        title: 'Daft.ie',
        url: 'https://www.daft.ie/',
        type: 'official',
      },
      {
        title: 'Rent.ie',
        url: 'https://www.rent.ie/',
        type: 'info',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to find a place?',
        answer: 'Typically 2-4 weeks. Competitive listings may have 10+ applicants, so persistence is key.',
      },
      {
        question: 'Can I rent without PPS number or Irish bank account?',
        answer: 'Yes, but it helps to have them. Your job offer letter and proof of income are most important. Some landlords accept Wise/Revolut transfers.',
      },
    ],
  },
];

// Helper functions
export function getGuideSectionBySlug(slug: string): GuideSection | undefined {
  return guideSections.find(section => section.slug === slug);
}

export function getAllGuideSections(): GuideSection[] {
  return guideSections.sort((a, b) => (a.priority || 99) - (b.priority || 99));
}
