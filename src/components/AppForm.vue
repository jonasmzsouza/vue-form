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
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">E-mail:</label>
            <div class="col">
              <input type="email" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Password:</label>
            <div class="col">
              <input type="password" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Age:</label>
            <div class="col">
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Gender:</label>
            <div class="col">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" />
                <label class="form-check-label"> Female </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" />
                <label class="form-check-label"> Male </label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">License:</label>
            <div class="col">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label">I read and accept the terms</label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Interests:</label>
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label"> JavaScript </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label"> VueJS </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
                <label class="form-check-label"> Angular </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
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
                pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
              />
              <small class="text-muted">Format: 11 97777-5555</small>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Date:</label>
            <div class="col">
              <input type="date" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Local Date/time:</label>
            <div class="col">
              <input type="datetime-local" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Month:</label>
            <div class="col">
              <input type="month" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Week:</label>
            <div class="col">
              <input type="week" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Time:</label>
            <div class="col">
              <input type="time" class="form-control" />
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
              <button class="btn btn-success" type="button">
                Send (btn)
              </button>
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
          <spam>Object state</spam>
        </div>

        <span class="fs-4">DATA OUTPUT</span>
        <hr />
        <div class="mb-3 row">
          <spam>Name:</spam>
        </div>
        <div class="mb-3 row">
          <spam>E-mail:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Password:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Age:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Gender:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Licença:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Interests:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Phone:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Date:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Local Date/timne:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Month:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Week:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Time:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Color:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Limite value:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Hidden:</spam>
        </div>
        <div class="mb-3 row">
          <spam>Upload:</spam>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForm",
};
</script>
