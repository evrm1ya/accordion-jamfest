
/**
 *
 * Accordion plugin
 *
 */

(function($) {
  $.fn.accordionizr = function(speed, config) {
    this.on('click', config.accordionControl, function(event) {
      event.preventDefault();
      $(this)
        .next(config.accordionPanel)
        .not(':animated')
        .slideToggle(speed)
    });
    return this;
  }
})(jQuery);
