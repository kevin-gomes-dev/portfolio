// Place <script src="../js/automate.js"></script> at END of body to access everything

/**
 * Create and return a link node.
 * @param {string} link The base file name of the HTML page
 * @param {string} custom_text The text to be able to click
 */
function create_link(link, custom_text) {
  const elem = document.createElement("a");
  elem.href = `../html/${link}`;
  elem.text = custom_text;
  return elem;
}

// Function that calls immediately via IIFE so when loading page it happens
// (Immediately Invoked Function Expression)
(function main() {
  // Some useful vars
  const pages = [
    ["index.html", "Home"],
    ["portfolio.html", "Portfolio"],
    ["about.html", "About"],
    ["contact.html", "Contact"],
  ];
  const current_page = window.location.pathname.split("/").pop();

  // The div to put the menu in
  const menu_div = document.createElement("div");
  menu_div.className = "flex-enabled top-bar";
  // Add the main css
  const link_elem = document.createElement("link");
  link_elem.setAttribute("rel", "stylesheet");
  link_elem.setAttribute("href", "../css/main.css");
  document.head.append(link_elem);

  // Make main nav and put as 2nd element on page after the heading
  const main_nav = document.createElement("nav");
  main_nav.className = "main-nav flex-enabled";
  const title_h1 = document.createElement("h1");
  title_h1.id = "page-title";
  menu_div.prepend(main_nav);
  menu_div.insertAdjacentElement("afterbegin", title_h1);

  // Create 3 elements, one for each link. Determine links via current page. Also use
  // this loop when doing something depending on what page you're on or are not on
  for (let i = 0; i < 4; i++) {
    let page = pages[i][0];
    if (page !== current_page) {
      main_nav.append(create_link(pages[i][0], pages[i][1]));
    } else {
      title_h1.textContent = pages[i][1];
    }
  }
  document.body.prepend(menu_div);
})();
