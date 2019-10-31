(function () {
  const navScroll = document.getElementById('navication-scroll');
  const header = document.querySelector('nav header');
  const active = document.querySelector('.slds-is-active a');

  if (active) navScroll.scrollTop = active.offsetTop - header.offsetHeight - Math.ceil(active.offsetHeight / 2);
}());