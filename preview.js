(() => {
  const looks = {feed: '轻量信息流', paper: '纸感阅读', night: '深色卡片'};
  const toolbar = document.querySelector('.preview-bar');
  new ResizeObserver(() => document.documentElement.style.setProperty('--preview-height', toolbar.offsetHeight + 'px')).observe(toolbar);

  function applyLook(look, preservePosition = false) {
    if (!Object.hasOwn(looks, look)) look = 'feed';
    // Keep the same story under the toolbar when comparing layouts mid-read.
    const top = toolbar.getBoundingClientRect().bottom + 70;
    const anchor = preservePosition ? [...document.querySelectorAll('#feed article')]
      .find(article => article.getBoundingClientRect().bottom > top) : null;
    const oldTop = anchor?.getBoundingClientRect().top;
    document.documentElement.dataset.look = look;
    document.querySelector('#view-title').textContent = {
      feed:'今天，有什么值得知道？', paper:'业界手记', night:'今天，值得一看。'
    }[look];
    document.querySelectorAll('[data-look-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lookChoice === look));
    });
    document.title = `${looks[look]} · 外观预览`;
    document.querySelector('meta[name="theme-color"]').content =
      {feed:'#ffffff', paper:'#f7f2e8', night:'#101820'}[look];
    const url = new URL(location.href);
    url.searchParams.set('look', look);
    history.replaceState(null, '', url);
    if (anchor && window.scrollY > 200) window.scrollBy(0, anchor.getBoundingClientRect().top - oldTop);
  }
  toolbar.addEventListener('click', event => {
    const button = event.target.closest('[data-look-choice]');
    if (button) applyLook(button.dataset.lookChoice, true);
  });
  applyLook(new URL(location.href).searchParams.get('look'));
})();
