<script>
    import { color } from "../../stores/colorstore";

    export let scrollToTop = () => {}
    export let isScrolledToTop = true
</script>

<div on:click={scrollToTop}
    style="border-color: {$color};"
    class={`
        inset-x-1/2 -translate-x-5 sm:-translate-x-6
        fixed bottom-4 xl:bottom-6 z-30 h-10 w-10 sm:h-12 sm:w-12 center
        ring dark:ring-white/30 ring-black/10 border-2
        ${!isScrolledToTop ? 'opacity-60 hover:opacity-100 cursor-pointer' : 'opacity-0 scale-0'}
        backdrop text-xs bg-white/60 dark:bg-zinc-800 dark:text-white text-zinc-900 font-bold shadow-xl dark:shadow-black shadow-indigo-900/30
        duration rounded-full
    `}>top
</div>
