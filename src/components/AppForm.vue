<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 bg-light">
        <span class="fs-4">DATA INPUT</span>
        <hr />
        <form>
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
              <input type="color" class="form-color" />
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
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Hidden:</label>
            <div class="col">
              <input type="hidden" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Upload:</label>
            <div class="col">
              <input type="file" class="form-control" />
            </div>
          </div>
          <hr />
          <div class="mb-3 row">
            <div class="col d-flex justify-content-between">
              <button class="btn btn-secondary" type="reset">Clear</button>
              <button class="btn btn-success" type="button">Send (btn)</button>
              <button class="btn btn-success" type="submit">
                Send (submit)
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-12 col-md-6 text-white bg-secondary">
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
          <span>Color:</span>
        </div>
        <div class="mb-3 row">
          <span>Limite value:</span>
        </div>
        <div class="mb-3 row">
          <span>Hidden:</span>
        </div>
        <div class="mb-3 row">
          <span>Upload:</span>
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
    form: {
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
    },
  }),
};
</script>
