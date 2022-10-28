  tailwind.config = {
      theme: {
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
          'beech':'950px',
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1200px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1440px',
          // => @media (min-width: 1536px) { ... }
        },
        extend: {
          colors: {
            gold: '#b89535',
            light:'#f9f7f2',
            offWhite:'#f3efe5',
            black:'#13100d'
          }
        }
      }
    }
