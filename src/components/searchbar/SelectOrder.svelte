<script>
    export let selectedOrder = null
    export let selectOptions = []
</script>

<div class="end ml-2 w-fit text-base md:text-sm p-0.5 cursor-pointer">
    <select bind:value={selectedOrder} 
        class={`
            bg-transparent outline-0 
            text-left text-zinc-500 dark:text-zinc-200
            cursor-pointer
        `}>
        {#each selectOptions as option (option.value)}
            <option value={option.value}>{option.label}</option>
        {/each}
    </select>
</div>
