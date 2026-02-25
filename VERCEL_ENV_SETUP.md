# Vercel Environment Variables Setup

Go to your Vercel project → **Settings** → **Environment Variables**

Add the following variables (all for **Production**, **Preview**, and **Development** environments):

## Required Variables

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | `postgresql://postgres.seebkbdnnnjfpsaovczj:G.Smotors123q@aws-0-us-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true` |
| `SUPABASE_URL` | `https://seebkbdnnnjfpsaovczj.supabase.co` |
| `SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZWJrYmRubm5qZnBzYW92Y3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5ODQwOTksImV4cCI6MjA4NTU2MDA5OX0.qmno-qNdp0YjD3InKIc0zxsI_STTumD70f_c48ibDJM` |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZWJrYmRubm5qZnBzYW92Y3pqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTk4NDA5OSwiZXhwIjoyMDg1NTYwMDk5fQ.p5ozyI8uFU-3NPIeUQ0uOolkzCJYzmbnxgY3AYjupFM` |
| `JWT_SECRET` | `gsmotors-production-secret-key-change-me-min32` |
| `JWT_EXPIRES_IN` | `7d` |
| `ADMIN_EMAIL` | `Owner@GSMotorsinc.com` |
| `ADMIN_PASSWORD` | `GSMotorsinc` |
| `R2_ACCOUNT_ID` | `b8b4f26e4b7e2e01428cfb560cb0410d` |
| `R2_ACCESS_KEY_ID` | `61bc5225b6e454a1aadc0f620cb70d55` |
| `R2_SECRET_ACCESS_KEY` | `8b04abe20b1905ff82df70167ecfb9f6cf148defc6d9b31da8e45a1a4923f818` |
| `R2_BUCKET` | `gsmotors` |
| `R2_PUBLIC_URL` | `https://pub-73196647f1974c3b8fd963df9d5798ae.r2.dev` |
| `NEXT_PUBLIC_APP_URL` | `https://your-vercel-domain.vercel.app` ← **Replace with your actual Vercel URL** |
| `RATE_LIMIT_MAX_REQUESTS` | `100` |
| `RATE_LIMIT_WINDOW_MS` | `900000` |

## Optional Variables (Email Notifications)

| Variable | Value |
|----------|-------|
| `EMAIL_USER` | your-gmail@gmail.com |
| `EMAIL_APP_PASSWORD` | your-gmail-app-password |

## Steps to Set Up:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **GSMotors** project
3. Go to **Settings** → **Environment Variables**
4. Add each variable above
5. After adding all variables, go to **Deployments** and click **Redeploy** on the latest deployment

> ⚠️ **IMPORTANT**: Set `NEXT_PUBLIC_APP_URL` to your actual Vercel production URL 
> (e.g., `https://gs-motors.vercel.app` or your custom domain)
