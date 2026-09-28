document.querySelectorAll('.demo-card[data-slides]').forEach(function(card){
    var slides = JSON.parse(card.getAttribute('data-slides'));
    var idx = 0;
    var thumb = card.querySelector('.demo-thumb');
    var dots = card.querySelectorAll('.demo-dots span');
    function render(){
      var parts = slides[idx].split('|');
      thumb.style.opacity = 0;
      setTimeout(function(){
        thumb.textContent = parts[0];
        thumb.style.background = parts[1];
        thumb.style.opacity = 1;
      }, 120);
      dots.forEach(function(d,i){ d.classList.toggle('active', i===idx); });
    }
    var prev = card.querySelector('.demo-arrow.prev');
    var next = card.querySelector('.demo-arrow.next');
    if(prev) prev.addEventListener('click', function(){ idx = (idx - 1 + slides.length) % slides.length; render(); });
    if(next) next.addEventListener('click', function(){ idx = (idx + 1) % slides.length; render(); });
  });
