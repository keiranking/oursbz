# Business Ours

A static site, built with [11ty], for [Business Ours].

1. [Requirements](#requirements)
1. [Setup](#setup)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Updating content](#updating-content)
1. [Updating the codebase](#updating-the-codebase)
1. [Formatting content](#formatting-content)

[11ty]: https://11ty.dev/
[Business Ours]: https://ours.bz/

---

## Requirements

1. Check to see if you have Node installed on your computer:

    ```shell
    node -v
    ```

1. If necessary, install Node.js and a package manager, npm (requires [Homebrew]):

    ```shell
    brew install node
    ```

[Homebrew]: https://brew.sh/

## Setup

1. Clone the repository.

1. Install the necessary dependencies for local development:

    ```shell
    bin/setup
    ```

## Testing

To test locally:

1. Start the server:

    ```shell
    npm run start
    ```

1. View the app at <http://localhost:8080>. Saved changes in the repo will automatically refresh the browser.

To test remotely:

1. Create a pull request.

    Netlify will automatically deploy the branch, and create a comment on the PR with the preview URL.

1. View the app at the preview URL.

## Deployment

Updates to `origin/main` are [automatically deployed](https://ours.bz) (via Netlify).

To deploy elsewhere:

1. Build the static site:

    ```shell
    npm run build
    ```

    The generated files should be in the `/_site` subdirectory of the root project folder, and should include an `index.html` representing the homepage.

2. Move the site contents to a web server.

---

## Updating content

Most content can be edited via the [content management system](https://ours.bz/admin).

If you don't have login credentials, ask Keiran to create one.

## Updating the codebase

From the `main` branch:

1. `git pull`

1. Create a new branch: `git checkout -b your-branch-name`

From your new branch:

1. Modify files as needed.

1. Preview your changes locally, and make changes until satisfied.

1. Commit your changes.

1. `git push`

1. [Open a pull request].

1. [Preview your changes remotely](#testing).

1. Continue to modify `your-branch-name` and push changes upstream until satisfied.

1. Ensure your branch is still up to date with the remote `main` branch: `git rebase --origin main`

1. `git push`

1. `git checkout main`

You're now ready to merge your branch. From `main`:

1. Ensure your local `main` is still up to date with the remote `main` branch: `git pull`

1. `git merge your-branch-name`

1. `git push`

    On GitHub, your pull request should show that it is closed, with your changes merged, and your branch able to be safely deleted.

1. Delete your remote branch: `git push origin -d your-branch-name`

1. Delete your local branch `git branch -d your-branch-name`

[Open a pull request]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

## Formatting content

Most content is written in [Markdown].

[Markdown]: https://www.markdownguide.org/basic-syntax
