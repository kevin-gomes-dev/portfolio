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

// WIP
/**
 * Returns a "card" container with content filled in so we can just call this many times
 * @param {string} title The title of the project
 * @param {string} img The relative path, including image filename
 * @param {string} description Description of the project
 * @param {string} link The URL of the project
 * @param {string} link_text The text that is clickable
 */
function create_card(title, img, description, link, link_text) {
  // Create container (article?), give it class name for card styling, and
  // create and append other elements for info (h2,img,p,a), return container
}

// Filling in the portfolio page with cards. WIP
function fill_portfolio() {
  // A list of lists, each inner list being a project title, image relative path, description, URL and clickable text
  const projects = [];
  for (let i = 0; i++; i < projects.length) {
    let card = create_card(projects[i][0], projects[i][1], projects[i][2], projects[i][3], projects[i][4]);
    document.body.append(card);
  }
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

  // The header menu
  const menu_div = document.createElement("header");
  menu_div.className = "flex-enabled";
  menu_div.id = "header-bar";
  // Add the main css
  const link_elem = document.createElement("link");
  link_elem.setAttribute("rel", "stylesheet");
  link_elem.setAttribute("href", "../css/main.css");
  document.head.append(link_elem);

  // Make main nav and put as 2nd element on page after the heading
  const main_nav = document.createElement("nav");
  main_nav.className = "flex-enabled";
  main_nav.id = "main-nav";
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
