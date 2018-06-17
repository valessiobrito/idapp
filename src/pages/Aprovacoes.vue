<template>

  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
       <form>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Aprovação de selos:</span>
            <md-tabs md-sync-route class="md-success" md-alignment="right">

              <md-tab id="tab-home" md-label="Pendências recentes" md-icon="bug_report">

  <div class="full-control">
    <div class="list">
      <md-list class="ul-primeiro" :md-expand-single="expandSingle">
        <md-list-item md-expand :md-expanded.sync="expandNews">
          <md-icon>library_music</md-icon>
          <span class="md-list-item-text">CAP</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>new_releases</md-icon>
          <span class="md-list-item-text">CEAC</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>contacts</md-icon>
          <span class="md-list-item-text">CPF</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
            <md-list-item class="md-inset">
               <md-checkbox v-model="array" value="1">Fulano de tal</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item>
          <md-icon>person</md-icon>
          <span class="md-list-item-text">Ponto de Cultura</span>
        </md-list-item>
      </md-list>
    </div>

  </div>
               <div class="md-layout-item md-size-100 text-right">
                 <md-button class="md-raised md-success">Verificar</md-button>
               </div>
              </md-tab>

              <md-tab id="tab-posts" md-label="Verificação de Documentos" md-icon="cloud">
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <md-field>
                   <label>Documento de identidade</label>
                   <md-file v-model="identidade" />
                 </md-field>
               </div>
               <div class="md-layout-item md-small-size-20 md-size-20">
                   <md-checkbox v-model="valid1">Validado</md-checkbox>
               </div>
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <md-field>
                   <label>CPF</label>
                   <md-file v-model="cpf" />
                 </md-field>
               </div>
               <div class="md-layout-item md-small-size-20 md-size-20">
                   <md-checkbox v-model="valid2">Validado</md-checkbox>
               </div>
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <md-field>
                   <label>Comprovante de residência</label>
                   <md-file v-model="residencia" />
                 </md-field>
               </div>
               <div class="md-layout-item md-small-size-20 md-size-20">
                   <md-checkbox v-model="valid3">Validado</md-checkbox>
               </div>
               <div class="md-layout-item md-small-size-100 md-size-100">
                 <md-field>
                   <label>Número do Processo no <b>SEI</b></label>
                   <md-input v-model="nome" type="text"></md-input>
                 </md-field>
               </div>
               <div class="md-layout-item md-size-100">
                 <md-field maxlength="5">
                   <label>Anotações</label>
                   <md-textarea v-model="anotacoes"></md-textarea>
                 </md-field>
               </div>
               <div class="md-layout-item md-size-70 text-right">
                 <md-button class="md-raised md-fail">Rejeitar</md-button>
               </div>
               <div class="md-layout-item md-size-30 text-right">
                 <md-button class="md-raised md-success">Aceitar</md-button>
               </div>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
       </form>
       <p> </p>
      </div>
    </div>
  </div>
</template>

<script>

import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from '@/components'

export default{
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data () {
    return {
      valid1: true,
      valid2: false,
      valid3: false
    }
  },
  methods: {
  }
}

</script>

<style>

.md-layout-item {
    float: left !important;
}

.md-ripple > span {
    margin-left: 56px;
    line-height: 50px;
}

ul.ul-primeiro {
    min-height: 60vh;
}

</style>
