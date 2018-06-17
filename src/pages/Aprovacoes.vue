<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
       <form>
         <md-card>
           <md-card-header :data-background-color="dataBackgroundColor">
             <h4 class="title">Verificação de Documentos</h4>
             <p class="category"></p>
           </md-card-header>

           <md-card-content>
             <div class="md-layout">
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <md-field>
                   <label>Documento de identidade</label>
                   <md-file v-model="identidade" />
                 </md-field>
               </div>
               <div class="md-layout-item md-small-size-20 md-size-25">
                   <md-checkbox v-model="valid1">Validado</md-checkbox>
               </div>
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <md-field>
                   <label>CPF</label>
                   <md-file v-model="cpf" />
                 </md-field>
               </div>
               <div class="md-layout-item md-small-size-20 md-size-25">
                   <md-checkbox v-model="valid2">Validado</md-checkbox>
               </div>
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <md-field>
                   <label>Comprovante de residência</label>
                   <md-file v-model="residencia" />
                 </md-field>
               </div>
               <div class="md-layout-item md-small-size-20 md-size-25">
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
