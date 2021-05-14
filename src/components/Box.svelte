<div class="box">
	<slot></slot>
</div>

<style>
	.box {
		width: 600px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 100px 100px 180px rgba(0,0,0,0.1);
        background-image: linear-gradient(rgba(74, 150, 201, 1),rgb(155, 146, 146));
		padding: 1em;
		margin: 0 0 1em 0;
        position:static;
        image-orientation: flip;
        
	}
</style>