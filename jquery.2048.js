(function($)
{
  $.fn.test2048=function()
  {
      return this.each(function()
    {
        start();
        move();
        add();
        // score();
    });
  };
})(jQuery);
