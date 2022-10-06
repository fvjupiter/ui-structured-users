<script>
    import { color } from "../stores/colorstore"
    import IoIosMoon from 'svelte-icons/io/IoIosMoon.svelte'
    import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte'
    import MdHome from 'svelte-icons/md/MdHome.svelte'
	import { onMount } from "svelte";

    export let toggleMode = () => {}
    export let isDark = true

    let colorFromInput = typeof localStorage !== 'undefined' && localStorage.getItem('color') !== null ? localStorage.getItem('color') : '#00d5ff'

    $: {
        color.set(colorFromInput)
        if(typeof localStorage != 'undefined') localStorage.setItem("color", colorFromInput)
    }

    $: color2 = isDark ? 'rgb(24,24,27)' : 'white'

    let hasMounted = false
    onMount(() => setTimeout(() => hasMounted = true, 1000))

</script>

<nav 
    class="
        w-full mx-auto p-1.5 between 
        text-zinc-500 dark:text-zinc-600 
        bg-white dark:bg-zinc-900
    "
    >
    <div class="w-40 between mx-auto">
        <!-- Home Button -->
        <a href="/" class="h-7 w-7 hover:text-zinc-900 dark:hover:text-zinc-400 duration-short">
            <MdHome />
        </a>

        <!-- Color Picker -->
        <div 
            class="center {hasMounted ? 'dark:text-white text-black' : 'text-transparent'} transition-all duration-1000 ease-out font-bold text-xl">
            J
            <div class="
                {hasMounted ? 'scale-100' : 'scale-0'} h-5 w-5
                mx-1 rounded-full overflow-hidden border border-black 
                transition-all duration-[2s] ease-in-out delay-1000
            ">
                <input type="color" bind:value={colorFromInput}
                    class='border-0 scale-[2] cursor-pointer'
                />
            </div>
            YCE
        </div>

        <!-- Mode Toggle -->
        <button on:click={toggleMode} 
            class="
                h-7 w-7
                hover:text-zinc-900 dark:hover:text-zinc-400
                rounded-full overflow-hidden duration-short">
            {#if isDark}
                <IoIosMoon />
            {:else}
                <IoIosSunny />
            {/if}
        </button>
    </div>
</nav>
<div style="background-image: linear-gradient(90deg, {color2}, {$color}, {color2});"
    class='h-1 mx-auto {hasMounted ? 'w-full' : 'w-0'} transition-all duration-[2s] ease-out'
/>
