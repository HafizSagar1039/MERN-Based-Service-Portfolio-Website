import { Container } from 'react-bootstrap'
import styles from './Section.module.css'

const Section = ({ 
  children, 
  className = '', 
  dark = false, 
  fullWidth = false,
  id,
  ...props 
}) => {
  const sectionClass = `
    ${styles.section} 
    ${dark ? styles.dark : ''} 
    ${className}
  `
  
  return (
    <section className={sectionClass} id={id} {...props}>
      {fullWidth ? (
        children
      ) : (
        <Container>
          {children}
        </Container>
      )}
    </section>
  )
}

export default Section