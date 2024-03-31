$(document).ready(function () {
  $("#newImage").click(function () {
    $("form").slideDown();
  });

  $("#cancel").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (event) {
    event.preventDefault();

    const urlImage = $("#url").val();
    const newItem = $(`<li style= "display: none"> </li>`);

    $(` <img src="${urlImage}">
      <div class="overlay-imagem-link">
        <a href="${urlImage}" target="_blank" title="Image">
          Ver imagem em tamanho real
        </a>
      </div>`).appendTo(newItem);

    $(newItem).appendTo("ul");
    $(newItem).fadeIn(3000);
    $("#url").val('');
  });
});
