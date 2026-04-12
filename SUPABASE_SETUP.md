# Supabase Setup Guide for Facturo Project

## Local Installation and Configuration

### Prerequisites
Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Docker](https://www.docker.com/)

### Step 1: Install Supabase CLI
To manage your Supabase project locally, install the Supabase CLI:

```bash
npm install -g supabase
```

### Step 2: Initialize Supabase Project
Navigate to your Facturo project directory and initialize Supabase:

```bash
cd /path/to/your/facturo
supabase init
```

This will create a `supabase` directory in your project.

### Step 3: Start Supabase Local Development
Run the following command to start your local Supabase instance:

```bash
supabase start
```

This command will set up your Supabase backend locally using Docker.

### Step 4: Configure Environment Variables
Create a `.env` file in the root of your Facturo project and configure your environment variables. Below is an example:

```dotenv
# Database URL
SUPABASE_DB_URL=postgres://user:password@localhost:5432/database
# Other configurations...
```

Make sure to replace the placeholders with actual values based on your local setup.

### Step 5: Access Supabase Studio
Once your Supabase instance is running, you can access the Supabase Studio through your web browser:

```
http://localhost:3000
```

From here, you can manage your database, authentication, and other Supabase features.

### Step 6: Run Migrations
If your project requires database migrations, you can run them using Supabase CLI:

```bash
supabase db push
```

### Conclusion
You are now set up to work with Supabase locally for the Facturo project. Make sure to refer to the official Supabase documentation for further guidance on advanced features and configurations.

---
Date Created: 2026-04-12 20:20:18 UTC
