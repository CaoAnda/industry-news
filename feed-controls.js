/* Shared reading controls for the approved layout and its previews. */
(() => {
  const controls = document.querySelector('.controls');
  const filter = document.createElement('button');
  filter.className = 'preview-filter';
  filter.textContent = '筛选与搜索';
  filter.setAttribute('aria-expanded', 'false');
  filter.onclick = () => {
    const open = controls.classList.toggle('filters-open');
    filter.setAttribute('aria-expanded', String(open));
    filter.textContent = open ? '收起筛选' : '筛选与搜索';
  };
  document.querySelector('.stream-tabs').append(filter);
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !document.querySelector('.search-box').hidden) {
      controls.classList.add('filters-open');
      filter.setAttribute('aria-expanded', 'true');
      filter.textContent = '收起筛选';
    }
  });

})();
