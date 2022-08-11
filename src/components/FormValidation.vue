<template>
  <form @submit.prevent="submit">
    <div class="form">
      <span class="title">Create Contact</span>
      <div class="FormInput">
        <label>Name</label>
        <input v-model="$v.formData.name.$model" class="name" type="text" />
        <p class="error" v-if="!$v.formData.name.required">
          *This field is required
        </p>
        <p class="error" v-if="!$v.formData.name.minLength">
          Field must have at least 3 characters.
        </p>
      </div>
      <div class="FormInput">
        <label>e-mail</label>
        <input v-model="$v.formData.email.$model" class="email" type="text" />
        <p class="error" v-if="!$v.formData.email.required">
          *This field is required!
        </p>
        <p class="error" v-if="!$v.formData.email.email">
          Please enter a valid e-mail.
        </p>
      </div>
      <div class="FormInputButton">
        <button @click="submit" class="FormButton">Submit</button>
      </div>
    </div>
  </form>
</template>
<script>
import { mapActions } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
      },
    };
  },
  validations: {
    formData: {
      name: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    ...mapActions(["addContactAction"]),
    submit() {
      // this.$store.dispatch("addContactAction",this.formData)

      this.$v.$touch();
      if (this.$v.$invalid) {
        alert("Please fill the form correctly.")
        return;
      } else {
        console.log("submit!");
        this.addContactAction(this.formData);
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  background-color: #1d2537;
  border-radius: 20px;
  display: grid;
  justify-items: center;
  padding: 20px;
  gap: 20px;
  color: #b1b9d8;
  font-size: 20px;
  .FormInput {
    width: 300px;
    display: flex;
    flex-direction: column;
    input{
      height: 35px;
      background-color: #b1b9d8;
    }
    label{
      margin-bottom: 10px;
    }
    .name {
      border-radius: 10px;
    }
    .email {
      border-radius: 10px;
    }
    .error{
      margin-top: 5px;
      font-size: 12px;
      color: red;
    }
  }
  .FormInputButton {
    .FormButton {
      border-radius: 10px;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, .2);
      border: none;
      width: 100px;
      height: 40px;
      color: #1d2537;
      background-color: #8e66ff;
      font-size: 15px;
      font-weight: bold;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
