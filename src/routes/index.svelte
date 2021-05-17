<script>
import Box from "../components/Box.svelte";
import Login from "../components/Login.svelte";
import Login2 from "../components/Login2.svelte";
import Login3 from "../components/Login3.svelte";

</script>
<style lang="postcss">
	h1, figure, p {
		@apply text-center my-0 mx-auto;
	}

	h1 {
		@apply text-3xl uppercase font-bold m-0 mb-4 text-orange-500 font-sans;
	}
	
	figure {
		@apply m-0 mb-4;
	}
	
	img {
		@apply w-full max-w-5xl m-0 mb-4;
	}
	
	p {
		@apply my-0 mx-auto;
	}

	@screen md {
		h1 {
			@apply text-5xl;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<center>
<Box>
<h1>INGRESO ! </h1>
<figure>
	<img alt='Success Kid' src='26824.jpg'>
	<figcaption>Ingrese aqui : </figcaption>
</figure>	
<Login></Login>
</Box>

<Box>
<Login2></Login2>
</Box>

<Login3></Login3>

</center>
