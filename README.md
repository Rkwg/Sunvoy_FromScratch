# Project Setup Guide

This document provides a step-by-step guide to setting up and running the project locally using TypeScript and Node.js.

---

##  Step 1: Create Project Directory

Open your terminal or command prompt and run:

```bash
mkdir myProject
cd myProject
```

---

##  Step 2: Initialize Project and Configure TypeScript

Initialize the Node.js project and install development dependencies:

```bash
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init
```

> This will generate a `package.json` and a `tsconfig.json` file required for compiling TypeScript.

---

##  Step 3: Add Project Files

Copy **all files and folders** from the provided repository into your `myProject` folder.  
Make sure the file and folder **structure remains the same** as in the original repository.

Overwrite or modify existing files in `myProject` if required.

---

##  Step 4: Install Dependencies and Start the Project

Run the following commands in your project directory:

```bash
npm install
npm run start
```

> These commands will install all necessary packages and start the development server.

---

## Step 5: View the Project

Once the server is up and running, open your browser and go to:

[http://localhost:3000](http://localhost:3000)

This will open the project in your local browser.

**Login Credentials (as shared in the assignment):**
- **Username:** `demo@example.org`
- **Password:** `test`

---
##  Reference Video

Need a visual walkthrough? Watch this Loom video for a demonstration:

👉 [Click to Watch](https://www.loom.com/share/96a4b287520043d682af0d8042e62821)

---

##  Troubleshooting

- **Port already in use?** → Make sure nothing else is running on port `3000`.
- **TypeScript errors?** → Check your `tsconfig.json` or run `npx tsc` to compile manually.
- **Missing packages?** → Double-check your `package.json` and re-run `npm install`.

---

##  You're All Set!

Your project should now be running locally. If you run into any issues, feel free to ask for help.
