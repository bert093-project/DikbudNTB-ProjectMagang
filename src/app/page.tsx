import Image from 'next/image'
import logo from '@/app/img/logo-dikpora.webp'

import { UserRound } from 'lucide-react'
import { Lock } from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-blue-600">
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col text-center justify-center bg-white shadow-lg xs:w-[80vw] xs:h-[95vh] sm:w-[70vh] sm:h-[95vh] md:w-[30vw] md:h-[95vh] rounded w-[30vw] h-[95vh]">
          <div className="flex justify-center">
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>
          {/* <img src="img/logo.webp" alt="logo" /> */}
          <h1 className="font-medium text-[30px] ">Dikpora NTB</h1>
          <div className="text-start mt-4">
            <label className="pl-3">Username / Email</label>
            {/* INPUT KE 1 */}
            <div className="relative border-gray-500 border m-3">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <UserRound size={20} />
              </div>
              <input
                type="text"
                placeholder="Masukkan username atau email"
                className="border border-slate-200 block w-full ps-9 pe-3 py-2.5 transition duration-200 focus:outline-none focus:shadow-sm focus:border-slate-500"
              />
            </div>
            {/* INPUT KE 2 */}
            <label className="pl-3">Password</label>
            <div className="relative border-gray-500 border m-3">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Lock size={20} />
              </div>
              <input
                type="text"
                placeholder="Masukkan password"
                className="border border-slate-200 block w-full ps-9 pe-3 py-2.5 transition duration-200 focus:outline-none focus:shadow-sm focus:border-slate-500"
              />
            </div>
          </div>
          <div>
            <button type="submit" className='bg-blue-600 w-60 h-10 text-white hover:bg-blue-500 hover:shadow-sm transition duration-200'>Login</button>
          </div>
          <p className='font-light text-base pt-3'>@2026 Pemerintah Provinsi Nusa Tenggara Barat</p>
        </div>
      </div>
    </main>
  );
}
