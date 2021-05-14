export const redirectTo = (href) => {
  window.history.pushState({}, '', href);
  const navEvent = new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
};
