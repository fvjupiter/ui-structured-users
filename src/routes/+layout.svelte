<script>
	import "../styles/app.css";
	import Nav from "../components/Nav.svelte";
	import ToTopButton from "../components/searchbar/ToTopButton.svelte";
	import viewport from "../lib/useViewport"

	let isDark = typeof localStorage != 'undefined' && localStorage.getItem('theme') != null ? localStorage.getItem('theme') === "dark" : true
	const toggleMode = () => {
		localStorage.setItem("theme", isDark ? 'light' : 'dark')
		isDark = !isDark
	}

	let topRef = null
    let isScrolledToTop = true
	const scrollToTop = () => {
        if(topRef && !isScrolledToTop) topRef.scrollIntoView()
    }

</script>

{#if typeof localStorage !== 'undefined'}
	<div class={`${isDark && 'dark'}`}>

		<!-- check for scroll -->
		<div 
			use:viewport
			on:enterViewport={() => isScrolledToTop = true}
			on:exitViewport={() => isScrolledToTop = false}
			bind:this={topRef} class="absolute"
		/>

		<!-- navbar -->
		<Nav {toggleMode} {isDark}/>

		<!-- main content -->
		<div class={`min-h-screen bg-white dark:bg-zinc-900`}>
			<div class={`max-w-5xl mx-auto rounded-3xl md:pt-4 pb-96 md:px-4`}>
				<slot />
				<ToTopButton {scrollToTop} {isScrolledToTop} />
			</div>
		</div>
		
	</div>
{/if}

