<script setup>
import {
    RocketLaunchIcon,
    UserIcon,
    EnvelopeIcon
} from '@heroicons/vue/24/outline'

const props = defineProps(['title'])
</script>

<template>
    <header class="fixed w-full top-0 left-0 right-0 py-4 px-6 bg-snazzy-light">
        <nav class="flex justify-between items-center">
            <a href="/" class="font-logo">{{ title }}</a>
            <ul class="flex justify-between items-center">
                <li class="mx-1">
                    <a href="/now" class="nav-link">
                        <RocketLaunchIcon class="nav-link-icon nav-link-icon-now" />
                        Now
                    </a>
                </li>
                <li class="mx-1">
                    <a href="/about" class="nav-link">
                        <UserIcon class="nav-link-icon nav-link-icon-about" />
                        About
                    </a>
                </li>
                <li class="mx-1">
                    <a href="/contact" class="nav-link">
                        <EnvelopeIcon class="nav-link-icon nav-link-icon-contact" />
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>