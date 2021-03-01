type GithubUserData = {
  username: string /* login */;
  profilePhoto: string /* avatar_url */;
  name: string;
  company: string;
  bio: string;
};

const GithubApi = {
  user: async (username: string): Promise<GithubUserData> => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userResponse = await response.json();
    const user: GithubUserData = {
      username: userResponse.login,
      profilePhoto: userResponse.avatar_url,
      name: userResponse.name,
      company: userResponse.company,
      bio: userResponse.bio,
    };
    return user;
  },
};

export { GithubApi };
export type { GithubUserData };
