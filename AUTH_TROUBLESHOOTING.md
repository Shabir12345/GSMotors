### 🔐 How Authentication Works & Why It's Failing

The Admin Portal uses a **database-backed authentication system**, not just the `.env` file credentials directly. Here is the flow:
1.  **Login form** sends credentials to `/api/auth/login`.
2.  **API** checks the **Supabase Database** `User` table for a matching email.
3.  **If found**, it verifies the password hash.

### 🚫 The Problem: Unreachable Database
When I tried to set up your admin user by running the database seed script (`npm run db:seed`), it failed with:
`Can't reach database server at db.seebkbdnnnjfpsaovczj.supabase.co:5432`

This usually happens because **your Supabase project is paused** due to inactivity (common on the free tier).

### ✅ Steps to Fix:
1.  **Wake Up Database**: Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/seebkbdnnnjfpsaovczj) and "Unpause" or "Restore" the project. It may take a few minutes.
2.  **Seed the Admin User**: Once the database is active, run this command in your terminal to create your admin account using the credentials from your `.env` file:
    ```powershell
    npm run db:seed
    ```
    *(This will read `ADMIN_EMAIL` and `ADMIN_PASSWORD` from your `.env` file and create the user in the database.)*
3.  **Login**: You should now be able to log in with `Owner@GSMotorsinc.com` and `GSMotorsinc`.

Let me know once you've confirmed the database is active!
