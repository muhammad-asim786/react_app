import React from 'react'
import PropTypes from 'prop-types'

export default function CustomButton({
  children,
  text,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  variant = 'primary',
  fontSize = 16,
  fontWeight = 600,
  padding = '14px 24px',
  borderRadius = '8px',
  className = '',
  style = {}
}) {
  // Use children if provided, otherwise use text prop
  const buttonText = children || text

  // Variant color schemes
  const variantStyles = {
    primary: {
      backgroundColor: '#256183',
      color: '#FFFFFF',
      hoverBackgroundColor: '#1E4E69',
      activeBackgroundColor: '#173D52'
    },
    secondary: {
      backgroundColor: '#6C757D',
      color: '#FFFFFF',
      hoverBackgroundColor: '#5A6268',
      activeBackgroundColor: '#484F54'
    },
    success: {
      backgroundColor: '#28A745',
      color: '#FFFFFF',
      hoverBackgroundColor: '#218838',
      activeBackgroundColor: '#1E7E34'
    },
    danger: {
      backgroundColor: '#DC3545',
      color: '#FFFFFF',
      hoverBackgroundColor: '#C82333',
      activeBackgroundColor: '#BD2130'
    }
  }

  const currentVariant = variantStyles[variant] || variantStyles.primary

  const defaultButtonStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: `${fontSize}px`,
    fontWeight: fontWeight,
    color: currentVariant.color,
    backgroundColor: currentVariant.backgroundColor,
    border: 'none',
    borderRadius: borderRadius,
    padding: padding,
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    transition: 'background-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    ...style
  }

  const handleMouseEnter = (e) => {
    if (!disabled) {
      e.target.style.backgroundColor = currentVariant.hoverBackgroundColor
    }
  }

  const handleMouseLeave = (e) => {
    if (!disabled) {
      e.target.style.backgroundColor = currentVariant.backgroundColor
    }
  }

  const handleMouseDown = (e) => {
    if (!disabled) {
      e.target.style.backgroundColor = currentVariant.activeBackgroundColor
      e.target.style.transform = 'scale(0.98)'
    }
  }

  const handleMouseUp = (e) => {
    if (!disabled) {
      e.target.style.backgroundColor = currentVariant.hoverBackgroundColor
      e.target.style.transform = 'scale(1)'
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${className}`}
      style={defaultButtonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      aria-disabled={disabled}
    >
      {buttonText}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

