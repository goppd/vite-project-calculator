import { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material'

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
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography variant="h4" gutterBottom align="center">
            Калькулятор
          </Typography>

          <TextField
            label="Число 1"
            variant="outlined"
            fullWidth
            type="number"
            margin="normal"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />

          <TextField
            label="Число 2"
            variant="outlined"
            fullWidth
            type="number"
            margin="normal"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleAdd}
            sx={{ mt: 2 }}
          >
            Сложение
          </Button>

          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleSubtract}
            sx={{ mt: 2 }}
          >
            Вычитание
          </Button>

          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleMultiply}
            sx={{ mt: 2 }}
          >
            Умножение
          </Button>

          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleDivide}
            sx={{ mt: 2 }}
          >
            Деление
          </Button>

          {result !== null && (
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              Результат: {result}
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  )
}

export default CalculatorForm
