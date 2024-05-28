## CONTRIBUTING

When contributing to this repository, please first discuss the change you wish to make via [issues](https://github.com/Gerald-ux-ux/codesnippets/issues), [discord](https://discord.gg/tqm4eKy2).
Please note if you are working on a certain issue then make sure to stay active with development.

### Git Commit, Branch, and PR Naming Conventions

When you are working with git, please be sure to follow the conventions below on your pull requests, branches, and commits:

- Use a clear and descriptive title for the pull request.
- Follow the same guidelines as for commit messages in the PR description.
- Link to the related issue(s) in the description.

[branch naming conventions](https://medium.com/@shinjithkanhangad/git-good-best-practices-for-branch-naming-and-commit-messages-a903b9f08d68)

```

PR: [#ISSUE ID] Title of the PR
Branch: [ISSUE ID]-title-of-the-pr (shorter)
Commit: [[ISSUE ID]] [ACTION]: what was done

```

Example

```

PR: #2 Changing syntax highlighting on the snippets
Branch: feature/changing-syntax-highlighting (shorter)
Commit: [2] refactor: changing syntax highlighting


```

## Prerequisites



## Installation
1. Fork the repo
2. Clone your fork
3. Navigate to the project directory
4. Create a .env.local file at the root project directory
5. Copy paste the variable from ```.env.example`` you will also need to [join the discord](https://discord.gg/tqm4eKy2) to get the actual values
6. Install packages ```pnpm install ```
7. Open your browser and visit http://localhost:3000 to see the application running.


## Pulling in changes from upstream

You should pull in the changes that we add in daily, preferably before you checkout a new branch to do new work.

```git checkout main```
```git pull origin main``


## Megring
[Assign me](https://github.com/Gerald-ux-ux) as the reviewer after creating that PR. I will review your code, merge if all conventions have been followed and there are no issues.
### PRS created without following the naming conventions will NOT be merged


- Join the [discord](https://discord.gg/tqm4eKy2) channel for more information
