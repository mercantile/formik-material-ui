## Testing builds locally

```bash
# from the root of this workspace
yarn workspace @mercantile/formik-mui package
yarn workspace @mercantile/formik-mui-x package
npm pack --workspace ./packages

# in your project's folder
npm i ../formik-mui/mercantile-formik-mui-4.0.0-alpha.0.tgz
npm i ../formik-mui/mercantile-formik-mui-x-1.0.0-alpha.0.tgz
```

## Publishing manually a new version

```bash
# before having merged to master

# bump desired packages to a major alpha version
yarn version --premajor --preid alpha --no-git-tag-version
yarn workspace @mercantile/formik-mui version --premajor --preid alpha --no-git-tag-version
yarn workspace @mercantile/formik-mui-x version --premajor --preid alpha --no-git-tag-version
# or simply bump the prelease version
yarn version --prerelease --no-git-tag-version
yarn workspace @mercantile/formik-mui version --prerelease --no-git-tag-version
yarn workspace @mercantile/formik-mui-x version --prerelease --no-git-tag-version

# once you have merged to master, do the following:

# create git tag and push it
git tag -a @mercantile/formik-mui@4.0.0-alpha.0 -m "@mercantile/formik-mui version 4.0.0-alpha.0"
git push origin @mercantile/formik-mui@4.0.0-alpha.0

git tag -a @mercantile/formik-mui-x@1.0.0-alpha.0 -m "@mercantile/formik-mui-x version 1.0.0-alpha.0"
git push origin @mercantile/formik-mui-x@1.0.0-alpha.0

# publish
npm login
yarn workspace @mercantile/formik-mui publish --access public --tag alpha
yarn workspace @mercantile/formik-mui-x publish --access public --tag alpha
```
