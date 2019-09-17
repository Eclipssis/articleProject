import firebase from 'firebase';

function getArticleIndex(state, articleId) {
	return state.articles.findIndex((el) => el.id === articleId);
}

export default {
	namespaced: true,

	state: {
		articles: null,
		loading: false
	},

	mutations: {
		setArticles(state, articles) {
			state.articles = articles;
		},

		setLoading(state, stauts) {
			state.loading = stauts;
		},

		addArticle(state, article) {
			state.articles.push(article);
		},

		deleteArticle(state, article) {
			const index = getArticleIndex(state, article.id);
			state.articles.splice(index, 1);
		},

		updateArticle(state, article) {
			const index = getArticleIndex(state, article.id);
			const closeArticle = JSON.parse(JSON.stringify(article));
			state.articles.splice(index, 1, closeArticle);
		}
	},

	actions: {
		fetchArticles({ commit, rootState }) {
			let articles = [];
			commit('setLoading', true);

			rootState.db
				.collection('articles')
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach(function(article) {
						const { title, text, created, updated } = article.data();
						articles.push({ title, text, id: article.id, created, updated });
					});
					commit('setArticles', articles);
				})
				.finally(() => {
					commit('setLoading', false);
				});
		},

		async addArticle({ commit, rootState }, article) {
			try {
				const response = await rootState.db.collection('articles').add({
					title: article.title,
					text: article.text,
					created: firebase.firestore.Timestamp.fromDate(new Date())
				});

				const fetchedArticle = await rootState.db
					.collection('articles')
					.doc(response.id)
					.get();

				commit('addArticle', { id: response.id, ...fetchedArticle.data() });
			} catch (error) {
				throw error;
			}
		},

		async deleteArticle({ commit, rootState }, article) {
			try {
				await rootState.db
					.collection('articles')
					.doc(article.id)
					.delete();

				commit('deleteArticle', article);
			} catch (error) {
				throw error;
			}
		},

		async updateArticle({ commit, rootState }, article) {
			try {
				const docArticle = rootState.db.collection('articles').doc(article.id);
				await docArticle.update({
					title: article.title,
					text: article.text,
					updated: firebase.firestore.Timestamp.fromDate(new Date())
				});

				const fetchedArticle = await rootState.db
					.collection('articles')
					.doc(article.id)
					.get();

				commit('updateArticle', { id: article.id, ...fetchedArticle.data() });
			} catch (error) {
				throw error;
			}
		}
	}
};
