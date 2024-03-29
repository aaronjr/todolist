import { manager } from ".";
import { isWithinInterval, addDays, parseISO, startOfToday } from "date-fns";
import { clear, createEle, loop } from "./createElements";
import { addProjects } from "./dom";
import eye from "./eye.SVG";

export function inDiary(period) {
  let list = [];
  // loop through outstadning projects
  manager.checkOutstanding().forEach((project) => {
    // loop through tasks of each project
    project.checkOutstanding().forEach((task) => {
      // make a date from this expiry, today and last day needed
      const thisDate = parseISO(task.dueDate);
      const today = startOfToday();
      const lastDay = addDays(startOfToday(), period);

      // check if within range
      if (isWithinInterval(thisDate, { start: today, end: lastDay })) {
        // add objects to a list with project and task id
        list.push({
          project: project.id,
          task: task.id,
        });
      }
    });
  });
  getDiaryItems(list, period);
}

// takes list of objects
export function getDiaryItems(list, period) {
  clear(document.querySelector(".content"));
  // add to page
  if (period == 8) {
    document
      .querySelector(".content")
      .append(
        createEle("h1", "projectTitle diaryTitle", "Tasks due this week")
      );
  } else {
    document
      .querySelector(".content")
      .append(createEle("h1", "projectTitle diaryTitle", "Tasks due today"));
  }

  // through each item of the list and get details of relevant tasks.
  list.forEach((item) => {
    let task = manager.list[`${item.project}`].list[`${item.task}`];

    // create a "box" for each task
    let box = createEle("div", "box diaryBox", "", task.id);
    let list = createEle("div", `task-list diary-list`, "");

    // to add to list of each box
    let listitems = [
      ["div", `list-item task-title`, `${task.title}`],
      [
        "div",
        "list-item desc",
        task.description == "" ? "" : `${task.description}`,
        "",
      ],
      ["div", "list-item", `${manager.list[`${item.project}`].title}`, ""],
    ];

    // button to view main project
    const button = createEle("button", "viewProject", "");
    button.addEventListener("click", () => {
      addProjects(item.project);
    });

    const eyeSVG = createEle("img", "checkSVG", "");
    eyeSVG.src = eye;
    button.append(eyeSVG);

    // add list to box element
    box.append(list);

    // add to body and box div
    loop(listitems, list);
    list.append(button);

    document.querySelector(".content").append(box);
  });

  // check for nothing in diary
  if (list.length == 0) {
    let box = createEle("div", "empty", "");
    // set message
    let messageContent =
      period === 8 ? "Nothing due this week" : "Nothing due today";
    let message = createEle("h3", "noTasks", `${messageContent}`, "");
    // add to page
    box.append(message);
    document.querySelector(".content").append(box);
  }
}
