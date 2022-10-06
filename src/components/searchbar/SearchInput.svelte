<script>
    export let searchVal = ''
</script>

<input 
    type="text" 
    placeholder="Search user by name or id"
    bind:value={searchVal}
    class={`
        w-full p-2 px-4 
        text-base md:text-sm 
        placeholder:text-zinc-500 placeholder:dark:text-zinc-600
        bg-transparent 
        outline-0 ring-0 border-0
    `} 
/>

