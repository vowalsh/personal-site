<script>
    import { onMount } from 'svelte';
    import Header from '../components/Header.svelte';
    import TerminalText from '../components/TerminalText.svelte';
    import { fade } from 'svelte/transition';

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
            details: `fell in love with programming, went on to:
            \t* establish the Lehigh Coders\' Community (now the Lehigh ACM chapter)
            \t* become first ever Technical Development Chair of the CSB Association
            \t* become one of the early members of Lehigh Blockchain
            \t* join & conduct research with the Scalable Systems Software Research Group (SSS-RP)
            \t* work as a Junior Systems Administrator
            \t* TA five courses, head TA of CSE 262 Programming Languages`,
            organizations: [
            { name: 'cse @ Lehigh', link: 'https://engineering.lehigh.edu/cse' }, 
            { name: 'Lehigh ACM', link: 'https://acm.cse.lehigh.edu/' },
            { name: 'Lehigh Blockchain', link: 'https://wordpress.lehigh.edu/blockchain/' },
            { name: 'SSS-RP', link: 'https://wordpress.lehigh.edu/sss/' },
            { name: 'CSB Association', link: 'https://csb.lehigh.edu/csba' }
            ]
        },
        {
            year: '2020',
            description: 'various software engineering internships',
            fullTimeline: 'february 2020 - november 2020',
            details: `software engineer @ Dolomite
            * worked on the frontend of the Dolomite web app, interfacing with the web3j driven backend to create the Order Fills Page, along with developing other features.
            \n
            software engineering internship @ Sony Research & Development
            * interned with the Sony Research & Development team, developing a full-stack web app to enable students to tour colleges during the COVID-19 pandemic.
            `,
            organizations: [
            { name: 'dolomite.io', link: 'https://dolomite.io/' }, 
            { name: 'sony r&d', link: 'https://www.sony.com/en/SonyInfo/research/' },
            ]
        },
        {
            year: '2021',
            description: 'graduated from Lehigh w/ dual B.S. in Computer Science & Business',
            fullTimeline: 'august 2017 - may 2021',
            details: `coursework:
            * Intro to Programming (Teaching Assistant) 
            * Programming & Data Structures (Teaching Assistant) 
            * Systems Software (Teaching Assistant) 
            * Database Systems & Applications 
            * Discrete Structures & Algorithms 
            * Design & Analysis of Algorithms 
            * Software Engineering (Teaching Assistant) 
            * Programming Languages (Head Teaching Assistant) 
            * Computer Architecture & Organization 
            * Blockchain Concepts & Applications 
            * Blockchain Algorithms
            `,
            organizations: [
            { name: 'csb.lehigh.edu', link: 'https://csb.lehigh.edu/' }, 
            ]
        },
        {
            year: '2021',
            description: 'ML intern at Coinbase',
            fullTimeline: 'june 2021 - august 2021',
            details: `
            * one of the early interns on the ML team at Coinbase, competed an end-to-end project to enable observability throughout the ML lifecycle, comprised of components throughout entire platform.
            `,
            organizations: [
            { name: 'ml @ coinbase', link: 'https://www.coinbase.com/blog/building-state-of-the-art-machine-learning-technology-with-efficient/' }, 
            ]
        },
        {
            year: '2022',
            description: 'graduated from Lehigh with M.S. in Computer Science & Engineering',
            fullTimeline: 'august 2021 - may 2022',
            details: `coursework:
            * Machine Learning 
            * Computer Vision
            * Natural Language Processing
            * Principles and Practices of Parallel Computing
            * Advanced Programming Techniques
            * Advanced Programming Languages
            * Network Security
            * Independent Study of Decentralized Blockchain Voting Systems
            `,
            organizations: [
            { name: 'cse.lehigh.edu', link: 'https://engineering.lehigh.edu/academics/graduate/research-based/computer-science-ms-meng' }, 
            ]
        },
        {
            year: '2022',
            description: 'return to Coinbase as a full-time ML engineer',
            fullTimeline: 'june 2022 - may 2024',
            details: `
            served as a Machine Learning Engineer on the ML Platform team, helping develop virtually every facet of the ML platform, work including:
            * building and maintaining the ML Platform's core infrastructure
            * helping the transition from legacy in-house solutions to componentization of industry leading third-party vendors like Tecton, Anyscale Ray, Fiddler, and MLFlow
            * developing ML observability, monitoring, and explainability tooling
            * contributing to improvements of the model serving architecture
            * collaborating with ML modeling engineers from the risk and recommendation teams
            * ideating internship project to enable universal hyperparameter tuning
            * regularly completing demanding on-call shifts 
            `,
            organizations: [
            { name: 'coinbase', link: 'https://www.coinbase.com/' }, 
            ]
        },
        {
            year: '2024',
            description: 'join Valence as a full-time ML engineer',
            fullTimeline: 'july 2024 - present',
            details: `
            * leading multiple internal efforts
            * attended EthCC 2024 in Brussels with the team
            * more details to come :) 
            `,
            organizations: [
            { name: 'valence', link: 'https://www.linkedin.com/company/valence-research/' }, 
            ]
        },

    ];

    let activeEvents = new Set();

    function toggleEvent(event) {
    if (activeEvents.has(event)) {
        activeEvents.delete(event);
    } else {
        activeEvents.add(event);
    }
    activeEvents = activeEvents; // Trigger reactivity
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

    <!-- about -->
    <section id="about" class="min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-8">
        <div class="w-full max-w-3xl text-center">
          <h2 class="text-3xl font-bold mb-8">about me</h2>
          <img src="/pic.png" alt="owal" class="w-36 sm:w-40 md:w-48 lg:w-56 aspect-square object-cover object-center rounded-full mx-auto mb-2 border border-terminal-white">
          <p class="text-sm italic mb-6 mt-6">goofin' around in nyc</p>
          <p class="text-lg mb-4">
            i'm a machine learning engineer currently focused on blockchain technology. my passion lies in developing innovative solutions that bridge the gap between ml and decentralized systems.
          </p>
          <p class="text-lg">
            with experience in big tech, startup, and research environments, i strive to push the boundaries of what's possible in the realm of ai-powered blockchain applications.
          </p>
        </div>
      </section>
      
    <!-- timeline -->
    <section id="timeline" class="min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-8">
        <div class="w-full max-w-3xl">
          <h2 class="text-3xl font-bold mb-12 text-center">timeline</h2>
          <div class="relative">
            {#each timelineEvents as event, index}
              <div class="mb-8 relative">
                <div class="flex items-start cursor-pointer" on:click={() => toggleEvent(event)}>
                  <div class="w-24 text-right pr-4 font-bold" class:text-[#94cbf3]={activeEvents.has(event)}>{event.year}</div>
                  <div class="w-4 h-4 rounded-full bg-terminal-white relative mt-1">
                    {#if index !== timelineEvents.length - 1}
                      <div class="absolute left-1/2 top-full w-0.5 bg-terminal-white transform -translate-x-1/2" style="height: calc(100% + 2rem);"></div>
                    {/if}
                  </div>
                  <div class="ml-4 flex-grow" class:text-[#94cbf3]={activeEvents.has(event)}>
                    <div>{event.description}</div>
                  </div>
                </div>
                {#if activeEvents.has(event)}
                  <div class="mt-4 ml-32 w-full pr-4" transition:fade={{ duration: 300 }}>
                    <div class="italic text-sm">{event.fullTimeline}</div>
                      {#if event.organizations && event.organizations.length > 0}
                        <div class="mt-2 text-sm">
                          {@html event.organizations.map(org => `<a href="${org.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-300">${org.name}</a>`).join(', ')}
                        </div>
                      {/if}
                    <div class="mt-2 text-sm whitespace-pre-line">{@html event.details.replace(/\n/g, '<br>')}</div>
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
