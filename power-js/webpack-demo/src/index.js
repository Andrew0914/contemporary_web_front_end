import { join } from "lodash";
import "../app.scss";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(["Hello", "webpack"], " ");
  element.classList.add("title_hello");

  return element;
}

document.body.appendChild(component());
