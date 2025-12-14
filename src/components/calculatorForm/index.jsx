import styles from './styles.module.css'
import { useState } from 'react'
import { Container, TextField, Button, Typography } from '@mui/material'

function CalculatorForm() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)

  const toNumber = (value) => Number(value)

  const handleAdd = () => {
    setResult(toNumber(num1) + toNumber(num2))
  }

  const handleSubtract = () => {
    setResult(toNumber(num1) - toNumber(num2))
  }

  const handleMultiply = () => {
    setResult(toNumber(num1) * toNumber(num2))
  }

  const handleDivide = () => {
    if (toNumber(num2) === 0) {
      setResult('Error: Division by zero')
    } else {
      setResult(toNumber(num1) / toNumber(num2))
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Калькулятор
      </Typography>
    </Container>
  )
}

export default CalculatorForm
