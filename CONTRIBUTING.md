## Testing builds locally

```bash
# from the root of this workspace
npm pack --workspace ./packages

# in your project's folder
yarn add ../formik-material-ui/formik-material-ui-4.0.0.tgz
yarn add ../formik-material-ui/formik-material-ui-lab-1.0.0.tgz
```

## Publishing a new version

```bash
# before having merged to master

# bump desired packages to a major alpha version
yarn version --premajor --preid alpha --no-git-tag-version
yarn workspace @mercantile/formik-material-ui version --premajor --preid alpha --no-git-tag-version
yarn workspace @mercantile/formik-material-ui-lab version --premajor --preid alpha --no-git-tag-version
# or simply bump the prelease version
yarn version --prerelease --no-git-tag-version
yarn workspace @mercantile/formik-material-ui version --prerelease --no-git-tag-version
yarn workspace @mercantile/formik-material-ui-lab version --prerelease --no-git-tag-version

# once you have merged to master, do the following:

# create git tag and push it
git tag -a @mercantile/formik-material-ui@4.0.0-alpha.0 -m "@mercantile/formik-material-ui version 4.0.0-alpha.0"
git push origin @mercantile/formik-material-ui@4.0.0-alpha.0

git tag -a @mercantile/formik-material-ui-lab@1.0.0-alpha.0 -m "@mercantile/formik-material-ui-lab version 1.0.0-alpha.0"
git push origin @mercantile/formik-material-ui-lab@1.0.0-alpha.0

# publish
npm login
yarn workspace @mercantile/formik-material-ui publish --access public --tag alpha
yarn workspace @mercantile/formik-material-ui-lab publish --access public --tag alpha
```
