<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
       <form>
         <md-card>
           <md-card-header :data-background-color="dataBackgroundColor">
             <h4 class="title">O que são medalhas?</h4>
             <p class="category">Medalhas são os indicadores de validações que sua identidade virtual possui. Elas permitem que os demais sistemas integrados ao ID Cultural possam melhorar sua experiência ao utilizar um serviço digital ou participar de um processo de seleção.</p>
           </md-card-header>

           <md-card-content>
             <div class="md-layout">
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <h4 class="title">CAP Válido</h4>
                 <p class="category">Selo concedido após validação do comitê da CAP.</p>
               </div>
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <h4 class="title">CAP Válido</h4>
                 <p class="category">Selo concedido após validação do comitê da CAP.</p>
               </div>
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <h4 class="title">CAP Válido</h4>
                 <p class="category">Selo concedido após validação do comitê da CAP.</p>
               </div>
               <h3 class="subtitle">Selos pendentes de aprovação</h3>
               <div class="md-layout-item md-small-size-80 md-size-70">
                 <h4 class="title">CEAC Inválido</h4>
                 <p>Problema na submissão de documentos:.</p>
                 <p>- CPF;<br />- RG;<br />- Currículo<br /> <br />
                 Por favor, reenviar os documentos requisitados.</p>
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
