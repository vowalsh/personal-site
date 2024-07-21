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
    
    let timelineEvents = [
        {
            year: '2017',
            description: 'began my journey in computer science at Lehigh University',
            fullTimeline: 'august 2017 - may 2022',
            details: `fell in love with programming in the fall of 2017, went on to:
            - establish the Lehigh Coders\' Community (now the Lehigh ACM chapter)
            - become one of the original members of Lehigh Blockchain
            - join & conduct research with the Scalable Systems Software Research Group (SSS-RP)
            - graduate with a dually accredited B.S. in Computer Science & Business
            - become first ever Technical Development Chair of the CSB Association
            - graduate again with a M.S. in Computer Science & Engineering with a focus in ML`,
            organizations: [
            { name: 'cse @ Lehigh', link: 'https://engineering.lehigh.edu/cse' }, 
            { name: 'Lehigh Blockchain', link: 'https://wordpress.lehigh.edu/blockchain/' },
            { name: 'SSS-RP', link: 'https://wordpress.lehigh.edu/sss/' },
            { name: 'Lehigh ACM', link: 'https://acm.cse.lehigh.edu/' }
            ]
        },
        // Add more events with similar structure
    ];

    let activeEvent = null;

    function toggleEvent(event) {
        activeEvent = activeEvent === event ? null : event;
    }
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
      
    <!-- timeline -->
    <script>
        let activeEvent = null;
      
        function toggleEvent(event) {
          activeEvent = activeEvent === event ? null : event;
        }
      
        let timelineEvents = [
          {
            year: '2017',
            description: 'started journey in tech',
            fullTimeline: 'january 2017 - december 2017',
            details: `began learning programming
      explored various tech fields
      focused on machine learning`,
            organizations: [
              { name: 'tech university', link: 'https://techuniversity.edu' },
              { name: 'coding bootcamp', link: 'https://codingbootcamp.com' }
            ]
          },
          // Add more events with similar structure
        ];
      </script>
      
      <section id="timeline" class="min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-8">
        <div class="w-full max-w-3xl">
          <h2 class="text-3xl font-bold mb-12 text-center">timeline</h2>
          <div class="relative">
            {#each timelineEvents as event, index}
              <div class="mb-8">
                <div class="flex items-start cursor-pointer" on:click={() => toggleEvent(event)}>
                  <div class="w-24 text-right pr-4 font-bold" class:text-[#94cbf3]={activeEvent === event}>{event.year}</div>
                    <div class="w-4 h-4 rounded-full bg-terminal-white relative mt-1">
                        <div class="absolute left-1/2 top-full w-0.5 h-16 bg-terminal-white transform -translate-x-1/2"></div>
                    </div>
                    <div class="ml-4 flex-grow" class:text-[#94cbf3]={activeEvent === event}>
                        <div>{event.description}</div>
                    </div>
                </div>
                {#if activeEvent === event}
                  <div class="mt-4 ml-32 w-full pr-4">
                    <div class="italic text-sm">{event.fullTimeline}</div>
                        {#if event.organizations && event.organizations.length > 0}
                            <div class="mt-2 text-sm">
                            {@html event.organizations.map(org => `<a href="${org.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-300">${org.name}</a>`).join(', ')}
                            </div>
                        {/if}
                    <div class="mt-2 text-sm">{@html event.details.replace(/\n/g, '<br>')}</div>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </section>
      
      
      
      
      
      
  </main>
  
  <style>
    main {
      scroll-behavior: smooth;
    }
  </style>
