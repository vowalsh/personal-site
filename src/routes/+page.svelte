<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
  
    let currentSection = 'home';
  
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
    });
  </script>
  
  <Header {currentSection} />
  
  <main class="bg-background text-text font-mono">
    <section id="home" class="min-h-screen flex items-center justify-center">
      <div class="max-w-2xl">
        <h1 class="text-4xl font-bold mb-4">Your Name</h1>
        <p class="text-xl">Your concise subheader</p>
      </div>
    </section>
    <!-- Other sections... -->
  </main>
  
  
  <style>
    main {
      scroll-behavior: smooth;
    }
  </style>
  