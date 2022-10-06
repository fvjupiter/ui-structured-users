<script>
	import MdRemoveRedEye from "svelte-icons/md/MdRemoveRedEye.svelte";
    import { color } from "../../stores/colorstore";

    export let filterBy = () => {}
    export let wasViewed = false
</script>

<button on:click={() => filterBy('wasViewed')} 
    class={`
        group center w-1/2 h-10 md:h-6 p-1
        text-xs cursor-pointer
        ${wasViewed && 'bg-black/10 dark:bg-white/10'}
    `}>
    <div class={`
            h-7 w-7 md:h-6 md:w-6
            group-hover:text-zinc-900 text-zinc-500 
            dark:text-zinc-300 dark:group-hover:text-white
        `} 
        style={wasViewed 
            ? `color: ${$color}; filter: drop-shadow(0 1px 0.5px black);` 
            : null
        }>
        <MdRemoveRedEye />
    </div>
</button>
