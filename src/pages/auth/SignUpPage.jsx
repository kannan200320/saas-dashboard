import React, { useState } from 'react'
import logoImg from '../../assets/images/logo.png'
import illSignup from '../../assets/images/auth-illustration-signup.png'
import { Eye, EyeOff, Check, AlertCircle } from 'lucide-react'

export const SignUpPage = ({ onGoToLogin, onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    agreed: false
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName': {
        const trimmed = value.trim()
        if (!trimmed) return 'Full name is required'
        if (/\d/.test(trimmed)) return 'Full name should not contain numbers'
        const lettersOnly = trimmed.replace(/[^a-zA-Z]/g, '')
        if (lettersOnly.length <= 2)
          return 'Full name should be greater than 2 letters'
        if (!/^[a-zA-Z\s'-]+$/.test(trimmed))
          return 'Full name should only contain letters'
        return ''
      }
      case 'email': {
        const trimmed = value.trim()
        if (!trimmed) return 'Email address is required'
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(trimmed))
          return 'Email address should follow name@gmail.com'
        return ''
      }
      case 'username': {
        const trimmed = value.trim()
        if (!trimmed) return 'Username is required'
        if (/\d/.test(trimmed)) return 'Username should not contain numbers'
        const lettersOnly = trimmed.replace(/[^a-zA-Z]/g, '')
        if (lettersOnly.length <= 2)
          return 'Username should be greater than 2 letters'
        if (!/^[a-zA-Z._-]+$/.test(trimmed))
          return 'Username should only contain letters'
        return ''
      }
      case 'password': {
        if (!value) return 'Password is required'
        if (value.length !== 6) return 'Password should be 6 characters'
        return ''
      }
      case 'agreed': {
        if (!value) return 'Please agree to the terms to continue'
        return ''
      }
      default:
        return ''
    }
  }

  const validateAll = () => {
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      username: validateField('username', formData.username),
      password: validateField('password', formData.password),
      agreed: validateField('agreed', formData.agreed)
    }
    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key]
    })
    return newErrors
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      const err = validateField(field, value)
      setErrors((prev) => ({ ...prev, [field]: err }))
    }
  }

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const err = validateField(field, formData[field])
    setErrors((prev) => ({ ...prev, [field]: err }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({
      fullName: true,
      email: true,
      username: true,
      password: true,
      agreed: true
    })
    const validationErrors = validateAll()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    if (onSignUpSuccess) {
      onSignUpSuccess()
    } else if (onGoToLogin) {
      onGoToLogin()
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row antialiased">
            <div className="w-full lg:w-[420px] xl:w-[460px] p-6 sm:p-12 max-w-md mx-auto lg:max-w-none flex flex-col justify-between shrink-0">
        <div>
                    <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
              <img src={logoImg} alt="Base" className="w-full h-full object-contain" />
            </div>
          </div>

          <h2 className="text-[24px] font-bold text-[#1A1D2F] text-center mb-6">
            Sign Up
          </h2>

                    <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#F8F9FD] border border-gray-200 rounded-xl text-[12px] font-semibold text-[#1A1D2F] hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#F8F9FD] border border-gray-200 rounded-xl text-[12px] font-semibold text-[#1A1D2F] hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>

                    <div className="relative flex items-center justify-center mb-6">
            <div className="w-full border-t border-gray-200" />
            <span className="absolute bg-white px-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              Or
            </span>
          </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        <div>
              <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                className={`w-full px-3.5 py-2.5 text-[13px] rounded-xl focus:outline-none transition-all text-[#1A1D2F] border ${
                  touched.fullName && errors.fullName
                    ? 'bg-red-50/20 border-red-400 focus:border-red-500'
                    : 'bg-[#F8F9FD] border-gray-200 focus:bg-white focus:border-[#605BFF]'
                }`}
              />
              {touched.fullName && errors.fullName && (
                <p className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

                        <div>
              <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@gmail.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={`w-full px-3.5 py-2.5 text-[13px] rounded-xl focus:outline-none transition-all text-[#1A1D2F] border ${
                  touched.email && errors.email
                    ? 'bg-red-50/20 border-red-400 focus:border-red-500'
                    : 'bg-[#F8F9FD] border-gray-200 focus:bg-white focus:border-[#605BFF]'
                }`}
              />
              {touched.email && errors.email && (
                <p className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

                        <div>
              <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="e.g. johndoe"
                value={formData.username}
                onChange={(e) => handleChange('username', e.target.value)}
                onBlur={() => handleBlur('username')}
                className={`w-full px-3.5 py-2.5 text-[13px] rounded-xl focus:outline-none transition-all text-[#1A1D2F] border ${
                  touched.username && errors.username
                    ? 'bg-red-50/20 border-red-400 focus:border-red-500'
                    : 'bg-[#F8F9FD] border-gray-200 focus:bg-white focus:border-[#605BFF]'
                }`}
              />
              {touched.username && errors.username && (
                <p className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.username}</span>
                </p>
              )}
            </div>

                        <div>
              <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="6 characters"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  onBlur={() => handleBlur('password')}
                  className={`w-full pl-3.5 pr-10 py-2.5 text-[13px] rounded-xl focus:outline-none transition-all text-[#1A1D2F] border ${
                    touched.password && errors.password
                      ? 'bg-red-50/20 border-red-400 focus:border-red-500'
                      : 'bg-[#F8F9FD] border-gray-200 focus:bg-white focus:border-[#605BFF]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {touched.password && errors.password && (
                <p className="text-[11px] text-red-500 font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.password}</span>
                </p>
              )}
            </div>

                        <div className="space-y-1 pt-1">
              <div className="flex items-start gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const next = !formData.agreed
                    handleChange('agreed', next)
                  }}
                  className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all cursor-pointer ${
                    formData.agreed
                      ? 'bg-[#605BFF] border-[#605BFF] text-white'
                      : touched.agreed && errors.agreed
                      ? 'border-red-400 bg-red-50/30'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {formData.agreed && <Check className="w-3 h-3 stroke-[3]" />}
                </button>
                <label
                  onClick={() => handleChange('agreed', !formData.agreed)}
                  className="text-[11px] text-[#8E95A9] leading-snug cursor-pointer select-none"
                >
                  By creating an account you agree to the{' '}
                  <span className="text-[#605BFF] hover:underline">
                    terms of use
                  </span>{' '}
                  and our{' '}
                  <span className="text-[#605BFF] hover:underline">
                    privacy policy
                  </span>
                  .
                </label>
              </div>
              {touched.agreed && errors.agreed && (
                <p className="text-[11px] text-red-500 font-medium pl-6">
                  {errors.agreed}
                </p>
              )}
            </div>

                        <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all cursor-pointer"
              >
                Create account
              </button>
            </div>
          </form>
        </div>

                <div className="text-center pt-6 text-[12px] text-[#8E95A9]">
          Already have an account?{' '}
          <button
            onClick={onGoToLogin}
            className="text-[#605BFF] font-semibold hover:underline"
          >
            Log in
          </button>
        </div>
      </div>

            <div className="hidden lg:flex flex-1 bg-white items-center justify-center p-12">
        <div className="max-w-xl w-full">
          <img
            src={illSignup}
            alt="Sign Up Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}
