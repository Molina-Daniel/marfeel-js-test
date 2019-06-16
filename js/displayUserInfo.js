class DisplayUI {
  constructor() {
    this.userProfile = document.getElementById("userProfile");
    this.userRepos = document.getElementById("userRepos");
  }

  /**
   * Create the HTML structure and display the user's profile information
   * @param {Object} data Object containing the user information
   */
  displayProfile(data) {
    const parent = document.getElementById("userProfile");

    const avatarImg = document.createElement("img");
    avatarImg.classList.add("avatarImg");
    avatarImg.src = data.avatar_url;
    parent.appendChild(avatarImg);

    const div = document.createElement("div");
    div.classList.add("userInfo")
    parent.appendChild(div);

    const userName = document.createElement("p");
    userName.classList.add("userName");
    userName.innerHTML = `@${data.login}`;
    div.appendChild(userName);

    const fullName = document.createElement("h1");
    fullName.classList.add("fullName");
    fullName.innerHTML = data.name;
    div.appendChild(fullName);

    const bio = document.createElement("p");
    bio.classList.add("bio");
    bio.innerHTML = data.bio || "";
    div.appendChild(bio);
  }

  /**
   * Create a table with the user's repos
   * @param {Object} data Object containing the user information
   */
  displayRepos(data) {
    const parent = document.getElementById("userRepos");
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    let headRow = thead.insertRow(-1);
    let headCell = headRow.insertCell(-1);
    headCell.innerHTML = "Repositories"
    headCell = headRow.insertCell(-1);
    headCell.innerHTML = ""
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    data.forEach((repo) => {
      let bodyRow = tbody.insertRow(-1);
      let bodyCell = bodyRow.insertCell(-1);
      bodyCell.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`
      bodyCell = bodyRow.insertCell(-1);
      bodyCell.innerHTML = `<img src="assets/github-star.svg" alt="stars"> ${repo.stargazers_count} <img src="assets/github-fork.svg" alt="forks"> ${repo.forks_count}`;
    });
    table.appendChild(tbody);

    parent.appendChild(table);
    parent.classList.add("repos");
  }

  // Create de error message when username does not exist
  displayNoUser() {
    const parent = document.getElementById("noUser");

    const div = document.createElement("div");
    div.classList.add("noUser");
    const erroMsg = document.createElement("p");
    erroMsg.innerHTML = "Does not exist";
    div.appendChild(erroMsg);

    parent.appendChild(div);
  }

  // Clean the current user displayed
  cleanDisplay() {
    const noUser = document.getElementById("noUser");
    while (noUser.firstChild) {
      noUser.removeChild(noUser.firstChild);
    }

    const userData = document.getElementById("userProfile");
    while (userData.firstChild) {
      userData.removeChild(userData.firstChild);
    }

    const repos = document.getElementById("userRepos");
    while (repos.firstChild) {
      repos.removeChild(repos.firstChild);
    }
  }
}
