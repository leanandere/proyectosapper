<script>
	import Nav from '../components/Nav.svelte';
	import GlobalStyle from "../components/GlobalStyle.svelte";
import Headertailwind from '../components/headertailwind.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	header{

			text-align: center;
			position: absolute;

	}
</style>


<header> 	 <Nav {segment}/>   </header>


<main>
	<GlobalStyle />
	<slot></slot>
</main>



