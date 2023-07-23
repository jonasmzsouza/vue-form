<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 bg-light">
        <span class="fs-4">DATA INPUT</span>
        <hr />
        <!-- <form @submit.prevent="send($event)" @reset.prevent="clear()"> -->
        <div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Name:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model.lazy="form.name"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">E-mail:</label>
            <div class="col">
              <input type="email" class="form-control" v-model="form.email" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Password:</label>
            <div class="col">
              <input
                type="password"
                class="form-control"
                v-model.trim="form.password"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Age:</label>
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model.number="form.age"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Gender:</label>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Female"
                  v-model="form.gender"
                />
                <label class="form-check-label"> Female </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Male"
                  v-model="form.gender"
                />
                <label class="form-check-label"> Male </label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">License:</label>
            <div class="col">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.license"
                  true-value="YES"
                  false-value="NO"
                />
                <label class="form-check-label"
                  >I read and accept the terms</label
                >
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Interests:</label>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="JavaScript"
                  v-model="form.interests"
                />
                <label class="form-check-label"> JavaScript </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="VueJS"
                  v-model="form.interests"
                />
                <label class="form-check-label"> VueJS </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Angular"
                  v-model="form.interests"
                />
                <label class="form-check-label"> Angular </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="NodeJS"
                  v-model="form.interests"
                />
                <label class="form-check-label"> NodeJS </label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Phone:</label>
            <div class="col">
              <input
                type="tel"
                class="form-control"
                v-model="form.phone"
                v-maska
                data-maska="(##) #####-####"
              />
              <small class="text-muted">Format: (00) 00000-0000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CEP:</label>
            <div class="col">
              <input
                type="tel"
                class="form-control"
                v-model="form.cep"
                v-maska
                data-maska="#####-###"
              />
              <small class="text-muted">Format: 00000-000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CPF:</label>
            <div class="col">
              <input
                type="tel"
                class="form-control"
                v-model="form.cpf"
                v-maska
                data-maska="###.###.###-##"
              />
              <small class="text-muted">Format: 000.000.000-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CNPJ:</label>
            <div class="col">
              <input
                type="tel"
                class="form-control"
                v-model="form.cnpj"
                v-maska
                data-maska="##.###.###/####-##"
              />
              <small class="text-muted">Format: 00.000.000/0000-00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Credit Card:</label>
            <div class="col">
              <input
                type="tel"
                class="form-control"
                v-model="form.creditCard"
                v-maska
                data-maska="#### #### #### ####"
              />
              <small class="text-muted">Format: 0000 0000 0000 0000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">License plate:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.licensePlate"
                v-maska:[options]
                data-maska="['AAA-####', 'aaa-####']"
                data-maska-tokens="A:[A-Z]|a:[a-z]"
              />
              <small class="text-muted">Format: AAA-0000</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label"
              >License plate (Mercosul):</label
            >
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.licensePlateMercosul"
                v-maska:[options]
                data-maska="SSS#S##"
                data-maska-tokens="S:[a-zA-Z]"
              />
              <small class="text-muted">Format: AAA0A00</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">RG:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.rg"
                v-maska:[options]
                data-maska="0-X"
                data-maska-tokens="0:[0-9]:multiple|X:[0-9a-zA-Z]"
              />
              <small class="text-muted"
                >Format: without standard (e.g: 1234, 1234-1, 1234-X,
                1234567890-1, 1234567890-X)</small
              >
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Date:</label>
            <div class="col">
              <input type="date" class="form-control" v-model="form.date" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Local Date/time:</label>
            <div class="col">
              <input
                type="datetime-local"
                class="form-control"
                v-model="form.localDatetime"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Month:</label>
            <div class="col">
              <input type="month" class="form-control" v-model="form.month" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Week:</label>
            <div class="col">
              <input type="week" class="form-control" v-model="form.week" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Time:</label>
            <div class="col">
              <input type="time" class="form-control" v-model="form.time" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Color:</label>
            <div class="col">
              <input type="color" class="form-color" v-model="form.color" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Limite value:</label>
            <div class="col">
              <input
                type="range"
                class="form-range"
                min="0"
                max="100"
                step="1"
                v-model="form.range"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Hidden:</label>
            <div class="col">
              <input type="hidden" class="form-control" v-model="form.hidden" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Upload:</label>
            <div class="col">
              <input
                type="file"
                class="form-control"
                multiple
                @change="selectFiles($event)"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Description:</label>
            <div class="col">
              <textarea
                class="form-control"
                rows="3"
                v-model="form.description"
              ></textarea>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Courses:</label>
            <div class="col">
              <select class="form-control" v-model="form.course">
                <option value="" selected disabled>Select a course</option>
                <option
                  v-for="course in courses"
                  :key="course.id"
                  :value="course.id"
                >
                  {{ course.name }}
                </option>
              </select>
            </div>
          </div>
          <hr />
          <div class="mb-3 row">
            <div class="col d-flex justify-content-between">
              <button class="btn btn-secondary" type="button" @click="clear()">
                Clear (btn)
              </button>
              <button class="btn btn-secondary" type="reset">
                Clear (reset)
              </button>
              <button
                class="btn btn-success"
                type="button"
                @click="send($event)"
              >
                Send (btn)
              </button>
              <button class="btn btn-success" type="submit">
                Send (submit)
              </button>
            </div>
          </div>
        </div>
				<!-- </form> -->
      </div>

      <div
        class="col-12 col-md-6 text-white bg-secondary"
        :style="'background-color:' + form.color + '!important;'"
      >
        <span class="fs-4">OBJECT STATUS</span>
        <hr />
        <div class="mb-5 row">
          <span>{{ form }}</span>
        </div>

        <span class="fs-4">DATA OUTPUT</span>
        <hr />
        <div class="mb-3 row">
          <span>Name: {{ form.name }}</span>
        </div>
        <div class="mb-3 row">
          <span>E-mail: {{ form.email }}</span>
        </div>
        <div class="mb-3 row">
          <span>Password: {{ form.password }}</span>
        </div>
        <div class="mb-3 row">
          <span>Age: {{ form.age }}</span>
        </div>
        <div class="mb-3 row">
          <span>Gender: {{ form.gender }}</span>
        </div>
        <div class="mb-3 row">
          <span>Licença: {{ form.license }}</span>
        </div>
        <div class="mb-3 row">
          <span>Interests:</span>
          <ul>
            <li v-for="(interest, index) in form.interests" :key="index">
              {{ interest }}
            </li>
          </ul>
        </div>
        <div class="mb-3 row">
          <span>Phone: {{ form.phone }}</span>
        </div>
        <div class="mb-3 row">
          <span>CEP: {{ form.cep }}</span>
        </div>
        <div class="mb-3 row">
          <span>CPF: {{ form.cpf }}</span>
        </div>
        <div class="mb-3 row">
          <span>CNPJ: {{ form.cnpj }}</span>
        </div>
        <div class="mb-3 row">
          <span>Credit Card: {{ form.creditCard }}</span>
        </div>
        <div class="mb-3 row">
          <span>License plate (number): {{ form.licensePlate }}</span>
        </div>
        <div class="mb-3 row">
          <span
            >License plate (alpha/number): {{ form.licensePlateMercosul }}</span
          >
        </div>
        <div class="mb-3 row">
          <span>RG: {{ form.rg }}</span>
        </div>
        <div class="mb-3 row">
          <span
            >Date: {{ form.date }} |
            {{ $moment(form.date).format("DD/MM/YYYY") }}</span
          >
        </div>
        <div class="mb-3 row">
          <span
            >Local Date/timne: {{ form.localDatetime }} |
            {{ $moment(form.localDatetime).format("LLLL") }}</span
          >
        </div>
        <div class="mb-3 row">
          <span
            >Month: {{ form.month }} |
            {{ $moment(form.month).format("MMMM [de] YYYY") }}</span
          >
        </div>
        <div class="mb-3 row">
          <span
            >Week: {{ form.week }} |
            {{ $moment(form.week).format(`[Semana] w, YYYY`) }}</span
          >
        </div>
        <div class="mb-3 row">
          <span>Time: {{ form.time }} </span>
        </div>
        <div class="mb-3 row">
          <span>Color: {{ form.color }}</span>
        </div>
        <div class="mb-3 row">
          <span>Limite value: {{ form.range }}</span>
        </div>
        <div class="mb-3 row">
          <span>Hidden: {{ form.hidden }}</span>
        </div>
        <div class="mb-3 row">
          <span>Upload:</span>
          <ul>
            <li v-for="(file, index) in form.files" :key="index">
              {{ file.name }}
            </li>
          </ul>
        </div>
        <div class="mb-3 row">
          <span>Description:</span>
          <div style="white-space: pre">{{ form.description }}</div>
        </div>
        <div class="mb-3 row">
          <span>Course: {{ form.course }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const options = {
  preProcess: (val) => val.toUpperCase(),
};

export default {
  name: "AppForm",
  data: () => ({
    options: options,
    courses: [
      { id: 1, name: "MySQL DataBase" },
      { id: 2, name: "Web Development with VueJS" },
      { id: 3, name: "Web Development with Angular" },
      { id: 4, name: "Web Development with ReactJS" },
      { id: 5, name: "Development with Java & SringBoot Framework" },
      { id: 6, name: "Development with PHP & Laravel Framework" },
    ],
    form: {},
    formInitialState: {
      name: "Jonas",
      email: "jonas@email.com",
      password: "123456",
      age: "25",
      license: "NO",
      interests: [],
      gender: "",
      phone: "",
      cep: "",
      cpf: "",
      cnpj: "",
      creditCard: "",
      licensePlate: "",
      licensePlateMercosul: "",
      rg: "",
      date: "",
      localDatetime: "",
      month: "",
      week: "",
      time: "",
      color: "#6c757d",
      range: 0,
      hidden: "hidden value",
      files: "",
      description: "",
      course: "",
    },
  }),
  created() {
    this.clear();
  },
  methods: {
    selectFiles(event) {
      this.form.files = event.target.files;
    },
    send(e) {
      const form = Object.assign({}, this.form);
      console.log(e);
      console.log(form);
    },
    clear() {
      this.form = Object.assign({}, this.formInitialState);
    },
  },
};
</script>
