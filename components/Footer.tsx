import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t w-full py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="text-sm">
          Built with <a href="https://nextjs.org" className="underline hover:text-blue-600">Next.js</a> and{' '}
          <a href="https://tailwindcss.com" className="underline hover:text-blue-600">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
}
