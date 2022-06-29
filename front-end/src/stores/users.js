import { defineStore } from 'pinia'
import axios from "axios"
export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
        firstLetterStats: [], 
    }),
    getters: {
      getUsers(state){
        return state.users
      },
      getStats(state) {
        return state.firstLetterStats
      }
    },
    actions: {
      async fetchUsers() {
        try {
            const data = await axios.get("http://localhost:8080/user")
            this.users = data.data
            this.calculateStats()
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async addUser(userEmail, userPassword) {
        try {
          const response = await axios.post("http://localhost:8080/user", {
            email: userEmail,
            password: userPassword
          })
          this.users.push(response);
          this.addStat(userEmail.charAt())
        } catch (e) {
          console.log(e)
        }
      },
      async deleteUser(userId) {
        try {
          await axios.delete("http://localhost:8080/user/" + userId)
          let removedEmail = (this.users.filter(user => user.id === userId))[0].email
          this.users = this.users.filter(user => user.id !== userId)
          this.removeStat(removedEmail.charAt())
        } catch (e) {
          console.log(e)
        }
      },
      calculateStats(){
        this.firstLetterStats = []
        this.users.forEach(user => {
            const firstLetter = user.email.charAt()
            let found = false
            this.firstLetterStats.forEach(dataPoint => {
                if (dataPoint.name === firstLetter) {
                    dataPoint.value += 1
                    found = true
                }
            })
            if (!found) {
                this.firstLetterStats.push({name: firstLetter, value: 1})
            }
        })
      },
      addStat(letter){
        let found = false
        this.firstLetterStats.map(pt => {
          if (pt.name === letter) {
            console.log(letter)
            pt.value = pt.value + 1
            found = true
            return
          }
        })
        if (!found) {
            this.firstLetterStats.push({name: letter, value: 1})
        }
      },
      removeStat(letter){
        let isEmpty = false
        this.firstLetterStats.map((pt) => {
          if (pt.name === letter) {
            pt.value = pt.value - 1
            if (pt.value === 0){
              isEmpty = true
            }
            return
          }
        })
        if (isEmpty) {
          this.firstLetterStats = this.firstLetterStats.filter((dataPoint) => {
            return dataPoint.name !== letter
          })
        }
      },
    },
})