'use client'

import { createClient } from '@/app/lib/supabase/supabaseCleint' // <- fixed spelling
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
  const supabase = createClient()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function handleSignin(e: React.FormEvent) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Welcome back')
      router.push('/dashboard')
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSignin}
        className="space-y-4 flex justify-center items-center h-screen flex-col ml-20 mr-20"
      >
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
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
  )
}

export default SignUpPage
