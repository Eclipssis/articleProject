<template>
  <header class="header">
    <router-link to="/" class="logo-header">
      <span class="logo logo-light"></span>
    </router-link>

    <nav>
      
      <div v-if="user" class="user-panel">
        {{ user.email }}
        <i class="fas fa-user"></i>
      </div>

      <ul class="nav-bar">
        <li v-if="user" class="nav-item">
          <router-link class="nav-link" to='/articles/edit'>
            Edit articles
            <i class="fas fa-newspaper"></i>
          </router-link>
        </li>
        <li v-if="!user" class="nav-item">
          <router-link class="nav-link" to='/login'>
            Login
            <i class="fas fa-sign-in-alt"></i>
          </router-link>
        </li>
        <li v-if="user" class="nav-item">
          <a class="nav-link" @click="onSignOut">
            Logout
            <i class="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'Header',

  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },

  methods: {
    ...mapActions({
      signOut: 'auth/signOut'
    }),

    onSignOut() {
      this.signOut().then(() => {
        this.$router.push({name: 'Login'})
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/_variables.scss";

  .header {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    background: #3b414d;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }

  .logo-header {
    padding: 15px 0;
    .logo {
      position: relative;
      top: 2px;
    }
  }

  .user-panel {
    display: inline-block;
    padding: 0 15px;
  }
  
  .nav-bar {
    display: inline-flex;

    .nav-item {
      display: flex;
      align-items: center;
      height: 52px;
      .nav-link {
        display: flex;
        align-items: center;
        height: 52px;
        color: #ffffff;
        cursor: pointer;
        padding: 0 15px;
        transition: all 0.2s ease;
        &:hover {
          background: #f98e3c;
        }

        .fas {
          position: relative;
          top: 1px;
        }
      }
    }
  }

  .fas {
    margin-left: 10px;
  }

  @media (min-width: $breakpoint-tablet) {
    .header {
      padding: 0 40px;
      justify-content: space-between;
    }
  }
</style>