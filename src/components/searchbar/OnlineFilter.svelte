<script>
    export let filterBy = () => {}
    export let isOnline = false
</script>

<button on:click={() => filterBy('isOnline')} 
    class={`
        group center w-1/2 h-10 md:h-6 p-1
        text-xs cursor-pointer
        ${isOnline && 'bg-black/10 dark:bg-white/10'}
    `}>
    <div class={`
        ${isOnline 
            ? 'bg-lime-300 shadow-sm shadow-black' 
            : 'group-hover:bg-zinc-900 bg-zinc-500 dark:bg-zinc-300 dark:group-hover:bg-white'
        }
        rounded-full duration h-5 w-5 md:h-4 md:w-4
    `}/>
</button>
