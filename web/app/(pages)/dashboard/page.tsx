'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/app/lib/supabase/supabaseCleint'

export default function Dashboard() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        setUser(data.user)
      } else {
        router.push('/login') // redirect if not logged in
      }
    }
    getUser()
  }, [supabase, router])

  return (
   <div className="min-h-screen bg-gray-50">
  {/* Navbar */}
  {user ? (
    <nav className="flex justify-between items-center bg-black text-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <span className="text-sm">{user.email}</span>
    </nav>
  ) : (
    <p>Loading...</p>
  )}

  {/* Main content */}
  <div className="p-6">
    <p className='text-blue-700'>This is your dashboard content</p>
  </div>
</div>

  )
}
