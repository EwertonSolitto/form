export default class User {
  username: string
  private password: string
  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }

  CheckPassword(password: string) {
    if(password === this.password) {
      return true
    }
    return false
  }
}