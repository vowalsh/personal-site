<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    const icons = writable({});
  
    onMount(async () => {
      const { Github, Twitter, Linkedin } = await import('svelte-icons/fa');
      icons.set({ Github, Twitter, Linkedin });
    });
  </script>
  
  <header class="bg-header text-header font-mono fixed top-0 left-0 right-0 z-10">
    <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
      <div class="text-xl font-bold">
        <a href="/" class="hover:text-gray-300 transition-colors duration-200">owal</a>
      </div>
      <div class="flex items-center space-x-6">
        <ul class="flex space-x-6">
          <li><a href="#background" class="hover:text-gray-300 transition-colors duration-200" class:active={$page.url.hash === '#background'}>Background</a></li>
          <li><a href="#blog" class="hover:text-gray-300 transition-colors duration-200" class:active={$page.url.hash === '#blog'}>Blog</a></li>
          <li><a href="#contact" class="hover:text-gray-300 transition-colors duration-200" class:active={$page.url.hash === '#contact'}>Contact</a></li>
        </ul>
        <div class="flex space-x-4">
          {#if $icons.Github}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-2xl hover:text-gray-300 transition-colors duration-200">
              <svelte:component this={$icons.Github} />
            </a>
          {/if}
          {#if $icons.Twitter}
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-2xl hover:text-gray-300 transition-colors duration-200">
              <svelte:component this={$icons.Twitter} />
            </a>
          {/if}
          {#if $icons.Linkedin}
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-2xl hover:text-gray-300 transition-colors duration-200">
              <svelte:component this={$icons.Linkedin} />
            </a>
          {/if}
        </div>
      </div>
    </nav>
  </header>
  
  
  <style>
    .active {
      @apply font-bold;
    }
  </style>
  