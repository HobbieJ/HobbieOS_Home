<script setup>
import TextTitle from './TextTitle.vue';
</script>

<template>
    <article>
        <a href="#" class="flex flex-col">
            <TextTitle />
            <div class="max-w-prose pr-4">
                <time datetime="2024-06-01">1 June 2024</time>
                <h2 class="hover:underline">Example Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies fringilla felis, non iaculis diam pulvinar posuere. Proin vestibulum quam ligula, ut tristique erat mattis et. Vivamus facilisis venenatis auctor. Donec sed leo sagittis, vehicula est malesuada, interdum enim. Aliquam sed odio suscipit, venenatis diam eget, fringilla justo. Nunc accumsan egestas nisl in suscipit. Sed a mi auctor, vestibulum ipsum non, rutrum nibh. Sed auctor egestas nisl et efficitur. Nam eu purus non lacus fringilla semper a eu lorem. Curabitur tristique id libero nec hendrerit. Maecenas consequat dignissim velit eget mollis.</p>
            </div>
        </a>
    </article>
</template>