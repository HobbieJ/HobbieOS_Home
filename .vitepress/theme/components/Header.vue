<script setup>
import {
    RocketLaunchIcon,
    UserIcon,
    EnvelopeIcon
} from '@heroicons/vue/24/outline'

const props = defineProps(['title'])
</script>

<template>
    <nav>
        <div class="mx-auto px-4 py-2">
            <div class="relative flex items-center justify-between">
                <div class="absolute inset-y-0 left-0 items-center">
                    <a href="/" class="font-logo">{{ title }}</a>
                </div>
                <div class="absolute inset-y-0 right-0 items-center">
                    <ul class="flex flex-1 items-center justify-center space-x-4">
                        <li><a href="/now"><RocketLaunchIcon class="icon" /> Now</a></li>
                        <li><a href="/about"><UserIcon class="icon left-1 bottom-0.5" /> About</a></li>
                        <li><a href="/contact"><EnvelopeIcon class="icon left-1 bottom-0.5" /> Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>