import { manager } from ".";
import { createEle, loop } from "./createElements";
import { addProjects, loadSidebar } from "./dom";

const body = document.querySelector("body");

const mainStructure = [
  ["nav", "nav", ""],
  ["div", "side", ""],
  ["div", "content", ""],
];

export function layout() {
  // loop through list and add to body
  loop(mainStructure, body);

  // sidebar, add another class
  document.querySelector(".side").classList += " showSide";
  // add title to page
  document
    .querySelector(".nav")
    .append(createEle("h1", "title", "Project manager"));

  // hamburger menu
  document.querySelector(".nav").append(createEle("div", "menu", ""));
  // pieces of hamburger menu x3
  document.querySelector(".menu").append(createEle("div", "piece", ""));
  document.querySelector(".menu").append(createEle("div", "piece", ""));
  document.querySelector(".menu").append(createEle("div", "piece", ""));

  // variable to set if user wants to show sidebar on smaller screen
  let show = false;

  document.querySelector(".menu").addEventListener("click", () => {
    // set show
    show = show == false ? true : false;

    // change based on show's status
    show == true
      ? (document.querySelector(".side").style.display = "flex")
      : (document.querySelector(".side").style.display = "none");
  });

  // listen for window resize
  window.addEventListener("resize", () => {
    // if smaller than 999px show based on show variable
    if (window.innerWidth < "999") {
      show == true
        ? (document.querySelector(".side").style.display = "flex")
        : (document.querySelector(".side").style.display = "none");
    } else {
      // else always block
      document.querySelector(".side").style.display = "flex";
    }
  });

  // load sidebar pass all available objects
  if (manager.checkOutstanding().length > 0) {
    addProjects(manager.checkOutstanding()[0].id);
  }

  // populate sidebar
  loadSidebar();
}
