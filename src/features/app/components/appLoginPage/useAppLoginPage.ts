import { useCallback } from 'react'
import { useLoginMutation } from 'features/app/apis/appApis'
import { message } from 'antd'

type FormValues = {
  username: string
  password: string
}

export const useAppLoginPage = () => {
  const [loginMutation] = useLoginMutation()

  const handleSubmitForm = useCallback(
    async (values: FormValues) => {
      console.log(values)
      try {
        const result = await loginMutation({ ...values }).unwrap()
        console.log(result)
      } catch (error) {
        console.log(error)
        message.error('Login failed!')
      }
    },
    [loginMutation]
  )

  return { handleSubmitForm }
}
