<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
    import TerminalText from '../components/TerminalText.svelte';
  
    let currentSection = 'home';
    let showSubheader = false;
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            currentSection = entry.target.id;
          }
        });
      }, { threshold: 0.5 });
  
      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });

      setTimeout(() => {
        showSubheader = true;
      }, 3000);
    });
  </script>
  
  <Header {currentSection} />
  
  <main class="bg-terminal-black text-terminal-white font-mono min-h-screen">
    <section id="home" class="min-h-screen flex items-center justify-center">
        <div class="w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div class="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 min-h-[20vh] text-center">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <TerminalText text="v. oliver walsh" speed={100} showCursor={true} cursorColor="transparent" />
            </h1>
            <div class="space-y-4">
                {#if showSubheader}
                <p class="text-lg sm:text-xl md:text-2xl">
                    <TerminalText text="machine learning engineering" speed={50} showCursor={false} />
                </p>
                {/if}
            </div>
            <div class="space-y-4">
                {#if showSubheader}
                <p class="text-lg sm:text-xl md:text-2xl">
                    <TerminalText text="blockchain engineering" speed={50} showCursor={false} />
                </p>
                {/if}
            </div>
            <div class="space-y-4">
                {#if showSubheader}
                <p class="text-lg sm:text-xl md:text-2xl">
                    <TerminalText text="distributed systems" speed={50} showCursor={false} />
                </p>
                {/if}
            </div>
          </div>
        </div>
      </section>
      
    <!-- Other sections... -->
  </main>
  
  <style>
    main {
      scroll-behavior: smooth;
    }
  </style>
