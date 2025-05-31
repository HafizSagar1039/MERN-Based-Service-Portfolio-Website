import styles from './SectionTitle.module.css'

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  light = false,
  className = ''
}) => {
  const titleClass = `
    ${styles.sectionTitle} 
    ${centered ? styles.centered : ''} 
    ${light ? styles.light : ''}
    ${className}
  `
  
  return (
    <div className={titleClass}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle