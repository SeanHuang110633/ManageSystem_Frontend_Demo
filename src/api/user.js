import request from '@/utils/request'

//查詢所有用戶
export const userListService = () => {
  return request.get('/user')
}

//用戶註冊
export const userRegisterService = (registerData) => {
  return request.post('/user/register', registerData)
}

//用戶登入
export const userLoginService = (loginData) => {
  return request.post('/user/login', loginData)
}

//查詢用戶資訊
export const userInfoService = () => {
  return request.get('/user/userinfo')
}

//更新用戶個人資訊
export const userInfoUpdateService = (userInfoData) => {
  return request.put('/user', userInfoData)
}

//刪除用戶
export const userDeleteService = (id) => {
  return request.delete('/user?id=' + id)
}

//更新用戶密碼
export const userPwdUpdate = (pwdUpateData) => {
  return request.patch('/user/updatePwd', pwdUpateData)
}
