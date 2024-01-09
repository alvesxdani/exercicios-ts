import React from 'react'

type InputProps = {
    label: string
}

const Input = ({label}: InputProps) => {
  return (
    <div>
        <label htmlFor="data-inicio">Início:</label>
        <input type="date" name="data-inicio" id="data-inicio" />
    </div>
  )
}

export default Input