import React from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { UserPlus } from 'lucide-react';

export function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate bg-[size:20px_20px]" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
        <div className="flex justify-center">
          <div className="bg-blue-600 rounded-full p-3">
            <UserPlus className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Your Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
            Sign in instead
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <AuthForm mode="register" />
        </div>
      </div>
    </div>
  );
}