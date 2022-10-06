<script>
	import MdStar from "svelte-icons/md/MdStar.svelte";
	import MdStarBorder from "svelte-icons/md/MdStarBorder.svelte";
    import { color } from "../../stores/colorstore";

    // this component will not affect the UserList data (user.isFavorite won't be toggled)
    // this is bc it is not possible to add (PUT) a new key to the default userObject @dummyapi 
    // (I was only able to change the given keys such as firstName e.g.)

    let isFavorite = Math.random() < 0.5
    let isHitStar = false

    const toggleFavorite = () => {
        isFavorite = !isFavorite
        if(isFavorite){
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
            absolute h-10 w-10 md:h-16 md:w-16
            rounded-full border-2 md:border-4
    `}/>

    <!-- Star -->
    {#if isFavorite}
        <div 
            on:click={toggleFavorite}
            style='color: {$color}' 
            class={`
                flex items-center justify-center mx-1 p-1 h-8 w-8 md:h-12 md:w-12 
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
                flex items-center justify-center mx-1 p-1 h-8 w-8 md:h-12 md:w-12 
                hover:text-zinc-900 text-zinc-500 dark:text-zinc-300 dark:hover:text-white 
                rounded-full cursor-pointer
            `} 
            >
            <MdStarBorder />
        </div>
    {/if}

</div>
