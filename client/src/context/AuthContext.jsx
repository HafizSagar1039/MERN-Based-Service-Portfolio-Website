import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token')
    
    if (token) {
      // Set auth header for all axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      // Verify token validity
      checkAuthStatus()
    } else {
      setIsLoading(false)
    }
  }, [])

  const checkAuthStatus = async () => {
    try {
      const res = await axios.get('/api/auth/verify')
      setUser(res.data.user)
      setIsAuthenticated(true)
      setIsLoading(false)
    } catch (err) {
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      setIsAuthenticated(false)
      setUser(null)
      setIsLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      setError(null)
      const res = await axios.post('/api/auth/login', { email, password })
      const { token, user } = res.data
      
      // Save token to localStorage
      localStorage.setItem('token', token)
      
      // Set auth header for all axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      
      setUser(user)
      setIsAuthenticated(true)
      return true
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}