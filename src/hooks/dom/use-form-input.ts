import { useState } from 'react'

export const useFormInput = (initialFormFieldValue: string) => {
    const [formField, setFormField] = useState(initialFormFieldValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setFormField(event.target.value)

    return { formField, onChange: handleChange }
}
