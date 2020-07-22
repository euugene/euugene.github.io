import firebase from "firebase";

export default {
    actions:{
        async login ({dispatch, commit}, {email,password}) { // method for authorisation
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e) // method for changed state
                throw e
            }
        },
        async register({dispatch, commit}, {email, password, name}){
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password) // register user in firebase
                const uid = await dispatch('getPersonId') // call getPerson method
                await firebase.database().ref(`/users/${uid}/info`).set({ // create note about person in database
                    bill: 1000,
                    name: "Tony"
                })
            } catch (e) {
                console.log('ewew', e)
                commit('setError', e) // method for changed state
                throw e
            }
        },
        getPersonId(){
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout(){ // for delete user data after logout
          await firebase.auth().signOut()
        }
    }
}
