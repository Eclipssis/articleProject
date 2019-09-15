import firebase from 'firebase';

function setUserToState(context, responce) {
	const user = {
		email: responce.user.email,
		verified: responce.user.emailVerified,
		id: responce.user.uid
	};

	context.commit('setUser', user);
	window.localStorage.setItem('user', JSON.stringify(user));
}

export default {
	namespaced: true,

	state: {
		user: null
	},

	mutations: {
		setUser(state, user) {
			state.user = user;
		}
	},

	actions: {
		async createUser(context, { email, password }) {
			try {
				const responce = await firebase.auth().createUserWithEmailAndPassword(email, password);
				setUserToState(context, responce);
			} catch (error) {
				throw error.message;
			}
		},

		async signIn(context, { email, password }) {
			try {
				const responce = await firebase.auth().signInWithEmailAndPassword(email, password);
				setUserToState(context, responce);
			} catch (error) {
				throw error.message;
			}
		},

		async signOut(context) {
			try {
				await firebase.auth().signOut();
				context.commit('setUser', null);
				localStorage.removeItem('user');
			} catch (error) {
				throw error;
			}
		}
	}
};
