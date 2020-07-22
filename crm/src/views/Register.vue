<template>
  <form class="card auth-card" @submit.prevent="handlerSignUp">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim = "email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
                class="helper-text invalid"
                v-if ="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small>
        <small
                class="helper-text invalid"
                v-if ="$v.email.$dirty && !$v.email.email"
        >Введите правильный Email</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim = "password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
                class="helper-text invalid"
                v-if="$v.password.$dirty && !$v.password.required"
        >Поле Password не должно быть пустым</small>
        <small
                class="helper-text invalid"
                v-if="$v.password.$dirty && !$v.password.minLength"
        >Ввеено символов: {{password.length}} из {{$v.password.$params.minLength.min}}</small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model = "name"
          :class="{invalid: ($v.name.dirty && !$v.name.required)}"
        >
        <label for="name">Имя</label>
        <small
                class="helper-text invalid"
                v-if="$v.name.$dirty && !$v.name.required"
        >Поле Name не должно быть пустым</small>
      </div>
      <p>
        <label>
          <input type="checkbox"
                 v-model = "confirm"
                 v-on:click="changeConfirm($v.confirm)"
          />
          <span>С правилами согласен</span>
          <br>
          <small
                  class="helper-text invalid"
                  v-if="$v.confirm.$dirty && $v.confirm.checked === false"
          >Необходимо ознакомиться с правилами</small>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import {email, required, minLength} from './../../node_modules/vuelidate/lib/validators'
  export default {
    name: 'register',
    data: () => ({
      email: '',
      password: '',
      name: '',
      confirm: false
    }),
    validations:{
      email: {email, required},
      password: {required, minLength: minLength(6)},
      name:{required},
      confirm: {checked: v => v} // must return true
    },
    methods:{
      async handlerSignUp(){
        if (this.$v.$invalid){
          this.$v.$touch()
          return
        }
        const formData = {
          email: this.email,
          password: this.password,
          name: this.name,
          confirm: this.confirm
        }
        try{
          await this.$store.dispatch('register', formData)
          this.$router.push('/')
        } catch (e) {}

      },
      changeConfirm: function (event) {
        // (event === false)?(event === true):(event === false)
        console.log(event)
      }
    }

  }
</script>
