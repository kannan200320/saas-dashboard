import React, { useState } from 'react'
import logoImg from '../../assets/images/logo.png'
import { AlertCircle } from 'lucide-react'

export const RecoverPasswordPage = ({ onGoToLogin }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [touched, setTouched] = useState(false)

  const validateEmail = (val) => {
    const trimmed = val.trim()
    if (!trimmed) return 'Email address is required'
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(trimmed))
      return 'Email address should follow name@gmail.com'
    return ''
  }

  const handleChange = (val) => {
    setEmail(val)
    if (touched) {
      setError(validateEmail(val))
    }
  }

  const handleBlur = () => {
    setTouched(true)
    setError(validateEmail(email))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    const err = validateEmail(email)
    setError(err)
    if (err) return

    alert(`Password reset link sent to ${email}`)
    if (onGoToLogin) onGoToLogin()
  }

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex items-center justify-center p-4 antialiased">
      <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-12 w-full max-w-md shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
            <img src={logoImg} alt="Base" className="w-full h-full object-contain" />
          </div>
        </div>

        <h2 className="text-[22px] font-bold text-[#1A1D2F]">
          Recover
        </h2>

        <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@gmail.com"
              value={email}
              onChange={(e) => handleChange(e.target.value)}
              onBlur={handleBlur}
              className={`w-full px-3.5 py-2.5 text-[13px] rounded-xl focus:outline-none transition-all text-[#1A1D2F] border ${
                touched && error
                  ? 'bg-red-50/20 border-red-400 focus:border-red-500'
                  : 'bg-[#F8F9FD] border-gray-200 focus:bg-white focus:border-[#605BFF]'
              }`}
            />
            {touched && error && (
              <p className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all cursor-pointer"
            >
              Reset Your Password
            </button>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onGoToLogin}
              className="text-[12px] text-[#605BFF] font-semibold hover:underline cursor-pointer"
            >
              Back to Login
            </button>
          </div>
        </form>

        <div className="pt-2 text-[12px] text-[#8E95A9]">
          Remember your password?{' '}
          <button
            onClick={onGoToLogin}
            className="text-[#605BFF] font-semibold hover:underline"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
