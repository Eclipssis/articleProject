<template>
  <div class="articles-block">
    
    <Spiner v-if="loading" color="primary"></Spiner>
    
    <div class="button-panel">
      <Button v-if="canEdit" @click="onChangeStateArticleModal(true)">Add article</Button>
    </div>

    <div v-if="!articles && !loading">
      <h2>There is no articles, please add some...</h2>
    </div>

    <h3 v-if="articles && articles.length === 0 && !loading" class="empty-articles-text">
      Oups! There is no articles :(
    </h3>

    <div v-if="articles && articles.length > 0 && !loading">
      <div class="sort-panel">
        <h3 class="sort-panel-title">Sort by:</h3>
        <div class="radio-wrap">
          <input type="radio" class="sort-panel-inpt radio" id="desc" value="desc" v-model="sortBy">
          <label for="desc" class="sort-panel-label"><span></span>Desc</label>
        </div>
        
        <div class="radio-wrap">
          <input type="radio" class="sort-panel-inpt radio" id="asc" value="asc" v-model="sortBy">
          <label for="asc" class="sort-panel-label"><span></span>Asc</label>
        </div>
      </div>

      <transition-group name="list" class="articles-list">
        <div v-for="article in sortedArticles" :key="article.id" class="articles-item">
          <Article :article="article" :canEdit="canEdit"></Article>
        </div>
      </transition-group>
    </div>
    
    <Modal v-model="articleModal" v-if="canEdit">
      <template v-slot:header>
        <h2 class="modal-title">Add article</h2>
        <p class="modal-subtitle">Fill the fields and then click 'Add' button</p>
      </template>

      <template v-slot:body>
        <form>
          <div class="form-group">
            <label for="article-title">Title</label>
            <Input v-model="editingArtile.title" title="Article title" placeholder="Enter title..." id="article-title"/>
          </div>

          <div class="form-group">
            <label for="article-text">Text</label>
            <textarea 
              v-model="editingArtile.text" 
              title="Article text" 
              placeholder="Enter text..." 
              id="article-text" 
              class="form-control">
            </textarea>
          </div>
        </form>
        
        <div v-if="articlesError" class="badge badge-danger">
          {{articlesError}}
        </div>
      </template>

      <template v-slot:footer>
        <Button name="btn-dark" @click="onChangeStateArticleModal(false)">Close</Button>
        <Button name="btn-success" @click="onCreateArticle">Add</Button>
      </template>
    </Modal>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import Article from "@/widgets/Article";
  import Spiner from "@/components/Spiner";
  import Modal from "@/components/Modal";

  export default {
    name: 'ArticlesList',

    components: {
      Article,
      Spiner,
      Modal
    },

    props: {
      canEdit: {
        type: Boolean,
        default: false
      },
    },

    data() {
      return {
        editingArtile: {
          title: '',
          text: ''
        },
        sortBy: 'desc',
        articlesError: '',
        articleModal: false
      }
    },

    computed: {
      ...mapState({
        articles: state => state.articles.articles,
        loading: state => state.articles.loading
      }),

      sortedArticles () {
        let cloneArticles = JSON.parse(JSON.stringify(this.articles))
        let res = cloneArticles.sort((a, b) => {
          if (this.sortBy === 'desc') return b.created.seconds - a.created.seconds
          if (this.sortBy === 'asc') return a.created.seconds - b.created.seconds
        })
        return res
      }
    },

    methods: {
      ...mapActions({
        fetchArticles: 'articles/fetchArticles',
        addArticle: 'articles/addArticle',
      }),

      async onCreateArticle() {
        this.articlesError = null

        if (this.canEdit) {
          try {
            await this.addArticle(this.editingArtile)
            this.onChangeStateArticleModal(false)
          } catch (error) {
            this.articlesError = error
          }
        }
      },

      onChangeStateArticleModal (value) {
        this.articleModal = value
        this.articlesError = null
      }
    },

    mounted () {
      if (!this.articles) {
        this.fetchArticles()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/_variables.scss";

  .empty-articles-text {
    text-align: left;
    clear: both;
  }

  .button-panel {
    float: left;
    margin-bottom: 20px;
  }

  .sort-panel {
    display: flex;
    align-items: center;
    clear: both;
    text-align: left;
    margin-bottom: 20px;
    &-title {
      display: inline-block;
      margin-bottom: 0;
      margin-right: 10px;
    }

    &-input {
      margin-right: 8px;
      margin-left: 8px;
    }

    &-label {
      margin-left: 10px;
      margin-right: 5px;
    }
  }

  .articles-block {
    min-height: 50vh;
  }

  .articles-list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
  }

  .articles-item {
    box-sizing: border-box;
    flex: 1 1 100%;
    max-width: 100%;
  }

  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }

  @media (min-width: $breakpoint-tablet) {
    .articles-list {
      margin: 0 -15px 0;
    }

    .articles-item {
      flex: 1 1 50%;
      max-width: 50%;
      padding: 0 15px;
    }
  }
</style>