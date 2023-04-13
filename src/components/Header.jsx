import React from 'react';


export default function Header() {
  return (
    <header className="flex items-center justify-center h-12 text-center">
      <a className="flex items-center justify-center h-full px-5 bg-red-600 hover:bg-red-700" href="/">List</a>
      <a className="flex items-center justify-center h-full px-5 bg-red-600 hover:bg-red-700" href="/about">About</a>
    </header>
  );
}