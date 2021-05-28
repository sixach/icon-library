# Sixa Icon Library

A collection of line, solid, color & flat icons.

## Installation

Install the module:

```bash
npm install @sixach/icon-library --save
```

_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for ES2015+ such as IE browsers then using [core-js](https://github.com/zloirock/core-js) will add polyfills for these methods._

## Usage

```js
import { Icon } from '@wordpress/icons';
import { check } from '@sixach/icon-library';

<Icon icon={ check } />
```

## Props

Name | Type | Default | Description
--- | --- | --- | ---
`size` | `integer` | `24` | Size of icon in pixels.
