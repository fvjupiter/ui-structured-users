<script>
    export let firstName = ''
    export let lastName = ''
    export let picture = ''
</script>

<div class="start relative py-1 pl-2">
    <div  class="h-12 w-12 ml-5 m-0.5 mr-3 rounded-sm center overflow-hidden shadow-md">
        <img src={picture} alt={firstName} />
    </div>
    <div class="text-black dark:text-white">
        {firstName} {lastName}
    </div>
</div>
