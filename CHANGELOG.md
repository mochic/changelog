# changelog

## 0.1.2 (2018-11-15T23:03:09+0000)

- setup deployment for github pages
- github pages deployment w/o create-react-app as bullets:
  - `npm install --only=dev gh-pages`
  - change `homepage` in `package.json` to:
    `https://${user.name}.github.io/\${repo.name}`
  - add `${packageManager.name} run build` as `deploy` to `scripts` in `package.json`
  - add `gh-pages -d dist` as `deploy` to `scripts` in `package.json`
- start considering a better way to document code snippets...

## 0.1.1 (2018-11-15T07:32:13+0000)

- update temporary blogging solution to better blog about making the blog...
- waste way more time with a far more depraved temporary blogging solution...
  - at least it's an excuse to use React.Suspense, React.Lazy, simple-cache-provider

## 0.1.0 (2018-11-13T20:58:39+0000)

- bootstrapped project...
