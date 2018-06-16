<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
 <md-card>
      <md-card-header data-background-color="gray">
        <h4 class="title">Pedidos de Selos</h4>
        <p class="category"></p>
      </md-card-header>
      <md-card-content>
       <div class="md-layout">
        <div class="md-layout-item md-small-size-50 md-size-33">
              <md-checkbox v-model="ceac">CEAC</md-checkbox>
        </div>
        <div class="md-layout-item md-small-size-50 md-size-33">
              <md-checkbox v-model="pcap">CAP</md-checkbox>
        </div>
        <div class="md-layout-item md-small-size-50 md-size-33">
              <md-checkbox v-model="pcultura">Ponto de cultura</md-checkbox>
        </div>
        </div>
      </md-card-content>
 </md-card>

  <form>
    <md-card>
      <md-card-header data-background-color="gray">
        <h4 class="title">Geral</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-70">
            <md-field>
              <label>Documento de identidade</label>
              <md-file v-model="identidade" />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-70">
            <md-field>
              <label>CPF</label>
              <md-file v-model="cpf" />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-70">
            <md-field>
              <label>Comprovante de residência</label>
              <md-file v-model="residencia" />
            </md-field>
          </div>

        <h3 class="subtitle">Experiência</h3>

          <div class="md-layout-item md-small-size-100 md-size-70">
            <md-field>
              <label>Histórico/Currículo</label>
              <md-file v-model="curriculo" />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-70">
            <md-field>
              <label>Portfólio</label>
              <md-file v-model="portfolio" />
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Experiência - Descrição longa</label>
              <md-textarea v-model="expdesc"></md-textarea>
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
      ceac: false,
      pcap: false,
      pcultura: false
    }
  },
  methods: {
  }
}
</script>

<style>

.subtitle {
   background: #CCC;
   clear: both;
   width: 100%;
   padding: 0.5em;
   color: #FFF;
   border-radius: 5px;
   font-size: 1.3em;
}

</style>
