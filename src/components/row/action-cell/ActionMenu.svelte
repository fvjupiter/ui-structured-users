<script>
    import { color } from '../../../stores/colorstore'
</script>

<div style="border-color: {$color};"
    class="
    absolute z-20 right-0 top-10
    bg-zinc-50 dark:bg-zinc-900 
    shadow-xl dark:shadow-black 
    border rounded-lg overflow-hidden">
    <slot />
</div>
