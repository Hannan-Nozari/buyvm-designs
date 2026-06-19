/* ============================================================
   BuyVM — shared site JS: mobile nav + motion
   ============================================================ */
(function(){
  'use strict';

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var mnav = document.querySelector('.mobile-nav');
  if(toggle && mnav){
    toggle.addEventListener('click', function(){
      var open = mnav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mnav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ mnav.classList.remove('open'); });
    });
  }

  /* ---- Footer year ---- */
  document.querySelectorAll('[data-year]').forEach(function(el){
    el.textContent = '2010–2026';
  });

  /* ---- Sticky-nav scroll state + scroll progress bar ---- */
  var header = document.getElementById('siteHeader') || document.querySelector('.site-header');
  var progress = document.getElementById('scrollProgress');
  var ticking = false;
  function onScroll(){
    var y = window.scrollY || document.documentElement.scrollTop;
    if(header) header.classList.toggle('scrolled', y > 12);
    if(progress){
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
  }, {passive:true});
  onScroll();

  var prefersReduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(prefersReduced || !('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal,.reveal-stagger').forEach(function(el){el.classList.add('in');});
    document.querySelectorAll('[data-count]').forEach(function(el){
      el.textContent = (el.dataset.prefix||'') + el.dataset.count + (el.dataset.suffix||'');
    });
    return;
  }

  /* ---- Auto-tag standard blocks for reveal ---- */
  document.querySelectorAll('section.s, .trust, .final, .statband, .split').forEach(function(el){
    if(!el.classList.contains('reveal') && !el.classList.contains('reveal-stagger')) el.classList.add('reveal');
  });
  document.querySelectorAll('.plan-grid, .feat-grid, .testi-grid, .loc-grid, .cmp-wrap, .faq').forEach(function(el){
    if(!el.classList.contains('reveal-stagger')) el.classList.add('reveal-stagger');
  });

  /* ---- Reveal observer ---- */
  var revealIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); revealIO.unobserve(e.target); }
    });
  }, {threshold:.1, rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(function(el){ revealIO.observe(el); });

  /* ---- Count-up numbers ---- */
  function countUp(el){
    var target = parseFloat(el.dataset.count);
    var suffix = el.dataset.suffix || '';
    var prefix = el.dataset.prefix || '';
    var dur = parseInt(el.dataset.dur || '1300', 10);
    var dec = el.dataset.dec ? parseInt(el.dataset.dec,10) : 0;
    var start = performance.now();
    function frame(t){
      var p = Math.min(1, (t - start) / dur);
      var eased = 1 - Math.pow(1-p, 3);
      var v = target * eased;
      el.textContent = prefix + (dec===0 ? Math.round(v).toLocaleString() : v.toFixed(dec)) + suffix;
      if(p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var countIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ countUp(e.target); countIO.unobserve(e.target); } });
  }, {threshold:.5});
  document.querySelectorAll('[data-count]').forEach(function(el){
    el.textContent = (el.dataset.prefix||'') + '0' + (el.dataset.suffix||'');
    countIO.observe(el);
  });

  /* ---- Rack parallax tilt (fine pointers only) ---- */
  if(window.matchMedia && matchMedia('(pointer: fine)').matches){
    document.querySelectorAll('.rack-art').forEach(function(art){
      var rack = art.querySelector('.rack');
      var glow = art.querySelector('.bg-glow');
      if(!rack) return;
      var rafId = null;
      art.addEventListener('mousemove', function(e){
        var rect = art.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - .5;
        var y = (e.clientY - rect.top) / rect.height - .5;
        if(rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function(){
          rack.style.transform = 'perspective(1000px) rotateY(' + (x*5) + 'deg) rotateX(' + (-y*4) + 'deg)';
          if(glow) glow.style.transform = 'translate(' + (x*16) + 'px,' + (y*12) + 'px)';
        });
      });
      art.addEventListener('mouseleave', function(){
        rack.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)';
        rack.style.transform = '';
        if(glow){ glow.style.transition='transform .6s cubic-bezier(.22,1,.36,1)'; glow.style.transform=''; }
        setTimeout(function(){ rack.style.transition=''; if(glow) glow.style.transition=''; }, 600);
      });
    });
  }
})();
