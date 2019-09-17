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
						const { title, text } = article.data();
						articles.push({ title, text, id: article.id });
					});
					commit('setArticles', articles);
				})
				.finally(() => {
					commit('setLoading', false);
				});
		},

		async addArticle({ commit, rootState }) {
			try {
				const response = await rootState.db.collection('articles').add({
					id: Math.random() * (2000 - 1) + 1,
					title: 'Tokyo 2',
					text: 'Japan 2'
				});

				const article = await rootState.db
					.collection('articles')
					.doc(response.id)
					.get();

				commit('addArticle', article.data());
			} catch (error) {
				throw error;
			}
		}
	}
};
