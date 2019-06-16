const github = new Github;
const displayUI = new DisplayUI;

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("submit", getUser);

/**
 * 1) Clean (if any) the current information displayed and 2) display the new information either user information and his repos or the error message.
 * @param {*} e Event
 */
function getUser(e) {
  e.preventDefault();
  displayUI.cleanDisplay();
  const userName = document.getElementById("searchInput").value;
  displayUser(userName);
}

/**
 * Check if the username introduced exist and call the functions to display his/her information or the error (user does not exist) function
 * @param {string} userName Usename introduced in the text input
 */
function displayUser(userName) {
  github.getUserInfo(userName)
    .then(data => {
      let profile = data.profile;
      let repos = data.repos;

      if (!profile.message) {
        displayUI.displayProfile(profile);
        displayUI.displayRepos(repos);
      } else {
        displayUI.displayNoUser();
      }
    })
}

