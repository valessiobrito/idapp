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
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nome Social</label>
              <md-input v-model="nomesocial" type="text"></md-input>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Nome Artistico</label>
              <md-input v-model="nomeartistico" type="text"></md-input>
            </md-field>
          </div>
           <div class="md-layout-item md-small-size-50 md-size-33">
              <md-datepicker v-model="selectedDate" lang="pt-br">
                <label>Data de nascimento</label>
              </md-datepicker>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-50">
              <md-checkbox v-model="acessibilidade">Pessoa com Deficiência ou Mobilidade Reduzida?</md-checkbox>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-33">
            <!--  categorias adotadas pelo IBGE desde o Censo Demográfico de 1991: branco, preto, amarelo, pardo e indígena (Petruccelli, 2012) -->
            <md-field>
              <md-select v-model="etnia" name="etnia" id="etnia" placeholder="Raça/Cor">
                <md-option value="branco">Branco</md-option>
                <md-option value="preto">Preto</md-option>
                <md-option value="amarelo">Amarelo</md-option>
                <md-option value="indigena">Indígena</md-option>
              </md-select>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-33">
            <md-field>
              <md-select v-model="orientacaosexual" name="orientacaosexual" id="orientacaosexual" placeholder="Orientação Sexual">
                <md-option value="heterossexual">Heterossexual</md-option>
                <md-option value="homossexual">Homossexual</md-option>
                <md-option value="bissexual">Bissexual</md-option>
                <md-option value="intersexual">Intersexual</md-option>
              </md-select>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-50 md-size-33">
            <md-field>
              <md-select v-model="genero" name="genero" id="genero" placeholder="Orientação Sexual">
                <md-option value="homem">Homem</md-option>
                <md-option value="mulher">Mulher</md-option>
                <md-option value="transgênero">Transgênero</md-option>
                <md-option value="naobinario">Não binário</md-option>
              </md-select>
            </md-field>
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

export default {
  name: 'edit-perfil',
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
      estado: 'DF',
      cidade: 'Brasília',
      anotacoes: null
    }
  }
}

</script>
<style>

</style>
