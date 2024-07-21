import { c as create_ssr_component, a as subscribe, v as validate_component, m as missing_component, e as escape, b as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
const css$2 = {
  code: ".active.svelte-dmgldc{font-weight:700\n}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n    import { page } from '$app/stores';\\n    import { onMount } from 'svelte';\\n    import { writable } from 'svelte/store';\\n  \\n    const icons = writable({});\\n  \\n    onMount(async () => {\\n      const { Github, Twitter, Linkedin } = await import('svelte-icons/fa');\\n      icons.set({ Github, Twitter, Linkedin });\\n    });\\n  <\/script>\\n  \\n  <header class=\\"bg-header text-header font-mono fixed top-0 left-0 right-0 z-10\\">\\n    <nav class=\\"container mx-auto px-4 py-6 flex justify-between items-center\\">\\n      <div class=\\"text-xl font-bold\\">\\n        <a href=\\"/\\" class=\\"hover:text-gray-300 transition-colors duration-200\\">owal.ml</a>\\n      </div>\\n      <div class=\\"flex items-center space-x-6\\">\\n        <ul class=\\"flex space-x-6\\">\\n          <li><a href=\\"#about\\" class=\\"hover:text-gray-300 transition-colors duration-200\\" class:active={$page.url.hash === '#about'}>about</a></li>\\n          <li><a href=\\"#timeline\\" class=\\"hover:text-gray-300 transition-colors duration-200\\" class:active={$page.url.hash === '#background'}>timeline</a></li>\\n          <li><a href=\\"#blog\\" class=\\"hover:text-gray-300 transition-colors duration-200\\" class:active={$page.url.hash === '#blog'}>blog</a></li>\\n          <li><a href=\\"#contact\\" class=\\"hover:text-gray-300 transition-colors duration-200\\" class:active={$page.url.hash === '#contact'}>contact</a></li>\\n        </ul>\\n        <div class=\\"flex space-x-4\\">\\n          {#if $icons.Github}\\n            <a href=\\"https://github.com/yourusername\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" class=\\"text-2xl hover:text-gray-300 transition-colors duration-200\\">\\n              <svelte:component this={$icons.Github} />\\n            </a>\\n          {/if}\\n          {#if $icons.Twitter}\\n            <a href=\\"https://twitter.com/yourusername\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" class=\\"text-2xl hover:text-gray-300 transition-colors duration-200\\">\\n              <svelte:component this={$icons.Twitter} />\\n            </a>\\n          {/if}\\n          {#if $icons.Linkedin}\\n            <a href=\\"https://linkedin.com/in/yourusername\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" class=\\"text-2xl hover:text-gray-300 transition-colors duration-200\\">\\n              <svelte:component this={$icons.Linkedin} />\\n            </a>\\n          {/if}\\n        </div>\\n      </div>\\n    </nav>\\n  </header>\\n  \\n  \\n  <style>\\n    .active {\\n    font-weight: 700\\n}\\n  </style>\\n  "],"names":[],"mappings":"AAgDI,qBAAQ,CACR,WAAW,CAAE,GAAG;AACpB"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $icons, $$unsubscribe_icons;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const icons = writable({});
  $$unsubscribe_icons = subscribe(icons, (value) => $icons = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  $$unsubscribe_icons();
  return `<header class="bg-header text-header font-mono fixed top-0 left-0 right-0 z-10"><nav class="container mx-auto px-4 py-6 flex justify-between items-center"><div class="text-xl font-bold" data-svelte-h="svelte-rjsmnj"><a href="/" class="hover:text-gray-300 transition-colors duration-200">owal.ml</a></div> <div class="flex items-center space-x-6"><ul class="flex space-x-6"><li><a href="#about" class="${[
    "hover:text-gray-300 transition-colors duration-200 svelte-dmgldc",
    $page.url.hash === "#about" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1tsvxni">about</a></li> <li><a href="#timeline" class="${[
    "hover:text-gray-300 transition-colors duration-200 svelte-dmgldc",
    $page.url.hash === "#background" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1fhj8f1">timeline</a></li> <li><a href="#blog" class="${[
    "hover:text-gray-300 transition-colors duration-200 svelte-dmgldc",
    $page.url.hash === "#blog" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1b54uj7">blog</a></li> <li><a href="#contact" class="${[
    "hover:text-gray-300 transition-colors duration-200 svelte-dmgldc",
    $page.url.hash === "#contact" ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-16cu7w1">contact</a></li></ul> <div class="flex space-x-4">${$icons.Github ? `<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-2xl hover:text-gray-300 transition-colors duration-200">${validate_component($icons.Github || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</a>` : ``} ${$icons.Twitter ? `<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-2xl hover:text-gray-300 transition-colors duration-200">${validate_component($icons.Twitter || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</a>` : ``} ${$icons.Linkedin ? `<a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-2xl hover:text-gray-300 transition-colors duration-200">${validate_component($icons.Linkedin || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</a>` : ``}</div></div></nav> </header>`;
});
const css$1 = {
  code: ".cursor.svelte-1li5vno{animation:svelte-1li5vno-blink 2s infinite}@keyframes svelte-1li5vno-blink{0%,100%{color:var(--bg-color)}50%{color:#94cbf3}}",
  map: `{"version":3,"file":"TerminalText.svelte","sources":["TerminalText.svelte"],"sourcesContent":["<script>\\n    export let text = '';\\n    export let speed = 200;\\n    export let showCursor = true;\\n    export let backgroundColor = '#000000';\\n  \\n    let displayedText = '';\\n    let cursorVisible = true;\\n  \\n    function typeText() {\\n      let i = 0;\\n      const interval = setInterval(() => {\\n        if (i < text.length) {\\n          displayedText += text[i];\\n          i++;\\n        } else {\\n          clearInterval(interval);\\n        }\\n      }, speed);\\n    }\\n  \\n    function blinkCursor() {\\n      setInterval(() => {\\n        cursorVisible = !cursorVisible;\\n      }, 500);\\n    }\\n  \\n    typeText();\\n    blinkCursor();\\n  <\/script>\\n  \\n  <span>{displayedText}</span>\\n  {#if showCursor}\\n    <span class=\\"cursor\\" style=\\"--bg-color: {backgroundColor};\\">|</span>\\n  {/if}\\n  \\n  <style>\\n    .cursor {\\n      animation: blink 2s infinite;\\n    }\\n  \\n    @keyframes blink {\\n      0%, 100% { color: var(--bg-color); }\\n      50% { color: #94cbf3; }\\n    }\\n  </style>\\n  "],"names":[],"mappings":"AAqCI,sBAAQ,CACN,SAAS,CAAE,oBAAK,CAAC,EAAE,CAAC,QACtB,CAEA,WAAW,oBAAM,CACf,EAAE,CAAE,IAAK,CAAE,KAAK,CAAE,IAAI,UAAU,CAAG,CACnC,GAAI,CAAE,KAAK,CAAE,OAAS,CACxB"}`
};
const TerminalText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { speed = 200 } = $$props;
  let { showCursor = true } = $$props;
  let { backgroundColor = "#000000" } = $$props;
  let displayedText = "";
  function typeText() {
    let i = 0;
    const interval = setInterval(
      () => {
        if (i < text.length) {
          displayedText += text[i];
          i++;
        } else {
          clearInterval(interval);
        }
      },
      speed
    );
  }
  function blinkCursor() {
    setInterval(
      () => {
      },
      500
    );
  }
  typeText();
  blinkCursor();
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0) $$bindings.speed(speed);
  if ($$props.showCursor === void 0 && $$bindings.showCursor && showCursor !== void 0) $$bindings.showCursor(showCursor);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0) $$bindings.backgroundColor(backgroundColor);
  $$result.css.add(css$1);
  return `<span>${escape(displayedText)}</span> ${showCursor ? `<span class="cursor svelte-1li5vno" style="${"--bg-color: " + escape(backgroundColor, true) + ";"}">|</span>` : ``}`;
});
const css = {
  code: "main.svelte-ic0f1z{scroll-behavior:smooth}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { onMount } from 'svelte';\\n    import Header from '../components/Header.svelte';\\n    import TerminalText from '../components/TerminalText.svelte';\\n    import { fade } from 'svelte/transition';\\n\\n    let currentSection = 'home';\\n    let showSubheader = false;\\n  \\n    onMount(() => {\\n      const observer = new IntersectionObserver((entries) => {\\n        entries.forEach(entry => {\\n          if (entry.isIntersecting) {\\n            currentSection = entry.target.id;\\n          }\\n        });\\n      }, { threshold: 0.5 });\\n  \\n      document.querySelectorAll('section').forEach(section => {\\n        observer.observe(section);\\n      });\\n\\n      setTimeout(() => {\\n        showSubheader = true;\\n      }, 3000);\\n    });\\n    \\n    let timelineEvents = [\\n        {\\n            year: '2017',\\n            description: 'began my journey in computer science at Lehigh University',\\n            fullTimeline: 'august 2017 - may 2022',\\n            details: \`fell in love with programming, went on to:\\n            \\\\t* establish the Lehigh Coders\\\\' Community (now the Lehigh ACM chapter)\\n            \\\\t* become first ever Technical Development Chair of the CSB Association\\n            \\\\t* become one of the early members of Lehigh Blockchain\\n            \\\\t* join & conduct research with the Scalable Systems Software Research Group (SSS-RP)\\n            \\\\t* work as a Junior Systems Administrator\\n            \\\\t* TA five courses, head TA of CSE 262 Programming Languages\`,\\n            organizations: [\\n            { name: 'cse @ Lehigh', link: 'https://engineering.lehigh.edu/cse' }, \\n            { name: 'Lehigh ACM', link: 'https://acm.cse.lehigh.edu/' },\\n            { name: 'Lehigh Blockchain', link: 'https://wordpress.lehigh.edu/blockchain/' },\\n            { name: 'SSS-RP', link: 'https://wordpress.lehigh.edu/sss/' },\\n            { name: 'CSB Association', link: 'https://csb.lehigh.edu/csba' }\\n            ]\\n        },\\n        {\\n            year: '2020',\\n            description: 'software engineering internships',\\n            fullTimeline: 'february 2020 - november 2020',\\n            details: \`software engineer @ Dolomite\\n            * worked on the frontend of the Dolomite web app, interfacing with the web3j driven backend to create the Order Fills Page, along with developing other features.\\n            \\\\n\\n            software engineering internship @ Sony Research & Development\\n            * interned with the Sony Research & Development team, developing a full-stack web app to enable students to tour colleges during the COVID-19 pandemic.\\n            \`,\\n            organizations: [\\n            { name: 'dolomite.io', link: 'https://dolomite.io/' }, \\n            { name: 'sony r&d', link: 'https://www.sony.com/en/SonyInfo/research/' },\\n            ]\\n        },\\n        {\\n            year: '2021',\\n            description: 'graduate from Lehigh with dual B.S. in Computer Science & Business',\\n            fullTimeline: 'august 2017 - may 2021',\\n            details: \`coursework:\\n            * Intro to Programming (Teaching Assistant) \\n            * Programming & Data Structures (Teaching Assistant) \\n            * Systems Software (Teaching Assistant) \\n            * Database Systems & Applications \\n            * Discrete Structures & Algorithms \\n            * Design & Analysis of Algorithms \\n            * Software Engineering (Teaching Assistant) \\n            * Programming Languages (Head Teaching Assistant) \\n            * Computer Architecture & Organization \\n            * Blockchain Concepts & Applications \\n            * Blockchain Algorithms\\n            \`,\\n            organizations: [\\n            { name: 'csb.lehigh.edu', link: 'https://csb.lehigh.edu/' }, \\n            ]\\n        },\\n        {\\n            year: '2021',\\n            description: 'ML intern @ Coinbase',\\n            fullTimeline: 'june 2021 - august 2021',\\n            details: \`\\n            * one of the early interns on the ML team at Coinbase, competed an end-to-end project to enable observability throughout the ML lifecycle, comprised of components throughout entire platform.\\n            \`,\\n            organizations: [\\n            { name: 'ml @ coinbase', link: 'https://www.coinbase.com/blog/building-state-of-the-art-machine-learning-technology-with-efficient/' }, \\n            ]\\n        },\\n        {\\n            year: '2022',\\n            description: 'graduate from Lehigh with M.S. in Computer Science & Engineering',\\n            fullTimeline: 'august 2021 - may 2022',\\n            details: \`coursework:\\n            * Machine Learning \\n            * Computer Vision\\n            * Natural Language Processing\\n            * Principles and Practices of Parallel Computing\\n            * Advanced Programming Techniques\\n            * Advanced Programming Languages\\n            * Network Security\\n            * Independent Study of Decentralized Blockchain Voting Systems\\n            \`,\\n            organizations: [\\n            { name: 'cse.lehigh.edu', link: 'https://engineering.lehigh.edu/academics/graduate/research-based/computer-science-ms-meng' }, \\n            ]\\n        },\\n        {\\n            year: '2022',\\n            description: 'return to Coinbase as a full-time ML engineer',\\n            fullTimeline: 'june 2022 - may 2024',\\n            details: \`\\n            served as a Machine Learning Engineer on the ML Platform team, helping develop virtually every facet of the ML platform, work including:\\n            * building and maintaining the ML Platform's core infrastructure\\n            * helping the transition from legacy in-house solutions to componentization of industry leading third-party vendors like Tecton, Anyscale Ray, Fiddler, and MLFlow\\n            * developing ML observability, monitoring, and explainability tooling\\n            * contributing to improvements of the model serving architecture\\n            * collaborating with ML modeling engineers from the risk and recommendation teams\\n            * ideating internship project to enable universal hyperparameter tuning\\n            * regularly completing demanding on-call shifts \\n            \`,\\n            organizations: [\\n            { name: 'coinbase', link: 'https://www.coinbase.com/' }, \\n            ]\\n        },\\n        {\\n            year: '2024',\\n            description: 'join Valence as a full-time ML engineer',\\n            fullTimeline: 'july 2024 - present',\\n            details: \`\\n            * leading multiple internal efforts\\n            * attended EthCC 2024 in Brussels with the team\\n            * more details to come :) \\n            \`,\\n            organizations: [\\n            { name: 'valence', link: 'https://www.linkedin.com/company/valence-research/' }, \\n            ]\\n        },\\n\\n    ];\\n\\n    let activeEvents = new Set();\\n\\n    function toggleEvent(event) {\\n    if (activeEvents.has(event)) {\\n        activeEvents.delete(event);\\n    } else {\\n        activeEvents.add(event);\\n    }\\n    activeEvents = activeEvents; // Trigger reactivity\\n    }\\n  <\/script>\\n  \\n  <Header {currentSection} />\\n  \\n  <main class=\\"bg-terminal-black text-terminal-white font-mono min-h-screen\\">\\n    <section id=\\"home\\" class=\\"min-h-screen flex items-center justify-center\\">\\n        <div class=\\"w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex justify-center items-center\\">\\n          <div class=\\"w-full sm:w-5/6 md:w-4/5 lg:w-3/4 min-h-[20vh] text-center\\">\\n            <h1 class=\\"text-3xl sm:text-4xl md:text-5xl font-bold mb-4\\">\\n                <TerminalText text=\\"v. oliver walsh\\" speed={100} showCursor={true} cursorColor=\\"transparent\\" />\\n            </h1>\\n            <div class=\\"space-y-4\\">\\n                {#if showSubheader}\\n                <p class=\\"text-lg sm:text-xl md:text-2xl\\">\\n                    <TerminalText text=\\"machine learning engineering\\" speed={50} showCursor={false} />\\n                </p>\\n                {/if}\\n            </div>\\n            <div class=\\"space-y-4\\">\\n                {#if showSubheader}\\n                <p class=\\"text-lg sm:text-xl md:text-2xl\\">\\n                    <TerminalText text=\\"blockchain engineering\\" speed={50} showCursor={false} />\\n                </p>\\n                {/if}\\n            </div>\\n            <div class=\\"space-y-4\\">\\n                {#if showSubheader}\\n                <p class=\\"text-lg sm:text-xl md:text-2xl\\">\\n                    <TerminalText text=\\"distributed systems\\" speed={50} showCursor={false} />\\n                </p>\\n                {/if}\\n            </div>\\n          </div>\\n        </div>\\n      </section>\\n\\n    <!-- about -->\\n    <section id=\\"about\\" class=\\"min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-8\\">\\n        <div class=\\"w-full max-w-3xl text-center\\">\\n          <h2 class=\\"text-3xl font-bold mb-8\\">about me</h2>\\n          <img src=\\"pic.jpg\\" alt=\\"owal\\" class=\\"w-32 h-32 rounded-full mx-auto mb-2 border-2 border-terminal-white\\">\\n          <p class=\\"text-sm italic mb-6\\">goofin' around in nyc</p>\\n          <p class=\\"text-lg mb-4\\">\\n            i'm a machine learning engineer currently focused on blockchain technology. my passion lies in developing innovative solutions that bridge the gap between ml and decentralized systems.\\n          </p>\\n          <p class=\\"text-lg\\">\\n            with experience in big tech, startup, and research environments, i strive to push the boundaries of what's possible in the realm of ai-powered blockchain applications.\\n          </p>\\n        </div>\\n      </section>\\n      \\n    <!-- timeline -->\\n    <section id=\\"timeline\\" class=\\"min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-8\\">\\n        <div class=\\"w-full max-w-3xl\\">\\n          <h2 class=\\"text-3xl font-bold mb-12 text-center\\">timeline</h2>\\n          <div class=\\"relative\\">\\n            {#each timelineEvents as event, index}\\n              <div class=\\"mb-8 relative\\">\\n                <div class=\\"flex items-start cursor-pointer\\" on:click={() => toggleEvent(event)}>\\n                  <div class=\\"w-24 text-right pr-4 font-bold\\" class:text-[#94cbf3]={activeEvents.has(event)}>{event.year}</div>\\n                  <div class=\\"w-4 h-4 rounded-full bg-terminal-white relative mt-1\\">\\n                    {#if index !== timelineEvents.length - 1}\\n                      <div class=\\"absolute left-1/2 top-full w-0.5 bg-terminal-white transform -translate-x-1/2\\" style=\\"height: calc(100% + 2rem);\\"></div>\\n                    {/if}\\n                  </div>\\n                  <div class=\\"ml-4 flex-grow\\" class:text-[#94cbf3]={activeEvents.has(event)}>\\n                    <div>{event.description}</div>\\n                  </div>\\n                </div>\\n                {#if activeEvents.has(event)}\\n                  <div class=\\"mt-4 ml-32 w-full pr-4\\" transition:fade={{ duration: 300 }}>\\n                    <div class=\\"italic text-sm\\">{event.fullTimeline}</div>\\n                      {#if event.organizations && event.organizations.length > 0}\\n                        <div class=\\"mt-2 text-sm\\">\\n                          {@html event.organizations.map(org => \`<a href=\\"\${org.link}\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" class=\\"underline hover:text-gray-300\\">\${org.name}</a>\`).join(', ')}\\n                        </div>\\n                      {/if}\\n                    <div class=\\"mt-2 text-sm whitespace-pre-line\\">{@html event.details.replace(/\\\\n/g, '<br>')}</div>\\n                  </div>\\n                {/if}\\n              </div>\\n            {/each}\\n          </div>\\n        </div>\\n      </section>\\n      \\n      \\n      \\n      \\n      \\n      \\n      \\n      \\n  </main>\\n  \\n  <style>\\n    main {\\n      scroll-behavior: smooth;\\n    }\\n  </style>\\n"],"names":[],"mappings":"AA4PI,kBAAK,CACH,eAAe,CAAE,MACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentSection = "home";
  let timelineEvents = [
    {
      year: "2017",
      description: "began my journey in computer science at Lehigh University",
      fullTimeline: "august 2017 - may 2022",
      details: `fell in love with programming, went on to:
            	* establish the Lehigh Coders' Community (now the Lehigh ACM chapter)
            	* become first ever Technical Development Chair of the CSB Association
            	* become one of the early members of Lehigh Blockchain
            	* join & conduct research with the Scalable Systems Software Research Group (SSS-RP)
            	* work as a Junior Systems Administrator
            	* TA five courses, head TA of CSE 262 Programming Languages`,
      organizations: [
        {
          name: "cse @ Lehigh",
          link: "https://engineering.lehigh.edu/cse"
        },
        {
          name: "Lehigh ACM",
          link: "https://acm.cse.lehigh.edu/"
        },
        {
          name: "Lehigh Blockchain",
          link: "https://wordpress.lehigh.edu/blockchain/"
        },
        {
          name: "SSS-RP",
          link: "https://wordpress.lehigh.edu/sss/"
        },
        {
          name: "CSB Association",
          link: "https://csb.lehigh.edu/csba"
        }
      ]
    },
    {
      year: "2020",
      description: "software engineering internships",
      fullTimeline: "february 2020 - november 2020",
      details: `software engineer @ Dolomite
            * worked on the frontend of the Dolomite web app, interfacing with the web3j driven backend to create the Order Fills Page, along with developing other features.
            

            software engineering internship @ Sony Research & Development
            * interned with the Sony Research & Development team, developing a full-stack web app to enable students to tour colleges during the COVID-19 pandemic.
            `,
      organizations: [
        {
          name: "dolomite.io",
          link: "https://dolomite.io/"
        },
        {
          name: "sony r&d",
          link: "https://www.sony.com/en/SonyInfo/research/"
        }
      ]
    },
    {
      year: "2021",
      description: "graduate from Lehigh with dual B.S. in Computer Science & Business",
      fullTimeline: "august 2017 - may 2021",
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
        {
          name: "csb.lehigh.edu",
          link: "https://csb.lehigh.edu/"
        }
      ]
    },
    {
      year: "2021",
      description: "ML intern @ Coinbase",
      fullTimeline: "june 2021 - august 2021",
      details: `
            * one of the early interns on the ML team at Coinbase, competed an end-to-end project to enable observability throughout the ML lifecycle, comprised of components throughout entire platform.
            `,
      organizations: [
        {
          name: "ml @ coinbase",
          link: "https://www.coinbase.com/blog/building-state-of-the-art-machine-learning-technology-with-efficient/"
        }
      ]
    },
    {
      year: "2022",
      description: "graduate from Lehigh with M.S. in Computer Science & Engineering",
      fullTimeline: "august 2021 - may 2022",
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
        {
          name: "cse.lehigh.edu",
          link: "https://engineering.lehigh.edu/academics/graduate/research-based/computer-science-ms-meng"
        }
      ]
    },
    {
      year: "2022",
      description: "return to Coinbase as a full-time ML engineer",
      fullTimeline: "june 2022 - may 2024",
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
        {
          name: "coinbase",
          link: "https://www.coinbase.com/"
        }
      ]
    },
    {
      year: "2024",
      description: "join Valence as a full-time ML engineer",
      fullTimeline: "july 2024 - present",
      details: `
            * leading multiple internal efforts
            * attended EthCC 2024 in Brussels with the team
            * more details to come :) 
            `,
      organizations: [
        {
          name: "valence",
          link: "https://www.linkedin.com/company/valence-research/"
        }
      ]
    }
  ];
  let activeEvents = /* @__PURE__ */ new Set();
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { currentSection }, {}, {})} <main class="bg-terminal-black text-terminal-white font-mono min-h-screen svelte-ic0f1z"><section id="home" class="min-h-screen flex items-center justify-center"><div class="w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex justify-center items-center"><div class="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 min-h-[20vh] text-center"><h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">${validate_component(TerminalText, "TerminalText").$$render(
    $$result,
    {
      text: "v. oliver walsh",
      speed: 100,
      showCursor: true,
      cursorColor: "transparent"
    },
    {},
    {}
  )}</h1> <div class="space-y-4">${``}</div> <div class="space-y-4">${``}</div> <div class="space-y-4">${``}</div></div></div></section>  <section id="about" class="min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-8" data-svelte-h="svelte-152l338"><div class="w-full max-w-3xl text-center"><h2 class="text-3xl font-bold mb-8">about me</h2> <img src="pic.jpg" alt="owal" class="w-32 h-32 rounded-full mx-auto mb-2 border-2 border-terminal-white"> <p class="text-sm italic mb-6">goofin&#39; around in nyc</p> <p class="text-lg mb-4">i&#39;m a machine learning engineer currently focused on blockchain technology. my passion lies in developing innovative solutions that bridge the gap between ml and decentralized systems.</p> <p class="text-lg">with experience in big tech, startup, and research environments, i strive to push the boundaries of what&#39;s possible in the realm of ai-powered blockchain applications.</p></div></section>  <section id="timeline" class="min-h-screen flex items-center justify-center bg-terminal-black text-terminal-white p-8"><div class="w-full max-w-3xl"><h2 class="text-3xl font-bold mb-12 text-center" data-svelte-h="svelte-yia5yy">timeline</h2> <div class="relative">${each(timelineEvents, (event, index) => {
    return `<div class="mb-8 relative"><div class="flex items-start cursor-pointer"><div class="${[
      "w-24 text-right pr-4 font-bold",
      activeEvents.has(event) ? "text-[#94cbf3]" : ""
    ].join(" ").trim()}">${escape(event.year)}</div> <div class="w-4 h-4 rounded-full bg-terminal-white relative mt-1">${index !== timelineEvents.length - 1 ? `<div class="absolute left-1/2 top-full w-0.5 bg-terminal-white transform -translate-x-1/2" style="height: calc(100% + 2rem);"></div>` : ``}</div> <div class="${["ml-4 flex-grow", activeEvents.has(event) ? "text-[#94cbf3]" : ""].join(" ").trim()}"><div>${escape(event.description)}</div> </div></div> ${activeEvents.has(event) ? `<div class="mt-4 ml-32 w-full pr-4"><div class="italic text-sm">${escape(event.fullTimeline)}</div> ${event.organizations && event.organizations.length > 0 ? `<div class="mt-2 text-sm"><!-- HTML_TAG_START -->${event.organizations.map((org) => `<a href="${org.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-300">${org.name}</a>`).join(", ")}<!-- HTML_TAG_END --> </div>` : ``} <div class="mt-2 text-sm whitespace-pre-line"><!-- HTML_TAG_START -->${event.details.replace(/\n/g, "<br>")}<!-- HTML_TAG_END --></div> </div>` : ``} </div>`;
  })}</div></div></section> </main>`;
});
export {
  Page as default
};
