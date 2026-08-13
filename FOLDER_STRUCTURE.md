/**
 * Project structure documentation
 */

# Drdha Q Healthcare Website - Folder Structure

## Directory Overview

```
dradhaqwebsite/
│
├── public/                          # Static assets served directly
│   ├── images/                      # Product/brand images
│   ├── icons/                       # SVG and icon assets
│   └── favicon.ico                  # Site favicon
│
├── src/                             # Main source directory
│   │
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout wrapper
│   │   ├── page.tsx                 # Home page (/)
│   │   ├── globals.css              # Global styles
│   │   │
│   │   ├── api/                     # API routes
│   │   │   └── enquiry/
│   │   │       └── route.ts         # POST /api/enquiry - Form submission
│   │   │
│   │   ├── about/                   # /about - Company info
│   │   ├── services/                # /services - Services overview
│   │   │   ├── page.tsx
│   │   │   ├── healthcare-audit/    # /services/healthcare-audit
│   │   │   ├── iso-certification/   # /services/iso-certification
│   │   │   ├── accreditation-support/ # /services/accreditation-support
│   │   │   ├── training/            # /services/training
│   │   │   └── healthcare-sustainability/ # /services/healthcare-sustainability
│   │   │
│   │   ├── standards/               # /standards - Standards & compliance
│   │   ├── industries/              # /industries - Industries served
│   │   ├── approach/                # /approach - Our methodology
│   │   ├── contact/                 # /contact - Contact & enquiry
│   │   └── privacy-policy/          # /privacy-policy
│   │
│   ├── components/                  # Reusable React components
│   │   ├── common/                  # Shared components
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   └── Footer.tsx           # Site footer
│   │   │
│   │   ├── forms/                   # Form components
│   │   │   └── EnquiryForm.tsx      # Main enquiry form
│   │   │
│   │   └── sections/                # Page section components
│   │       ├── Hero.tsx             # Hero sections
│   │       ├── Services.tsx         # Services showcase
│   │       └── ...                  # Other section components
│   │
│   ├── lib/                         # Utility libraries
│   │   ├── api/                     # External service integrations
│   │   │   ├── sheets.ts            # Google Sheets integration
│   │   │   ├── whatsapp.ts          # WhatsApp Business API
│   │   │   └── email.ts             # Email service integration
│   │   │
│   │   ├── validation/              # Data validation
│   │   │   └── form.ts              # Form validation & sanitization
│   │   │
│   │   ├── utils/                   # Helper functions
│   │   │   └── helpers.ts           # Common utility functions
│   │   │
│   │   └── config/                  # Configuration
│   │       └── constants.ts         # App constants & config
│   │
│   ├── styles/                      # Global stylesheet
│   │   └── globals.css              # Tailwind + custom styles
│   │
│   ├── types/                       # TypeScript type definitions
│   │   └── index.ts                 # All custom types
│   │
│   └── content/                     # Content data
│       ├── services.json            # Services data
│       ├── standards.json           # Standards data
│       └── industries.json          # Industries data
│
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript configuration
├── next.config.js                   # Next.js configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── .eslintrc.json                   # ESLint configuration
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── README.md                        # Project documentation
└── FOLDER_STRUCTURE.md              # This file

```

## Key Directories Explained

### `/public`
- Static files served directly by Next.js
- Images, logos, icons, favicons
- Not bundled with code

### `/src/app`
- Next.js App Router pages and routes
- Each folder represents a URL path
- `page.tsx` is the main component for that route
- `layout.tsx` wraps all child pages

### `/src/components`
- Reusable React components
- Organized by type (common, forms, sections)
- Used across multiple pages

### `/src/lib`
- Non-component code (utilities, helpers, integrations)
- API integration modules
- Validation and helper functions
- Configuration constants

### `/src/types`
- TypeScript interfaces and types
- Centralized type definitions
- Used across the app

## Page Structure

Each page follows this pattern:
```
/services/healthcare-audit/
├── page.tsx         # Main page component
├── layout.tsx       # Optional: Page-specific layout
└── opengraph-image  # Optional: OG image for social sharing
```

## API Routes

API routes follow REST conventions:
```
/api/enquiry/route.ts   → POST /api/enquiry
                        → GET /api/enquiry (optional)
```

## Component Organization

### Common Components (`/components/common`)
- Header, Footer, Navigation
- Layout wrappers
- Used on most pages

### Form Components (`/components/forms`)
- Enquiry form
- Contact form
- Any form-related components

### Section Components (`/components/sections`)
- Hero sections
- Service cards
- Methodology steps
- Testimonials
- etc.

## Environment Variables

See `.env.example` for all required environment variables:
- Google Sheets credentials
- WhatsApp API credentials
- Email service credentials
- Analytics IDs
- Site URLs

## Styling

- **Framework**: Tailwind CSS
- **Global Styles**: `src/app/globals.css`
- **Configuration**: `tailwind.config.js`
- **Approach**: Utility-first CSS

## Development Workflow

1. Create page in `app/` folder
2. Import/create components in `components/`
3. Add utility functions in `lib/`
4. Define types in `types/`
5. Add constants in `lib/config/`

## Building & Deployment

```bash
# Development
npm run dev          # Start dev server on :3000

# Production
npm run build        # Build optimized bundle
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript
```

## File Naming Conventions

- **Components**: PascalCase (e.g., `EnquiryForm.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`, `layout.tsx`)
- **Utilities**: camelCase (e.g., `helpers.ts`, `constants.ts`)
- **Types**: index.ts or descriptive names

## Next Steps

1. Install dependencies: `npm install`
2. Set up `.env.local` with credentials
3. Integrate Google Sheets API
4. Integrate WhatsApp Business API
5. Add custom branding and content
6. Implement analytics
7. Deploy to production
