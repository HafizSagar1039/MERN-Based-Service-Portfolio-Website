import { Button as BootstrapButton } from 'react-bootstrap'
import styles from './Button.module.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  animated = false,
  ...props 
}) => {
  const buttonClass = animated 
    ? `${styles.button} ${styles.animated} ${className}`
    : `${styles.button} ${className}`
    
  return (
    <BootstrapButton
      variant={variant}
      size={size}
      className={buttonClass}
      {...props}
    >
      {children}
    </BootstrapButton>
  )
}

export default Button