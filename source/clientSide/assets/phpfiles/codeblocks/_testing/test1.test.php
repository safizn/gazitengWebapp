<template is="dom-bind" on-click="handleClickOff">
	<script>
		// init controller
		var controller = new ScrollMagic.Controller();
	</script>
	<div id="pin1" class="" style="">
		<p>Stay where you are (at least for a while).</p>
	</div>
	<script>
		$(function () { // wait for document ready
			// build scene
			var scene = new ScrollMagic.Scene({triggerElement: "#pin1", duration: 300})
							.setPin("#pin1")
							.addTo(controller);
		});
	</script>

	<div id="pin2" class="">
		<paper-material elevation="0" id="paperMaterial"
										class="questionContainer layout horizontal center " on-click="handleClick" style="display: block;">
			<div id="header" class="header "style="text-align: right; width: 100%; display: flex;  cursor: pointer;" dir="rtl">Title</div>
		</paper-material>
	</div>
	<script>
	$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#pin2", duration: 100})
		.setPin("#pin2")
		.addTo(controller);
	});
	</script>

		<template is="dom-repeat"
					items="{{questions}}"
					as="question"
					filter="{{_computeFilter(filterBy)}}"
					>
			<questions-item question="{{question}}"></questions-item>
		</template>

</template>
