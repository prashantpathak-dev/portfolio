<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Head from '$lib/components/head.svelte';
</script>

<Head />

<main class="bg-base flex h-screen w-screen flex-col">
	{@render children()}
</main>
