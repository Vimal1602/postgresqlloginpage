import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { LogIn } from 'lucide-react';

export function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate bg-[size:20px_20px]" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
        <div className="flex justify-center">
          <div className="bg-blue-600 rounded-full p-3">
            <LogIn className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
            Create one now
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <AuthForm mode="login" />
        </div>
      </div>
    </div>
  );
}