# Redoing tags

Each commit in git has a parent commit. If you edit a parent commit in an
interactive rebase, it will create a **new child commit** for each subsequent
commit, as the old child commit points to the old parent. Because all the steps
are tagged, and a tag is a pointer to a **specific commit**, if you edit that
commit, you'll have to retag that new commit & all "new" subsequent commits.

The following describes how to do this. From a high level, the steps are:

1. make your edits
2. delete all tags
3. retag with the new `sha`s

You can also just retag the commit you edited & subsequent commits; the
following instructions retag all steps for simplicity (don't have to pick out
the affected tags, just retag everything)

## Useful command for working with tags:

`git tag -n1`: show each tag with its message. Use this before & after to check
that everything worked as expected

## Instructions

*assumes POSIX shell*
*note:* at any time you can check 

1. `rebase -i [commit you want to edit]^1` (if you want to edit the very first
commit, use `git rebase -i --root`)
2. Change `pick` to `edit` for the commit you want to edit & save/exit editor
3. Make edits
4. Add changed files (or add your new commit if you're adding a step)
5. `git commit --amend` leave commit message the same
6. `git rebase --continue`
7. **Fix tags**. Now the *commit* is fixed but the *tags* will be broken, as every commit from
the one you edited forward is now a "new commit." Order to fix the tags:
  1. delete all tags `git tag -d step-{0..10}`  (if there are tags step-0 thru
  step-10, change second number to match how many steps there are)
  2. get the up-to-date `sha`s for all commits (those before the commit you
  edited will not have changed): `git log --oneline | tail -r`. Order reversed
  to put oldest first & match re-tagging block below
  3. Columnwise select the `sha`s from the previous step (:warning: if you added
  a commit you'll need to edit this block of tag commands to add it!)
  4. paste them in here:
  ```sh
git tag step-0  01831c3 -m "scaffold loopback app"
git tag step-1  38d372a -m "generate a model"
git tag step-2  7921388 -m "add some more models"
git tag step-3  275689f -m "mongo-db datasource"
git tag step-4  c572037 -m "Mysql datasource"
git tag step-5  8444a0b -m "generate model relationships"
git tag step-6  80fa693 -m "boot scripts"
git tag step-7  e5ab60a -m "model validation"
git tag step-8  66bf948 -m "Access Control Lists (ACLs)"
git tag step-9  e2bee90 -m "custom middleware"
git tag step-10 1b62d80 -m "remote methods"
git tag step-11 e77767c -m "frontend"
  ```
  5. paste the previous block (after editing) into your shell
8. verify the new tags with `git tag -n1`
9. double check everything
10. triple check :smile:
11. force push with tags: `git push [remote name] [branch name] --tags --force`

