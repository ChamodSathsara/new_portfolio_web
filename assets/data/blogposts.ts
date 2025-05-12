export const blogPosts = [
  {
    id: "1",
    title: "Deploying Your Full-Stack App with Vercel and MongoDB Atlas",
    link: "https://medium.com/@sathsarawapc/deploying-your-full-stack-app-with-vercel-and-mongodb-atlas-836dcda9f010",
    excerpt:
      "Learn how to deploy your MERN/Next.js full-stack application using Vercel for the frontend and MongoDB Atlas for the backend database.",
    content: `
      <p>When building full-stack applications with Next.js and MongoDB, deployment is a key final step. In this guide, we’ll walk through deploying your frontend to Vercel and connecting to MongoDB Atlas for your database.</p>

      <h2>1. Prepare Your Application</h2>
      <p>Ensure your application has a clear separation between frontend and backend. Your API routes should be inside the <code>/pages/api</code> folder in Next.js. Your MongoDB connection logic can go in <code>/lib/mongodb.js</code>.</p>

      <h2>2. Set Up MongoDB Atlas</h2>
      <ul>
        <li>Create a free MongoDB Atlas account</li>
        <li>Create a new cluster</li>
        <li>Whitelist your IP address (or allow all for testing)</li>
        <li>Create a database user with username and password</li>
        <li>Copy the connection string and add your credentials</li>
      </ul>

      <h2>3. Connect to MongoDB in Your App</h2>
      <pre><code>import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Define the MONGODB_URI in .env.local");

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGODB_URI);
}

export default dbConnect;</code></pre>

      <h2>4. Deploy to Vercel</h2>
      <ol>
        <li>Push your code to GitHub</li>
        <li>Go to <a href="https://vercel.com">Vercel</a> and import your repo</li>
        <li>Set environment variables like <code>MONGODB_URI</code></li>
        <li>Deploy!</li>
      </ol>

      <p>Vercel will automatically build and host your app, and your database remains securely hosted on MongoDB Atlas. Congratulations—you’ve deployed your full-stack app!</p>
    `,
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    date: "May 12, 2025",
    author: "Chamod Sathsara",
    category: "Deployment",
    tags: ["Next.js", "MongoDB", "Vercel", "Deployment", "Full-Stack"],
  },
  {
    id: "2",
    title: "Implementing Dark Mode in Next.js with Tailwind CSS",
    excerpt:
      "Learn how to add a responsive dark mode toggle to your Next.js app using Tailwind CSS and localStorage.",
    content: `
      <p>Dark mode is not only trendy—it improves accessibility and saves energy on OLED screens. Tailwind CSS makes it easy to implement in a Next.js app.</p>

      <h2>Step 1: Enable Dark Mode in Tailwind Config</h2>
      <pre><code>// tailwind.config.js
module.exports = {
  darkMode: 'class',
  ...
}</code></pre>

      <h2>Step 2: Create a Toggle Button</h2>
      <pre><code>const toggleDarkMode = () => {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};</code></pre>

      <h2>Step 3: Apply Styles</h2>
      <pre><code>&lt;div className="bg-white dark:bg-gray-900 text-black dark:text-white"&gt;</code></pre>

      <h2>Step 4: Load Theme from localStorage</h2>
      <pre><code>useEffect(() => {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
}, []);</code></pre>

      <p>Now you have a working dark mode in your Next.js app!</p>
    `,
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "May 12, 2025",
    author: "Chamod Sathsara",
    category: "UI/UX",
    tags: ["Next.js", "Tailwind CSS", "Dark Mode", "Frontend"],
  },
  {
    id: "3",
    title: "Authentication with NextAuth.js and MongoDB",
    excerpt:
      "Secure your Next.js app using NextAuth.js with credentials provider and MongoDB for storing user data.",
    content: `
      <p>NextAuth.js is the easiest way to add secure authentication to your Next.js app. Here, we’ll use email/password login with MongoDB.</p>

      <h2>Step 1: Install Packages</h2>
      <pre><code>npm install next-auth @next-auth/mongodb-adapter mongodb</code></pre>

      <h2>Step 2: Configure [...nextauth].js</h2>
      <pre><code>import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check credentials against your DB
        return { id: 1, name: "Sathsara", email: credentials.email };
      }
    }),
  ],
  session: {
    strategy: "jwt",
  }
});</code></pre>

      <h2>Step 3: Secure Routes</h2>
      <pre><code>import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }
  return { props: { session } };
}</code></pre>

      <p>Now your app supports secure user authentication using MongoDB and NextAuth!</p>
    `,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "May 12, 2025",
    author: "Chamod Sathsara",
    category: "Authentication",
    tags: ["Next.js", "NextAuth", "MongoDB", "Login", "Security"],
  },
  {
    id: "4",
    title: "Improving Performance in Next.js with Lazy Loading and Caching",
    excerpt:
      "Boost your Next.js app speed with image lazy loading, data caching, and performance best practices.",
    content: `
      <p>Fast performance leads to better SEO and user experience. Here’s how to make your Next.js app faster using built-in tools and smart practices.</p>

      <h2>1. Image Optimization with next/image</h2>
      <pre><code>import Image from 'next/image';

&lt;Image 
  src="/hero.jpg"
  alt="Hero"
  width={800}
  height={600}
  loading="lazy"
/&gt;</code></pre>

      <h2>2. Code Splitting and Dynamic Imports</h2>
      <pre><code>import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('../components/Chart'), {
  loading: () => &lt;p&gt;Loading...&lt;/p&gt;,
  ssr: false,
});</code></pre>

      <h2>3. Data Caching with SWR</h2>
      <pre><code>import useSWR from 'swr';
const fetcher = url => fetch(url).then(res => res.json());

const { data, error } = useSWR('/api/posts', fetcher);</code></pre>

      <h2>4. Minimize API Calls</h2>
      <p>Batch requests when possible, use pagination, and cache frequently accessed data on the server using Redis or in-memory strategies.</p>

      <p>Apply these tips and your app will load faster, feel smoother, and retain more users.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    date: "May 12, 2025",
    author: "Chamod Sathsara",
    category: "Performance",
    tags: ["Next.js", "Performance", "Lazy Loading", "SWR", "Speed"],
  },
];
