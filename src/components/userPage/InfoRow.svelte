<script>
    export let isOdd = false
    export let href = ''
</script>

<div class={`py-4 px-4 sm:px-8 ${isOdd && 'bg-black/5 dark:bg-white/5'}`}>
    <div class='between max-w-sm mx-auto'>
        <div class="relative pr-4 dark:text-zinc-400 text-zinc-800 text-left font-semibold">
            {#if $$slots.icon}
                <div class="translate-y-0.5 w-5 h-5"><slot name="icon"/></div>
            {/if}
            {#if $$slots.title}
                <slot name="title"/>
            {/if}
        </div>
        {#if href}
            <p class="text-right">
                <a href={href} target="_blank" class="hover:underline dark:hover:text-white hover:text-black cursor-pointer">
                    <slot name='value'/>
                </a>
            </p>
        {:else}
            <p class="text-right">
                <slot name='value'/>
            </p>
        {/if}
    </div>
</div>
