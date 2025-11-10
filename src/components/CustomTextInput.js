import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function CustomTextInput({
  label,
  placeholder = '',
  type = 'text',
  value = '',
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  error = '',
  className = '',
  labelClassName = '',
  inputClassName = '',
  style = {},
  labelStyle = {},
  inputStyle = {},
  autoComplete = 'off'
}) {
  // Generate unique ID if not provided
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`
  const labelId = `label-${inputId}`
  
  // Password visibility toggle state
  const [showPassword, setShowPassword] = useState(false)
  const isPasswordField = type === 'password'
  const inputType = isPasswordField && showPassword ? 'text' : type

  const defaultLabelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    color: '#333333',
    display: 'block',
    marginBottom: '8px',
    ...labelStyle
  }

  const defaultInputStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    color: '#000000',
    width: '100%',
    padding: isPasswordField ? '12px 48px 12px 16px' : '12px 16px',
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    ...inputStyle
  }

  // Focus and error states
  const inputStyleWithStates = {
    ...defaultInputStyle,
    ...(error && {
      borderColor: '#FF3B30',
      borderWidth: '1px'
    }),
    ...(disabled && {
      backgroundColor: '#F5F5F5',
      cursor: 'not-allowed',
      opacity: 0.6
    })
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = '#256183'
    e.target.style.boxShadow = '0 0 0 3px rgba(37, 97, 131, 0.1)'
  }

  const handleBlur = (e) => {
    e.target.style.borderColor = error ? '#FF3B30' : '#E0E0E0'
    e.target.style.boxShadow = 'none'
  }

  return (
    <div className={`custom-text-input ${className}`} style={style}>
      {label && (
        <label
          htmlFor={inputId}
          id={labelId}
          className={labelClassName}
          style={defaultLabelStyle}
        >
          {label}
          {required && <span style={{ color: '#FF3B30', marginLeft: '4px' }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          type={inputType}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          className={inputClassName}
          style={inputStyleWithStates}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label={label || placeholder}
          aria-describedby={error ? `${inputId}-error` : undefined}
          aria-invalid={error ? 'true' : 'false'}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: disabled ? 'not-allowed' : 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666666',
              opacity: disabled ? 0.5 : 1,
              transition: 'color 0.2s ease'
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={0}
            onMouseEnter={(e) => {
              if (!disabled) {
                e.target.style.color = '#256183'
              }
            }}
            onMouseLeave={(e) => {
              if (!disabled) {
                e.target.style.color = '#666666'
              }
            }}
          >
            {showPassword ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.82L19.56 16.74C21.07 15.49 22.26 13.86 23 12C21.27 7.61 17 4.5 12 4.5C10.6 4.5 9.26 4.75 8.03 5.2L10.17 7.34C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && (
        <div
          id={`${inputId}-error`}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#FF3B30',
            marginTop: '4px',
            display: 'block'
          }}
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  )
}

CustomTextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url', 'search']),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  style: PropTypes.object,
  labelStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  autoComplete: PropTypes.string
}

