<script>
    import IoIosMore from 'svelte-icons/io/IoIosMore.svelte'

    export let toggleActions = () => {}
    export let showActions = false
</script>

<div on:click={toggleActions}
    class={`relative flex items-center justify-center mx-1 p-1 h-8 w-8 
        hover:text-zinc-900 text-zinc-500 dark:text-zinc-300 dark:hover:text-white 
        rounded-full cursor-pointer
    `}>
    <IoIosMore />
    {#if showActions}
        <slot />
        <div on:click={toggleActions} class="fixed inset-0 z-10"/>
    {/if}
</div>
