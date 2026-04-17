# RITAM Landing Page

RITAM is a one-page waitlist landing site built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.local.example .env.local
   ```

3. Update `.env.local` with your Supabase values:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Build for production:

   ```bash
   npm run build
   ```

## Waitlist Table

Create a Supabase table named `waitlist_signups` with columns:

- `email` (text)
- `use_case` (text, nullable)
- `created_at` (timestamp/text)
