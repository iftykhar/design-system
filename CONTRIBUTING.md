# Contributing to My Design System

Thank you for your interest in contributing to My Design System! By participating, you agree to abide by our [Code of Conduct](https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct). These guidelines are based on GitHub’s recommendations and examples from prominent open-source projects .

---

## Table of Contents

1. [Reporting Issues](#reporting-issues)  
2. [Proposing Enhancements](#proposing-enhancements)  
3. [Code Style & Testing](#code-style--testing)  
4. [Commit Message Guidelines](#commit-message-guidelines)  
5. [Submitting Pull Requests](#submitting-pull-requests)  
6. [Code Review Process](#code-review-process)  
7. [Additional Resources](#additional-resources)  

---

## Reporting Issues

Before opening a new issue, please search existing issues to see if your problem or suggestion has already been raised. When you do open an issue:

- Use a **clear, descriptive title**.  
- Explain **what’s happening**, **what you expected**, and **how to reproduce** the problem.  
- Include **screenshots**, code snippets, or logs where applicable.  

---

## Proposing Enhancements

For new features or large changes:

1. **Open an issue first** to discuss the idea and scope—this avoids wasted effort on unaligned changes.  
2. When writing the proposal, include **use cases**, **mockups**, or **API sketches**.  
3. Once the proposal is accepted, link the issue in your pull request.  

---

## Code Style & Testing

We aim for **readable**, **consistent**, and **maintainable** code:

- **Language & formatting**: TypeScript + TailwindCSS. Follow existing patterns; linting is enforced via ESLint + Prettier.  
- **Component structure**: Each component lives in its own folder with `Component.tsx`, `types.ts`, `index.ts`, and `Component.stories.tsx`.  
- **Testing**: Add unit tests for any new functionality using React Testing Library. Ensure all tests pass (`npm test`) before submitting.  

---

## Commit Message Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/) style:


## Optional longer description 
 
## Optional issue references, e.g. Closes #123 
```

Types include:

feat — a new feature

fix — a bug fix

docs — documentation only changes

style — formatting, missing semi-colons, etc.

refactor — code change that neither fixes a bug nor adds a feature

test — adding missing tests or correcting existing tests

chore — build process or auxiliary tools
```

## Submitting Pull Requests
Fork the repo and create a branch:

```bash
git checkout -b feat/your-feature
```

Commit your changes in logical chunks and write descriptive commit messages.

Rebase onto the latest main to avoid merge conflicts.

## Open a pull request against main and include:

A link to any related issue

A brief summary of changes

Screenshots or GIFs for UI changes

Any performance or backward-compatibility notes

Pull requests that don’t follow these guidelines may be closed or asked for revision

## Code Review Process
Every PR will be reviewed by at least one maintainer.

Reviewers may request changes; please address feedback promptly.

Once approved and CI checks pass, a maintainer will merge your PR.