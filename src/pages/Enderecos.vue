<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Endereços</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Identificação do Endereço</label>
              <md-input v-model="nome" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Código postal</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>País</label>
              <md-input v-model="pais" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Estado</label>
              <md-input v-model="estado" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Cidade</label>
              <md-input v-model="cidade" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Região administrativa</label>
              <md-input v-model="ra" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-70 md-size-85">
            <md-field>
              <label>Endereço</label>
              <md-input v-model="endereco" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-30 md-size-15">
            <md-field>
              <label>Número</label>
              <md-input v-model="numero" type="text"></md-input>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Complemento</label>
              <md-input v-model="complemento" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Anotações</label>
              <md-textarea v-model="anotacoes"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Adicionar</md-button>
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
