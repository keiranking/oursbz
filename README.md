# [ours.bz]

A static site, built with [11ty] and [Decap CMS].

1. [Requirements](#requirements)
1. [Setup](#setup)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Updating content](#updating-content)

[11ty]: https://11ty.dev/
[Decap CMS]: https://decapcms.org/
[ours.bz]: https://ours.bz/

---

## Requirements

- [Node.js and npm](https://nodejs.org/en/download)

## Setup

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and install dependencies:

```shell
bin/setup
```

## Testing

To test locally, `npm run start` and view the app at <http://localhost:8080>.

To test remotely, create a pull request. Netlify will auto-deploy the branch, and create a comment on the PR with a preview URL.

## Deployment

Updates to `origin/main` are [automatically deployed](https://ours.bz) (via Netlify).

To deploy elsewhere, `npm run build` and move the contents of `/_site` to a server.

## Updating content

Edit content via the [content management system](https://ours.bz/admin). Most content is written in [Markdown].

Edit the CMS by modifying `admin/config.yml`. Add/remove CMS users on [DecapBridge].

If necessary, [update the codebase](https://gist.github.com/keiranking/3b0036894ed37139e6830e3da2882e54).

[Markdown]: https://www.markdownguide.org/basic-syntax
[DecapBridge]: https://decapbridge.com/dashboard/sites