import { Card } from 'react-bootstrap'
import { FaQuoteLeft } from 'react-icons/fa'
import styles from './TestimonialCard.module.css'

const TestimonialCard = ({ 
  quote, 
  name, 
  position, 
  company, 
  avatar,
  className = '',
  ...props 
}) => {
  return (
    <Card className={`${styles.testimonialCard} ${className}`} {...props}>
      <Card.Body className={styles.cardBody}>
        <FaQuoteLeft className={styles.quoteIcon} />
        <Card.Text className={styles.quote}>
          {quote}
        </Card.Text>
        <div className={styles.author}>
          {avatar && (
            <img 
              src={avatar} 
              alt={name} 
              className={styles.avatar} 
            />
          )}
          <div className={styles.authorInfo}>
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.position}>
              {position}
              {company && (
                <>
                  {' '}<span>at</span>{' '}{company}
                </>
              )}
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TestimonialCard