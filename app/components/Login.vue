<template>
  <Page actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image
          class="logo"
          src="~/assets/images/logo.png"
        />
        <Label
          class="header"
          text="footHub"
        />
        <GridLayout rows="auto, auto, auto, auto">
          <StackLayout
            row="0"
            class="input-field"
          >
            <TextField
              v-model="user.username"
              class="input"
              hint="Username"
              :isEnabled="!isLoading"
              autocorrect="false"
              autocapitalizationType="none"
              returnKeyType="next"
              @returnPress="usernameReturnPress"
            />
            <StackLayout class="hr-light" />
          </StackLayout>

          <StackLayout
            v-show="!isLoggingIn"
            row="1"
            class="input-field"
          >
            <TextField
              ref="email"
              v-model="user.email"
              class="input"
              hint="Email"
              :isEnabled="!isLoading"
              keyboardType="email"
              autocorrect="false"
              autocapitalizationType="none"
              returnKeyType="next"
              @returnPress="focusPassword"
            />
            <StackLayout class="hr-light" />
          </StackLayout>

          <StackLayout
            row="2"
            class="input-field"
          >
            <TextField
              ref="password"
              v-model="user.password"
              class="input"
              :isEnabled="!isLoading"
              hint="Password"
              secure="true"
              :returnKeyType="isLoggingIn ? 'done' : 'next'"
              @returnPress="focusConfirmPassword"
            />
            <StackLayout class="hr-light" />
          </StackLayout>

          <StackLayout
            v-show="!isLoggingIn"
            row="3"
            class="input-field"
          >
            <TextField
              ref="confirmPassword"
              v-model="user.confirmPassword"
              class="input"
              :isEnabled="!isLoading"
              hint="Confirm password"
              secure="true"
              returnKeyType="done"
            />
            <StackLayout class="hr-light" />
          </StackLayout>

          <ActivityIndicator
            rowSpan="4"
            :busy="isLoading"
          />
        </GridLayout>

        <Button
          :text="buttonText"
          :isEnabled="!isLoading"
          class="btn btn-primary m-t-20"
          @tap="submit"
        />
        <Label
          VShow="isLoggingIn"
          text="Forgot your password?"
          class="login-label"
          @tap="forgotPassword()"
        />
      </StackLayout>

      <Label
        class="login-label sign-up-label"
        @tap="toggleForm"
      >
        <FormattedString>
          <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'" />
          <Span
            :text="isLoggingIn ? 'Sign up' : ''"
            class="bold"
          />
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>

<script>
import App from "./App"
import { IS_LOADING_G, LOGIN_A } from "../shared/src/vuex-store/constants/auth"

export default {
  data() {
    return {
      isLoggingIn: true,
      user: {
        username: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined,
      },
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters[IS_LOADING_G]
    },
    buttonText() {
      return this.isLoggingIn ? 'Log In' : 'Sign Up'
    },
  },
  methods: {
    usernameReturnPress() {
      return this.isLoggingIn ? this.focusPassword() : this.focusEmail()
    },
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn
    },
    submit() {
      if (!this.user.username || !this.user.password) {
        this.alert(
          "Please provide both an email address and password."
        )
        return
      }
      if (this.isLoggingIn) {
        this.login()
      } else {
        this.register()
      }
    },

    login() {
      const user = {
        username: this.user.username,
        password: this.user.password,
      }
      this.$store.dispatch(LOGIN_A, user).then((r) => {
        console.log(r)
        this.$navigateTo(App, { clearHistory: true })
      }).catch((err) => {
        this.e = err
        console.log('LoGiN eRrOr', err)
      })
    },

    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.alert("Your passwords do not match.")
        this.processing = false
        return
      }
      console.log('REGISTER', this.user)

    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the email address you used to register for APP NAME to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel",
      }).then(data => {
        console.log('RESET PW', data)
      })
    },
    focusEmail() {
      this.$refs.email.nativeView.focus()
    },
    focusPassword() {
      this.$refs.password.nativeView.focus()
    },
    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus()
      }
    },

    alert(message) {
      return alert({
        title: "APP NAME",
        okButtonText: "OK",
        message: message,
      })
    },
  },
}
</script>

<style scoped>
  .page {
    align-items: center;
    flex-direction: column;
  }

  .form {
    margin-left: 30;
    margin-right: 30;
    flex-grow: 6;
    vertical-align: middle;
  }

  .logo {
    margin-bottom: 4%;
    height: 8%;
    font-weight: bold;
  }

  .header {
    horizontal-align: center;
    font-size: 25;
    font-weight: 600;
    margin-bottom: 2%;
    text-align: center;
    color: #008a2f;
  }

  .input-field {
    margin-bottom: 2%;
  }

  .input {
    font-size: 18;
    placeholder-color: #A8A8A8;
  }

  .input:disabled {
    background-color: white;
    opacity: 0.5;
  }

  .btn-primary {
    margin-bottom: 4%;
    margin-top: 2%;
    margin-right: 5;
    margin-left: 5;
  }

  .login-label {
    horizontal-align: center;
    color: #A8A8A8;
    font-size: 16;
  }

  .sign-up-label {
    margin-bottom: 4%;
  }

  .bold {
    color: #000000;
  }
</style>
