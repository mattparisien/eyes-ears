const APP_NAME     = 'Boilerplate';
const DATA_API_KEY = '.data-api';

const $document    = $(document);
const $window      = $(window);
const $html        = $(document.documentElement).removeClass('has-no-js').addClass('has-js');
const $body        = $(document.body);
const $barba       = $('#js-barba-wrapper');

const isDebug      = !!$html.data('debug');

export { APP_NAME, DATA_API_KEY, $document, $window, $html, $body, isDebug };
