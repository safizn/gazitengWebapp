<dom-module id="ads-element" script>



		<style>
		 :host {
		 }

        /* =============================================

           ============================================= */

</style>

  <template>

  	<div class="h1-wrapper" style="background-color:black; color:white; padding-top:8px; padding-bottom:8px; margin-bottom:10px;"><center>
    	<h1 style="margin:0;">{{titleconcept}}</h1>
    	<h1 style="margin:0;">{{titleconcept}}</h1>

        <p style=" font-size:16px; font-style:italic; color:white; margin-bottom:0;">{{description}}</p>
	</center></div>

  </template>
</dom-module>

<script>
	Polymer({
		is: "ads-element",
		properties:{
 			titleconcept:{ type: String },
 			description:{ type: String }
		}
	});
</script>
