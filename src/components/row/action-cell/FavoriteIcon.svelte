<script>
	import MdStar from "svelte-icons/md/MdStar.svelte";
	import MdStarBorder from "svelte-icons/md/MdStarBorder.svelte";
    import { color } from "../../../stores/colorstore";

    export let index = 0
    export let isFavorite = false
    export let setIsFavorite = () => {}
    let isHitStar = false

    const toggleFavorite = (e) => {
        e.stopPropagation()
        setIsFavorite(index)
        if(!isFavorite){
            isHitStar = true
            setTimeout(() => isHitStar = false, 300);
        }
    }

</script>


<div class='relative center'>

    <!-- Ring -->
    <div style="border-color: {isHitStar ? $color : 'transparent'};" 
        class={`
            ${isHitStar ? 'scale-100' : 'scale-0 duration-long'}
            absolute h-10 w-10
            rounded-full border-2
    `}/>

    <!-- Star -->
    {#if isFavorite}
        <div 
            on:click={toggleFavorite}
            style='color: {$color}' 
            class={`
                flex items-center justify-center mx-1 p-1 h-8 w-8 
                hover:text-zinc-900 text-zinc-500 dark:text-zinc-300 dark:hover:text-white 
                rounded-full cursor-pointer
            `} 
            >
            <MdStar />
        </div>
    {:else}
        <div 
            on:click={toggleFavorite}
            class={`
                flex items-center justify-center mx-1 p-1 h-8 w-8 
                hover:text-zinc-900 text-zinc-500 dark:text-zinc-300 dark:hover:text-white 
                rounded-full cursor-pointer 
                opacity-20 md:opacity-0 md:group-hover:opacity-100 
            `}>
            <MdStarBorder />
        </div>
    {/if}

</div>