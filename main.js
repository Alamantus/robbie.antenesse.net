$(document).ready(function() {
  $('.navbar-burger').click(function() {
    var menuId = $(this).attr('data-target');
    $('#' + menuId).toggleClass('is-active');
  });

  $('.portfolio-link').each(function() {
    $(this).click(function() {
      var modalId = $(this).attr('data-modal');
      $('#' + modalId).addClass('is-active');
    });
  });

  $('.modal-background, .modal-close').each(function() {
    $(this).click(function() {
      $(this).parent().removeClass('is-active');
    });
  });
});