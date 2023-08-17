# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 5.0.0 (2023-08-17)


### ⚠ BREAKING CHANGES

* requires Angular v10
* **InViewport:** Removed `forRoot` method in module which is no longer required for `AppBrowserModule`. Replaced with `forServer` method for `AppServerModule`. Removed debounce feature and rxjs dependancy to leave implementation up to the consumer of the library. This reduces bundle size if debounce feature is not being used. Updated inviewport classes to `sn-inviewport--in` and `sn-inviewport--out` to match SOON styleguide
* **inviewport:** rxjs > 6 is now a peer dependency
* **InViewport:** Must provide the whole Provide object when providing window for browser module
* **InViewport:** inViewportModule.forRoot function now only accepts a single argument which should
be a reference to window or a mock window implementation

### Features

* **in-viewport:** add angular 7 support ([e1e9f30](https://github.com/mirazasx/angular-inviewport-ng13/commit/e1e9f3086b2de792c5bcf362ce7cf373065dd860))
* **in-viewport:** integrate feature detection for intersection observer ([4fc1a21](https://github.com/mirazasx/angular-inviewport-ng13/commit/4fc1a2162b7148e1473ce989ae2880606a719727)), closes [#31](https://github.com/mirazasx/angular-inviewport-ng13/issues/31)
* **InViewport:** add ability set offset using IntersectionObserver options ([#26](https://github.com/mirazasx/angular-inviewport-ng13/issues/26)) ([cacca75](https://github.com/mirazasx/angular-inviewport-ng13/commit/cacca75709830e0176a468d292819d71972cc6f8)), closes [#4](https://github.com/mirazasx/angular-inviewport-ng13/issues/4)
* **InViewport:** Added ability to specify a parent scroll container ([1045d86](https://github.com/mirazasx/angular-inviewport-ng13/commit/1045d86f7a6eb7aba7771a83182b45e5580e4642)), closes [#7](https://github.com/mirazasx/angular-inviewport-ng13/issues/7)
* **inviewport:** adding support for angular 6 ([aeecd91](https://github.com/mirazasx/angular-inviewport-ng13/commit/aeecd9188d0bf3db7ac6faac7b51a340a33b2a7e))
* **inViewport:** directive will emit onInViewportChange event when inViewport value changes ([fc63560](https://github.com/mirazasx/angular-inviewport-ng13/commit/fc635600df0ba183c573c522c1c561d041b0cd7e))
* **InViewport:** export directive to be able to trigger inviewport check manually ([9903a0c](https://github.com/mirazasx/angular-inviewport-ng13/commit/9903a0c7effd6afca597378203d73cba42d4417b)), closes [#9](https://github.com/mirazasx/angular-inviewport-ng13/issues/9)
* **inViewport:** moving package to thisissoon org ([7aeb1a1](https://github.com/mirazasx/angular-inviewport-ng13/commit/7aeb1a1011710805ef236bfe1bcf8a902a0b91b6))
* **InViewport:** update directive selector so it matches snInViewport attribute ([0292245](https://github.com/mirazasx/angular-inviewport-ng13/commit/0292245ddc31f8e1f13dcd6e15db1c1568b60cb8)), closes [#5](https://github.com/mirazasx/angular-inviewport-ng13/issues/5)
* **InViewport:** Updating WindowRef service with more mock properties and functions ([6c0264a](https://github.com/mirazasx/angular-inviewport-ng13/commit/6c0264a9e2d958b8dded26c06d90bf3b2f3c2306))


### Bug Fixes

* **@nguniversal/module-map-ngfactory-loader:** remove module-map-ngfactory-loader (deprecated) ([30e6a57](https://github.com/mirazasx/angular-inviewport-ng13/commit/30e6a570bf8858f10fa2cc0c711f1e94487ebfa9))
* **build:** ensure build is run before publishing package ([bd12500](https://github.com/mirazasx/angular-inviewport-ng13/commit/bd125009c48f6aae568768b6016d379fe7a7080e))
* **build:** generate correct metadata needed for ng-language-service ([26a0c08](https://github.com/mirazasx/angular-inviewport-ng13/commit/26a0c080f1d61fc3fce739e5b51fa229d4140526))
* **build:** run build after release ([b43771e](https://github.com/mirazasx/angular-inviewport-ng13/commit/b43771ee09708eb45173a56f61dc29ebaf41629e))
* fix peer dependancy for @angular/core to 5.x.x ([20f39d4](https://github.com/mirazasx/angular-inviewport-ng13/commit/20f39d43df34113c06120603ddfbbafafaf7f82f))
* **inViewport:** Avoid triggering change detection unless necessary ([e90067b](https://github.com/mirazasx/angular-inviewport-ng13/commit/e90067ba6d88395e91bffae50e8eb2d55bdc8ced))
* **inViewport:** calculation did not take into account all scenarios from both axes ([3d67ec9](https://github.com/mirazasx/angular-inviewport-ng13/commit/3d67ec936f6e297faef7a5f9ea6d8037ad936d13))
* **inViewport:** Fix app breaking when rendering on universal ([5b5dd4f](https://github.com/mirazasx/angular-inviewport-ng13/commit/5b5dd4fedc562058703d96876d7807fa0977de0c))
* **inViewport:** fix inViewport calculation on mobile ([9777264](https://github.com/mirazasx/angular-inviewport-ng13/commit/9777264465cd36b9e59fed0ee6bd468d88902bf9))
* **InViewport:** Fix module not working with aot ([92ace50](https://github.com/mirazasx/angular-inviewport-ng13/commit/92ace50c3aaf586a267dc13cba3bc518f3ede521))
* **InViewport:** Fixed a regression when used in angular universal app ([5c210c1](https://github.com/mirazasx/angular-inviewport-ng13/commit/5c210c172e19007d0e4f1d774bd7c1b5fbe4a58f))
* **inViewport:** inViewport status not being set correctly for large elements ([7b85443](https://github.com/mirazasx/angular-inviewport-ng13/commit/7b85443e1e8ebe62681452e28a9345088a57d46e))
* **InViewport:** Use getBoundingClientRect to get element position in viewport ([8a845a3](https://github.com/mirazasx/angular-inviewport-ng13/commit/8a845a3f1423e0bc617e359162bf5c5a25e268eb))
* **package.json:** update package versions to go along with Angular v10 upgrade ([ea3b739](https://github.com/mirazasx/angular-inviewport-ng13/commit/ea3b739fbd327579c942511ae6f71a108e83a412)), closes [#41](https://github.com/mirazasx/angular-inviewport-ng13/issues/41)
* **packagr:** export all symbol reference in public_api.ts ([2d0eaec](https://github.com/mirazasx/angular-inviewport-ng13/commit/2d0eaec8cbc4c9c5368f7e4cdc81283db7925d87))
* **polyfills,lock file:** update polyfills to use proper references; rebuild lock file ([ef09fe0](https://github.com/mirazasx/angular-inviewport-ng13/commit/ef09fe0490d9247022ef9e379daa0a6d7e860934)), closes [#41](https://github.com/mirazasx/angular-inviewport-ng13/issues/41)
* update packages for audit issues ([2e8e7f5](https://github.com/mirazasx/angular-inviewport-ng13/commit/2e8e7f5e1d580cc0555e613289c838c3e6a9fbf0)), closes [#41](https://github.com/mirazasx/angular-inviewport-ng13/issues/41)
* Upgrade to Angular v10 ([3e5b1ca](https://github.com/mirazasx/angular-inviewport-ng13/commit/3e5b1ca233d0d55d5865125c6ce6ac8afafae679))
* **window-mock:** replace intersection observer arrow functino with regular function to allow for use as a constructor. ([287fe3c](https://github.com/mirazasx/angular-inviewport-ng13/commit/287fe3cd2adb5dc9c7993eb482492499e96f13c1))
* **window-ref:** remove incorrect pageOffset properties ([e967d32](https://github.com/mirazasx/angular-inviewport-ng13/commit/e967d320921c8e7a0aa8a510d63f70b5a269715c))
* **WindowRef:** add arguments to window ref functions ([d512399](https://github.com/mirazasx/angular-inviewport-ng13/commit/d5123994a93d55a5edbb611eeba0b93d7bb41376))


* **InViewport:** use intersection observer to calculate inviewport state ([#25](https://github.com/mirazasx/angular-inviewport-ng13/issues/25)) ([b722d3f](https://github.com/mirazasx/angular-inviewport-ng13/commit/b722d3f50ca8783847a3532260a18d6ff0e6e5a5))

<a name="4.2.2"></a>
## [4.2.2](https://github.com/thisissoon/angular-inviewport/compare/v4.2.1...v4.2.2) (2020-02-03)



<a name="4.2.1"></a>
## [4.2.1](https://github.com/thisissoon/angular-inviewport/compare/v4.2.0...v4.2.1) (2020-02-03)


### Bug Fixes

* **window-mock:** replace intersection observer arrow functino with regular function to allow for use as a constructor. ([287fe3c](https://github.com/thisissoon/angular-inviewport/commit/287fe3c))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/thisissoon/angular-inviewport/compare/v4.1.0...v4.2.0) (2019-02-01)


### Features

* **in-viewport:** integrate feature detection for intersection observer ([4fc1a21](https://github.com/thisissoon/angular-inviewport/commit/4fc1a21)), closes [#31](https://github.com/thisissoon/angular-inviewport/issues/31)



<a name="4.1.0"></a>
# [4.1.0](https://github.com/thisissoon/angular-inviewport/compare/v4.0.0...v4.1.0) (2018-11-21)


### Features

* **in-viewport:** add angular 7 support ([e1e9f30](https://github.com/thisissoon/angular-inviewport/commit/e1e9f30))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/thisissoon/angular-inviewport/compare/v3.0.1...v4.0.0) (2018-10-08)


### Features

* **InViewport:** add ability set offset using IntersectionObserver options ([#26](https://github.com/thisissoon/angular-inviewport/issues/26)) ([cacca75](https://github.com/thisissoon/angular-inviewport/commit/cacca75)), closes [#4](https://github.com/thisissoon/angular-inviewport/issues/4)


### Performance Improvements

* **InViewport:** use intersection observer to calculate inviewport state ([#25](https://github.com/thisissoon/angular-inviewport/issues/25)) ([b722d3f](https://github.com/thisissoon/angular-inviewport/commit/b722d3f))


### BREAKING CHANGES

* **InViewport:** Removed `forRoot` method in module which is no longer required for `AppBrowserModule`. Replaced with `forServer` method for `AppServerModule`. Removed debounce feature and rxjs dependancy to leave implementation up to the consumer of the library. This reduces bundle size if debounce feature is not being used. Updated inviewport classes to `sn-inviewport--in` and `sn-inviewport--out` to match SOON styleguide



<a name="3.0.1"></a>

## [3.0.1](https://github.com/thisissoon/angular-inviewport/compare/v3.0.0...v3.0.1) (2018-07-20)

### Bug Fixes

* **window-ref:** remove incorrect pageOffset properties ([e967d32](https://github.com/thisissoon/angular-inviewport/commit/e967d32))

<a name="3.0.0"></a>

# [3.0.0](https://github.com/thisissoon/angular-inviewport/compare/v2.2.0...v3.0.0) (2018-05-23)

### Features

* **inviewport:** adding support for angular 6 ([aeecd91](https://github.com/thisissoon/angular-inviewport/commit/aeecd91))

### BREAKING CHANGES

* **inviewport:** rxjs > 6 is now a peer dependency

<a name="2.2.0"></a>

# [2.2.0](https://github.com/thisissoon/angular-inviewport/compare/v2.1.1...v2.2.0) (2018-02-20)

### Bug Fixes

* fix peer dependancy for [@angular](https://github.com/angular)/core to 5.x.x ([20f39d4](https://github.com/thisissoon/angular-inviewport/commit/20f39d4))

### Features

* **InViewport:** export directive to be able to trigger inviewport check manually ([9903a0c](https://github.com/thisissoon/angular-inviewport/commit/9903a0c)), closes [#9](https://github.com/thisissoon/angular-inviewport/issues/9)

<a name="2.1.1"></a>

## [2.1.1](https://github.com/thisissoon/angular-inviewport/compare/v2.1.0...v2.1.1) (2018-01-23)

### Bug Fixes

* **WindowRef:** add arguments to window ref functions ([d512399](https://github.com/thisissoon/angular-inviewport/commit/d512399))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/thisissoon/angular-inviewport/compare/v2.0.0...v2.1.0) (2018-01-23)

### Bug Fixes

* **InViewport:** Fix module not working with aot ([92ace50](https://github.com/thisissoon/angular-inviewport/commit/92ace50))

### BREAKING CHANGES

* **InViewport:** Must provide the whole Provide object when providing window for browser module

<a name="2.0.0"></a>

# [2.0.0](https://github.com/thisissoon/angular-inviewport/compare/v2.0.0-rc.0...v2.0.0) (2018-01-23)

<a name="2.0.0-rc.0"></a>

# [2.0.0-rc.0](https://github.com/thisissoon/angular-inviewport/compare/v1.4.3...v2.0.0-rc.0) (2018-01-23)

### Features

* **InViewport:** Updating WindowRef service with more mock properties and functions ([6c0264a](https://github.com/thisissoon/angular-inviewport/commit/6c0264a))

### BREAKING CHANGES

* **InViewport:** inViewportModule.forRoot function now only accepts a single argument which should
  be a reference to window or a mock window implementation

<a name="1.4.3"></a>

## [1.4.3](https://github.com/thisissoon/angular-inviewport/compare/v1.4.2...v1.4.3) (2018-01-04)

### Bug Fixes

* **InViewport:** Fixed a regression when used in angular universal app ([5c210c1](https://github.com/thisissoon/angular-inviewport/commit/5c210c1))

<a name="1.4.2"></a>

## [1.4.2](https://github.com/thisissoon/angular-inviewport/compare/v1.4.1...v1.4.2) (2017-12-04)

### Bug Fixes

* **build:** generate correct metadata needed for ng-language-service ([26a0c08](https://github.com/thisissoon/angular-inviewport/commit/26a0c08))

<a name="1.4.1"></a>

## [1.4.1](https://github.com/thisissoon/angular-inviewport/compare/v1.4.0...v1.4.1) (2017-12-04)

<a name="1.4.0"></a>

# [1.4.0](https://github.com/thisissoon/angular-inviewport/compare/v1.4.0-rc.1...v1.4.0) (2017-11-29)

<a name="1.4.0-rc.1"></a>

# [1.4.0-rc.1](https://github.com/thisissoon/angular-inviewport/compare/v1.4.0-rc.0...v1.4.0-rc.1) (2017-11-29)

### Bug Fixes

* **packagr:** export all symbol reference in public_api.ts ([2d0eaec](https://github.com/thisissoon/angular-inviewport/commit/2d0eaec))

<a name="1.4.0-rc.0"></a>

# [1.4.0-rc.0](https://github.com/thisissoon/angular-inviewport/compare/v1.3.2...v1.4.0-rc.0) (2017-11-29)

### Breaking Changes

* **InViewport:** Changed `(onInViewportChange)` output to `(inViewportChange)`. Changed `[snInViewportParent]` input to `[parent]`. This was to pass default linting options with the angular cli ([f86f1c6](https://github.com/thisissoon/angular-inviewport/commit/f86f1c6))

<a name="1.3.2"></a>

## [1.3.2](https://github.com/thisissoon/angular-inviewport/compare/v1.3.1...v1.3.2) (2017-11-28)

### Bug Fixes

* **inViewport:** Avoid triggering change detection unless necessary ([e90067b](https://github.com/thisissoon/angular-inviewport/commit/e90067b))

<a name="1.3.1"></a>

## [1.3.1](https://github.com/thisissoon/angular-inviewport/compare/v1.3.0...v1.3.1) (2017-11-13)

### Bug Fixes

* **inViewport:** Fix app breaking when rendering on universal ([5b5dd4f](https://github.com/thisissoon/angular-inviewport/commit/5b5dd4f))

<a name="1.3.0"></a>

# [1.3.0](https://github.com/thisissoon/angular-inviewport/compare/v1.2.0...v1.3.0) (2017-08-30)

### Bug Fixes

* **InViewport:** Use getBoundingClientRect to get element position in viewport ([8a845a3](https://github.com/thisissoon/angular-inviewport/commit/8a845a3))

### Breaking Changes

* **InViewport:** `InViewportModule` now has to be imported with `forRoot(providers)` where `providers` has a `WindowRef` class included which should be used to provide a window object ([8a845a3](https://github.com/thisissoon/angular-inviewport/commit/8a845a3))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/thisissoon/angular-inviewport/compare/v1.1.0...v1.2.0) (2017-08-29)

### Features

* **InViewport:** Added ability to specify a parent scroll container ([1045d86](https://github.com/thisissoon/angular-inviewport/commit/1045d86)), closes [#7](https://github.com/thisissoon/angular-inviewport/issues/7)

<a name="1.1.0"></a>

# [1.1.0](https://github.com/thisissoon/angular-inviewport/compare/v1.0.1...v1.1.0) (2017-08-25)

### Features

* **InViewport:** update directive selector so it matches snInViewport attribute ([0292245](https://github.com/thisissoon/angular-inviewport/commit/0292245)), closes [#5](https://github.com/thisissoon/angular-inviewport/issues/5)

<a name="1.0.1"></a>

## [1.0.1](https://github.com/thisissoon/angular-inviewport/compare/v1.0.0...v1.0.1) (2017-08-15)

<a name="1.0.0"></a>

# [1.0.0](https://github.com/thisissoon/angular-inviewport/compare/v0.2.3...v1.0.0) (2017-08-15)

### Features

* **inViewport:** moving package to thisissoon org ([7aeb1a1](https://github.com/thisissoon/angular-inviewport/commit/7aeb1a1))

<a name="0.2.3"></a>

## [0.2.3](https://github.com/edoparearyee/angular-inviewport/compare/v0.2.2...v0.2.3) (2017-08-09)

### Bug Fixes

* **inViewport:** calculation did not take into account all scenarios from both axes ([3d67ec9](https://github.com/edoparearyee/angular-inviewport/commit/3d67ec9))

<a name="0.2.2"></a>

## [0.2.2](https://github.com/edoparearyee/angular-inviewport/compare/v0.2.1...v0.2.2) (2017-08-09)

### Bug Fixes

* **inViewport:** fix inViewport calculation on mobile ([9777264](https://github.com/edoparearyee/angular-inviewport/commit/9777264))

<a name="0.2.1"></a>

## [0.2.1](https://github.com/edoparearyee/angular-inviewport/compare/v0.2.0...v0.2.1) (2017-08-09)

### Bug Fixes

* **inViewport:** inViewport status not being set correctly for large elements ([7b85443](https://github.com/edoparearyee/angular-inviewport/commit/7b85443))

<a name="0.2.0"></a>

# [0.2.0](https://github.com/edoparearyee/angular-inviewport/compare/v0.1.3...v0.2.0) (2017-08-03)

### Features

* **inViewport:** Debounce event handler to improve performance ([0b44112](https://github.com/edoparearyee/angular-inviewport/commit/0b44112))

<a name="0.1.3"></a>

## [0.1.3](https://github.com/edoparearyee/angular-inviewport/compare/v0.1.2...v0.1.3) (2017-07-29)

### Bug Fixes

* **build:** ensure build is run before publishing package ([bd12500](https://github.com/edoparearyee/angular-inviewport/commit/bd12500))
* **build:** run build after release ([b43771e](https://github.com/edoparearyee/angular-inviewport/commit/b43771e))

<a name="0.1.2"></a>

## [0.1.2](https://github.com/edoparearyee/angular-inviewport/compare/v0.1.1...v0.1.2) (2017-07-28)

<a name="0.1.1"></a>

## [0.1.1](https://github.com/edoparearyee/angular-inviewport/compare/v0.1.0...v0.1.1) (2017-07-27)

### Bug Fixes

* **build:** make sure to run build before release ([ae3a797](https://github.com/edoparearyee/angular-inviewport/commit/ae3a797))

<a name="0.1.0"></a>

# [0.1.0](https://github.com/edoparearyee/angular-inviewport/compare/0.0.2...0.1.0) (2017-07-27)

### Features

* **inViewport:** directive will emit onInViewportChange event when inViewport value changes ([fc63560](https://github.com/edoparearyee/angular-inviewport/commit/fc63560))

<a name="0.0.2"></a>

## [0.0.2](https://github.com/edoparearyee/angular-inviewport/commit/6f04f8f) (2017-07-18)

### Features

* **inViewport:** initial release ([6f04f8f](https://github.com/edoparearyee/angular-inviewport/commit/6f04f8f))
