<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Informações Pessoais</h4>
        <p class="category"></p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nome Completo</label>
              <md-input v-model="nome" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Nome Social</label>
              <md-input v-model="nomesocial" type="text"></md-input>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-40">
            <md-field>
              <label>Nome Artistico</label>
              <md-input v-model="nomeartistico" type="text"></md-input>
            </md-field>
          </div>
           <div class="md-layout-item md-small-size-50 md-size-20">
            <md-field>
              <label>Data</label>
              <date-picker v-model="time1" :first-day-of-week="1" width="100%" placeholder="Data de nascimento" lang="pt-br"></date-picker>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-33">
            <md-field>
              <md-list-item to="#something" class="dropdown">
                <drop-down>
                  <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="label">Raça/Cor</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#">Pardo</a></li>
                    <li><a href="#">Branco</a></li>
                    <li><a href="#">Amarelo</a></li>
                  </ul>
                </drop-down>
              </md-list-item>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-33">
            <md-field>
              <md-list-item to="#something" class="dropdown">
                <drop-down>
                  <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="label">Orientação sexual</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#">Heterossexual</a></li>
                    <li><a href="#">Homossexual</a></li>
                    <li><a href="#">Bissexual</a></li>
                  </ul>
                </drop-down>
              </md-list-item>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-33">
            <md-field>
              <md-list-item to="#something" class="dropdown">
                <drop-down>
                  <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="label">Gênero</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#">Homem</a></li>
                    <li><a href="#">Mulher</a></li>
                    <li><a href="#">Transgênero</a></li>
                  </ul>
                </drop-down>
              </md-list-item>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-50">
              <md-checkbox v-model="acessibilidade" value="Sim">Pessoa com Deficiência ou Mobilidade Reduzida? {{ acessibilidade }}</md-checkbox>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-70">
            <md-field>
              <label>Email Address</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Telefone</label>
              <md-input v-model="telefone" type="phone"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Endereço</label>
              <md-input v-model="endereco" type="text"></md-input>
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
              <label>CEP</label>
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
</template>
<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'edit-perfil',
  components: { DatePicker },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      acessibilidade: false,
      disabled: null,
      emailadress: null,
      code: null,
      anotacoes: null
    }
  }
}

</script>
<style>

</style>
