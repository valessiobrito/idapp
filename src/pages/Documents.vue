<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
  <form>
    <md-card>
      <md-card-header data-background-color="gray">
        <h4 class="title">Pedidos de Selos</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
         <div class="md-layout-item md-small-size-50 md-size-50">
              <md-checkbox v-model="ceac">CEAC</md-checkbox>
              <md-checkbox v-model="pcap">CAP</md-checkbox>
              <md-checkbox v-model="pcultura">Ponto de cultura</md-checkbox>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Upload</label>
              <input type="file" id="fileinput" style="margin-top: 35px;" />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Input</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Anotações</label>
              <md-textarea v-model="anotacoes"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Salvar</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
