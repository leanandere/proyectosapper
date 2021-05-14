<script>
import Box from "../components/Box.svelte";
import Login from "../components/Login.svelte";

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
<h1>Great successsssssss!! </h1>
<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>	

<Login></Login>

</Box>

</center>
