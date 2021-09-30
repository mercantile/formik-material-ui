# Formik Material-UI

![](https://github.com/mercantile/formik-material-ui/workflows/Build%20formik-material-ui/badge.svg)
![](https://github.com/mercantile/formik-material-ui/workflows/Build%20formik-material-ui-lab/badge.svg)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

Fork of [formik-material-ui](https://github.com/mercantile/formik-material-ui). Bindings for using [Formik](https://github.com/jaredpalmer/formik) with [MUI](https://mui.com/).

- [Documentation for formik-material-ui](./docs/docs/api/material-ui.md)
- [Documentation for formik-material-ui-lab](./docs/docs/api/material-ui.md)

This project requires Formik>= 2.0.0. For Formik one please use formik-material-ui@1.0.x

## Testing builds locally

```bash
# from the root of this workspace
npm pack --workspace ./packages

# in your project's folder
npm i ../formik-material-ui/formik-material-ui-4.0.0.tgz
npm i ../formik-material-ui/formik-material-ui-lab-1.0.0.tgz
```

## Publishing a new version

```bash
# before having merged to master

# bump desired packages to a major alpha version
npm version premajor --preid alpha
npm version premajor --preid alpha --workspace formik-material-ui
npm version premajor --preid alpha --workspace formik-material-ui-lab
# or simply bump the prelease version
npm version prerelease
npm version prerelease --workspace formik-material-ui
npm version prerelease --workspace formik-material-ui-lab

# once you have merged to master, do the following:

# create git tag and push it
git tag -a @mercantile/formik-material-ui@4.0.0-alpha.0 -m "@mercantile/formik-material-ui version 4.0.0-alpha.0"
git push origin @mercantile/formik-material-ui@4.0.0-alpha.0

git tag -a @mercantile/formik-material-ui-lab@1.0.0-alpha.0 -m "@mercantile/formik-material-ui-lab version 1.0.0-alpha.0"
git push origin @mercantile/formik-material-ui-lab@1.0.0-alpha.0

# publish
npm publish ./packages --access public --workspace @mercantile/formik-material-ui --tag alpha
npm publish ./packages --access public --workspace @mercantile/formik-material-ui-lab --tag alpha
```
