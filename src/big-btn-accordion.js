
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
