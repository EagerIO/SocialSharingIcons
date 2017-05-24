window.INSTALL_SCOPE.services['lastfm'] = {
  icon: color => `
  <svg data-icon="lastfm" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><circle fill="${color === 'auto' ? '#36465d' : color}" cx="50" cy="50" r="48"></circle>
    <path fill="#fff" transform="translate(25,25) scale(0.5)" d="M80.037 79.456c-10.417-0.041-15.967-5.135-19.823-14.112l-1.103-2.449-9.509-21.68c-3.154-7.674-10.979-12.859-19.808-12.859-11.947 0-21.639 9.693-21.639 21.648 0 11.955 9.692 21.647 21.639 21.647 8.334 0 15.58-4.712 19.197-11.621l3.845 8.87c-5.46 6.657-13.757 10.897-23.042 10.897-16.456 0-29.794-13.33-29.794-29.794 0-16.455 13.338-29.802 29.793-29.802 12.419 0 22.445 6.633 27.539 18.384 0.386 0.912 5.387 12.606 9.749 22.559 2.702 6.16 5.006 10.246 12.476 10.498 7.341 0.252 12.379-4.216 12.379-9.864 0-5.518-3.841-6.844-10.327-9-11.658-3.841-17.676-7.699-17.676-16.944 0-9.017 6.136-15.031 16.105-15.031 6.494 0 11.182 2.889 14.43 8.651l-6.373 3.255c-2.401-3.361-5.050-4.688-8.415-4.688-4.679 0-8.020 3.255-8.020 7.585 0 6.145 5.497 7.072 13.184 9.595 10.347 3.369 15.157 7.219 15.157 16.83 0 10.091-8.659 17.44-19.963 17.424z" />
  </svg>`,
  url: username => `https://www.last.fm/user/${username}`
}
