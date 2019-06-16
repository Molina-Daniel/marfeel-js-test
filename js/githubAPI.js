class Github {
  constructor() {
    this.clientID = "b16cd305fc12c5b316db";
    this.clientSecret = "a1899fcadaf739fa3d835c39b014a63d03d13897";
  }

  /**
   * Fetch the data of the user from the github API
   * @param {string} userName Username introduced in the text input
   */
  async getUserInfo(userName) {
    const userProfile = await fetch(`https://api.github.com/users/${userName}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    const userRepos = await fetch(`https://api.github.com/users/${userName}/repos?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

    const profile = await userProfile.json();
    const repos = await userRepos.json();

    return { profile, repos }
  }
}
