import { userList } from '../model'
import { resultError, resultSuccess } from '../_utils'

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { userName, password } = body
      const user = userList.find(item => item.userName === userName && item.password === password)
      if (!user) return resultError('账号或密码错误!')
      return resultSuccess(user.token)
    }
  }
]
