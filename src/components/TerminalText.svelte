<script>
    export let text = '';
    export let speed = 200;
    export let showCursor = true;
    export let backgroundColor = '#000000';
  
    let displayedText = '';
    let cursorVisible = true;
  
    function typeText() {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          displayedText += text[i];
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }
  
    function blinkCursor() {
      setInterval(() => {
        cursorVisible = !cursorVisible;
      }, 500);
    }
  
    typeText();
    blinkCursor();
  </script>
  
  <span>{displayedText}</span>
  {#if showCursor}
    <span class="cursor" style="--bg-color: {backgroundColor};">|</span>
  {/if}
  
  <style>
    .cursor {
      animation: blink 2s infinite;
    }
  
    @keyframes blink {
      0%, 100% { color: var(--bg-color); }
      50% { color: #94cbf3; }
    }
  </style>
  