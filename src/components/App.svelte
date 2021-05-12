<script>

import Box from './Box.svelte';
import Login from "./Login.svelte";
export let name;


function handleClick() {
	alert('clicked');
}
</script>



<main>
	<h1>Hola {name}!</h1>

	


	


<Box>

	<Login></Login>

</Box>
</main>




<style>


	main {
		background-image: linear-gradient(rgba(74, 150, 201, 1),rgb(155, 146, 146));
		text-align:center;
		padding: 10em;
		max-width: 10%;
		margin: auto;
	}

	h1 {
		color:rgb(10, 10, 10);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		text-shadow: 0 0 3px #43c754;
		
	}


	@media (min-width: 50px) {
		main {
			max-width: none;
		}
	}
</style>








