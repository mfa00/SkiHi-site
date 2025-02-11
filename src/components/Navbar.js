// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SkiBooking</Link>
        <div>
          <Link to="/instructors" className="mx-2">Instructors</Link>
          <Link to="/login" className="mx-2">Login</Link>
          <Link to="/register" className="mx-2">Register</Link>
        </div>
      </div>
    </nav>
  );
}