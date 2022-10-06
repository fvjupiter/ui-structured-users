<script>
	import MdRemoveRedEye from "svelte-icons/md/MdRemoveRedEye.svelte";
    import { color } from "../../../stores/colorstore";
</script>


<div class={`absolute z-10 left-[18px] -bottom-0.5 h-5 w-5`}>
    <div style='filter: drop-shadow(0 1px 0.5px black); color:{$color};'>
        <MdRemoveRedEye />
    </div>
</div>

