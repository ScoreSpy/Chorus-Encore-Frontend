// Utilities
import { defineStore } from 'pinia'

export enum UserLevel {
  none = -1,
  user,
  mod,
  admin
}

export const useAppStore = defineStore('app', {
  state: () => ({
    _isAuthenticated: false,
    _user: {
      snowflake: "",
      displayName: "",
      userLevel: UserLevel.none
    }
  }),
  getters: {
    isAuthenticated: (state) => state._isAuthenticated,
    userLevel: (state) => state._user.userLevel,
  },
  actions: {
    login (data: { snowflake: string, displayName: string, userLevel: UserLevel }) {
      this._isAuthenticated = true
      this._user.snowflake = data.snowflake
      this._user.displayName = data.displayName
      this._user.userLevel = data.userLevel
    },
    logout () {
      this._isAuthenticated = false
      this._user.snowflake = ""
      this._user.displayName = ""
      this._user.userLevel = UserLevel.none
    }
  },
})
