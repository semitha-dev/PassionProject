"use client"
import { createClient } from '@/app/lib/supabase/supabaseCleint';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import React, { useState } from 'react';

const SignUpPage = () => {

    const supabase = createClient()

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");


    async function handleSignUp(e: React.FormEvent) {
        e.preventDefault()

        const {error} = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: '/dashboard'
            }
        })
        if (error){
            setMessage(error.message)
        }else {
            setMessage('check you email to confirm you account then log back in')
        }

        
    }








    return (

        <div>
            <form onSubmit={handleSignUp} className='space-y-4 flex justify-center items-center h-screen flex-col ml-20 mr-20'>
                <input
                type='text'
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input
                type='text'
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition w-36"
          >
            Submit
          </button>

            </form>
            {message && (
          <p className="mb-24 text-center text-sm text-gray-600">{message}</p>
        )}
            
        </div>
      
    );
};

export default SignUpPage;