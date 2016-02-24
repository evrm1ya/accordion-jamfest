
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

/**
 *
 * Big Button Accordion
 *
 */

$(function() {

  var accordion = $('.big-btn-accord');

  var accordionConfig = {
    accordionControl: '.accordion-control',
    accordionPanel: '.accordion-panel'
  };

  accordion.accordionizr(500, accordionConfig);

});

$(function() {
  var skinnyBtnAccord = $('.skinny-btn-accord');
  var options = {
    accordionControl: '.accordion-control',
    accordionPanel: '.accordion-panel'
  };
  skinnyBtnAccord.accordionizr(500, options);
});
