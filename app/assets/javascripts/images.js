$(document).ready(function(){
  var image_array  = {};
  $(document).on('click', '.add_images', function(event){
    var count = $(".image-field-row").length;
    var indexOflastImage = $('.image-field:last').attr('data-index');
    var indexOflastImage = (indexOflastImage == "" || indexOflastImage == undefined) ?  0 : parseInt(indexOflastImage);

    $(".image-field-row:last").after("<div class='clearboth'></div>"+
      "<div class='image-field-row'>"+
        "<input type='file' class='image-field pull-left' data-index= " + (indexOflastImage+1) + " name='image[image][" + (indexOflastImage+1) + "]'>"+
        "<a herf='javascript:void(0);' class='remove_image pull-left' style='margin-top: 12px;'>Remove this image</a>"+
      "</div>"
    );

    if(count == 3){
      $(this).addClass('hide');
    }
  });
  $(document).on('click', '.remove_image', function(event){
    $(this).parent().remove();
    var count = $(".image-field-row").length;
    if(count < 4){
      $('.add_images').removeClass('hide');
    }
  });
})();
