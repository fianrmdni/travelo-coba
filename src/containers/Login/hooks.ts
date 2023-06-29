import type { FormInputs } from './interfaces'
import type { SubmitHandler } from 'react-hook-form'

import { useForm } from 'react-hook-form'

export const useComponentLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>()

}