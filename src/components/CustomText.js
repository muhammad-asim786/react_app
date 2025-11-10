import React from 'react'
import PropTypes from 'prop-types'

export default function CustomText({
  children,
  text,
  fontSize = 30,
  fontWeight = 600,
  color = '#000000',
  textAlign = 'center',
  lineHeight,
  letterSpacing = '0%',
  className = '',
  style = {},
  as = 'p'
}) {
  // Use children if provided, otherwise use text prop
  const content = children || text

  // Calculate line height if not provided (default is 38px for 30px font)
  const calculatedLineHeight = lineHeight || (fontSize * 1.267).toFixed(0) + 'px'

  const textStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: fontWeight,
    fontSize: `${fontSize}px`,
    lineHeight: calculatedLineHeight,
    letterSpacing: letterSpacing,
    textAlign: textAlign,
    color: color,
    ...style
  }

  const Component = as

  return (
    <Component className={className} style={textStyle}>
      {content}
    </Component>
  )
}

CustomText.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  letterSpacing: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'])
}

