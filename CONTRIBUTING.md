# Contributing to TypeReact

## Git Workflow

* Checkout a new branch using the following naming conventions:
  * feature/login
  * fix/authentication
  * refactor/...
  * cleanup/...
  * doc/...

```
git checkout -b feature/<NEW-BRANCH-NAME>
```

* Make changes to your new branch.

* Add and commit changes.
```
git add <FILE-TO-ADD>
```
```
git commit -m '[feature] <COMMIT-MESSAGE>'
```

* Rebase from the upstream dev branch to your feature branch. Be sure to do this while you are on your feature branch.
```
git pull –-rebase upstream dev
```

* Resolve merge conflicts if they exist.

* Push changes to your personal github account.
```
git push origin feature/addlogin
```

* Submit pull request from your personal github to the org’s github. The pull request should be from your feature branch to the org’s dev branch.

* Once your pull request has been merged to the org's dev branch, git checkout your local dev branch and rebase from the org's dev branch before beginning work on a new feature.

## Commit Message Guidelines

* Commits to your feature branch should be prefixed like so:
  - [feature] user login
  - [fix] correct ui routing
  - [refactor] ...
  - [cleanup] ...
  - [doc] ...

* Each commit should be a brief, present-tense description of what has been added. Commits should not contain any uppercase letters.

* Make sure that you are only making changes relevant to your current branch. If you find yourself making unrelated changes, cut a new branch using:
```
git checkout -b <NEW-BRANCH-NAME>
```
