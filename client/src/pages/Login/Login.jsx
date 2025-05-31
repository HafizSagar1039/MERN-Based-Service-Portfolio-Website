import { useState, useContext } from 'react'
import { Form, Alert } from 'react-bootstrap'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

// Components
import Section from '../../components/ui/Section/Section'
import Button from '../../components/ui/Button/Button'

// Styles
import styles from './Login.module.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const { isAuthenticated, login, isLoading, error } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  
  // If user is coming from a specific page, redirect there after login
  const from = location.state?.from?.pathname || '/admin'
  
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = formData
    
    const success = await login(email, password)
    if (success) {
      navigate(from, { replace: true })
    }
  }
  
  // If already authenticated, redirect to admin page
  if (isAuthenticated && !isLoading) {
    return <Navigate to="/admin" replace />
  }
  
  return (
    
    <div className={`${styles.loginPage} ${styles.sections}`}>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h2>Admin Login</h2>
            <p>Enter your credentials to access the admin dashboard</p>
          </div>
          
          {error && (
            <Alert variant="danger" className={styles.alert}>
              {error}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className={styles.label}>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className={styles.formControl}
              />
            </Form.Group>
            
            <Form.Group className="mb-4">
              <Form.Label className={styles.label}>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className={styles.formControl}
              />
            </Form.Group>
            
            <Button 
              type="submit" 
              variant="primary" 
              className={styles.loginButton}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login