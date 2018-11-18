# changelog

## 0.1.4 (2018-11-18T01:08:03+0000)

- added continuous deployment via travis by following [this](https://medium.com/@bezgachev/6-simple-steps-to-automatically-test-and-deploy-your-javascript-app-to-github-pages-c4c32a34bcb1)
- upped version to test deployment

## 0.1.3 (2018-11-18T00:27:05+0000)

- basic testing with [jest](https://jestjs.io/) and [enzyme](https://airbnb.io/enzyme/) via [this](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675)
  - didnt work with babel@7.1.0 + babel-jest@23.6.0 + jest@23.6.0
  - followed [this](https://jestjs.io/docs/en/getting-started#using-babel) to fix it
  - added jest support for dynamic importing following [this](https://github.com/airbnb/enzyme/issues/1460#issuecomment-388358778)
  - added jest support for css module mocking following
    [this](https://github.com/facebook/jest/issues/3094#issuecomment-385164816)
  - added test watching by adding `npm test -- --watch` to `scripts` in `package.json`

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
