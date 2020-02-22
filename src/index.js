import "bootstrap";
import $ from "jquery";

const defaultScrollSpeed = 1000;

//Scrolling
const scrollTo = (elementId, speed, offset) => {
  $("html, body").animate(
    {
      scrollTop: $(elementId).offset().top - offset
    },
    speed
  );
};

$(() => {
  //Update Loan Text Input
  $("#loanRange").on("input", () => {
    const newValue = $("#loanRange").val();
    $("#loanInput").val(newValue);
  });

  //Update Loan Range Slider
  $("#loanInput").on("input", () => {
    const newValue = $("#loanInput").val();
    $("#loanRange").val(newValue);
  });

  //Custom Checkbox
  $(".checkBox").click(element => {
    const { checked } = element.target;
    if (checked) {
      $(element.target).addClass("checkMark");
    } else {
      $(element.target).removeClass("checkMark");
    }
  });

  $("#jakPostupovat").click(() => {
    scrollTo("#request", defaultScrollSpeed, 0);
  });
  $("#jakPozadatOPujcku").click(() => {
    scrollTo("#request", defaultScrollSpeed, 0);
  });

  $("#chciSiPujcit").click(() => {
    scrollTo("#form", defaultScrollSpeed, 0);
  });
  $("#chciSiPujcitNavbar").click(() => {
    scrollTo("#form", defaultScrollSpeed, 40);
  });
  $("#chciSePridat").click(() => {
    scrollTo("#form", defaultScrollSpeed, 40);
  });
  $("#chciSiPujcitReference").click(() => {
    scrollTo("#form", defaultScrollSpeed, 40);
  });
  $("#onlineFormular").click(() => {
    scrollTo("#form", defaultScrollSpeed, 40);
  });

  $("#referenceNavbar").click(() => {
    scrollTo("#testimontial", defaultScrollSpeed, 0);
  });

  $("#vyhodyNavbar").click(() => {
    scrollTo("#features", defaultScrollSpeed, -20);
  });
  $("#vyhody").click(() => {
    scrollTo("#features", defaultScrollSpeed, -20);
  });
});
