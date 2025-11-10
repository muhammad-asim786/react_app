import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CustomText from '../CustomText'
import CustomTextInput from '../CustomTextInput'
import CustomButton from '../CustomButton'

export default function Login() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      
      // Simulate API call (replace with actual API call)
      setTimeout(() => {
        // Dispatch login success action
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            email: formData.email,
            name: formData.email.split('@')[0] // Simple name extraction
          }
        })
        setIsLoading(false)
      }, 1000) // Simulate network delay
    }
  }

  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ 
        minHeight: '100vh', 
        padding: '16px',
        backgroundColor: '#FAFAFA'
      }}
    >
      <div 
        style={{ 
          width: '100%', 
          maxWidth: '440px',
          padding: '40px 24px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
        }}
        className="login-container"
      >
        {/* Logo Section */}
        <div 
          className="text-center" 
          style={{ 
            marginBottom: '32px'
          }}
        >
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="img-fluid"
            style={{ 
              maxWidth: '100%',
              width: 'auto',
              height: 'auto',
              maxHeight: '120px',
              marginBottom: '24px',
              objectFit: 'contain'
            }}
          />
          <CustomText 
            text="Log in to your account"
            fontSize={28}
            fontWeight={600}
            color="#000000"
            textAlign="center"
            lineHeight="1.2"
            letterSpacing="0.01em"
            className="mb-3"
            style={{ 
              marginBottom: '8px'
            }}
          />
          <CustomText 
            text="Welcome back! Please enter your details."
            fontSize={15}
            fontWeight={400}
            color="#666666"
            textAlign="center"
            lineHeight="1.4"
            letterSpacing="0.01em"
            style={{ 
              marginBottom: '0'
            }}
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: '20px' }}>
            <CustomTextInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
              autoComplete="email"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <CustomTextInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              error={errors.password}
              autoComplete="current-password"
            />
          </div>

          <div style={{ width: '100%' }}>
            <CustomButton
              text={isLoading ? 'Signing in...' : 'Sign in'}
              type="submit"
              fullWidth={true}
              variant="primary"
              fontSize={16}
              fontWeight={600}
              padding="14px 24px"
              borderRadius="8px"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .login-container {
            padding: 32px 20px !important;
            border-radius: 12px !important;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06) !important;
          }
        }
        
        @media (min-width: 577px) and (max-width: 768px) {
          .login-container {
            padding: 40px 32px !important;
          }
        }
        
        @media (min-width: 769px) {
          .login-container {
            padding: 48px 40px !important;
          }
        }
        
        @media (max-width: 480px) {
          .login-container img {
            max-height: 100px !important;
            margin-bottom: 20px !important;
          }
        }
      `}</style>
    </div>
  )
}
