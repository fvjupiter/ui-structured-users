<script>
	import MdStar from "svelte-icons/md/MdStar.svelte";
	import MdStarBorder from "svelte-icons/md/MdStarBorder.svelte";
    import { color } from "../../stores/colorstore";

    export let filterBy = () => {}
    export let isFavorite = false
</script>

<button on:click={() => filterBy('isFavorite')} 
    class={`
        group center w-12 h-10 md:h-6 p-1
        text-xs cursor-pointer
        ${isFavorite && 'bg-black/10 dark:bg-white/10'}
    `}>
    {#if isFavorite}
        <div style='color: {$color};' 
            class={`
                h-7 w-7 md:h-6 md:w-6
                group-hover:text-zinc-900 text-zinc-500 
                dark:text-zinc-300 dark:group-hover:text-white
            `}>
            <MdStar />
        </div>
    {:else}
        <div class={`
                h-7 w-7 md:h-6 md:w-6
                group-hover:text-zinc-900 text-zinc-500 
                dark:text-zinc-300 dark:group-hover:text-white
            `}>
            <MdStarBorder />
        </div>
    {/if}
</button>
