# react-flex

 > Flex component built for React

## Install

```sh
$ npm i @zippytech/react-flex --save
```

## Key features

 * **support for a wide range of React versions**
 * no worries about browser prefixing for older browsers
 * props similar to css properties, so basically almost no learning curve

## Usage

```jsx
import { Flex, Item } from '@zippytech/react-flex';
import '@zippytech/react-flex/index.css';

<Flex row alignItems="center">
  <div>a first div</div>
  <Item flex={1}>flexes to 1</Item>
</Flex>
```

**DONT FORGET to import `@zippytech/react-flex/index.css`** as well.

## Motivation

Ideally, we could write `<div style={{flex: 1}} />`, but the browser landscape has to catch up with prefixing, latest syntax, etc.

So instead, `<Item flex={2} />` adds a `className` on the rendered item. Since you are also importing `@zippytech/react-flex/index.css`, you get a all the cross-browser syntax and prefixing that `autoprefixer` offers.

## Props

There are two components in the `@zippytech/react-flex` module: `Flex` and `Item`, exposed as named exports. They both support `flex` as a prop.

### Flex

 * `inline: Boolean` - for `display: inline-flex`.
 * `row: Boolean` - for `flex-direction: row`. Defaults to `true`
 * `column: Boolean` - for `flex-direction: column`
 * `reverse: Boolean` - for reverse direction (eg. `flex-direction:  column-reverse or row-reverse`)
 * `wrap: Boolean` - for `flex-wrap: wrap`. Defaults to true.
 * `flex: Number/String/Boolean` - a number/string from 0 to *24* for the `flex` css property. `false` for `none`.
 * `alignItems: String` - a value for the `align-items` css property.
 * `justifyContent: String` - a value for the `justify-content` css property.
 * `alignContent: String` - a value for the `align-content` css property.
 * `display: String` - you can customize the display to be `'flex'` or `'inline-flex'`

The `Flex` component has the following default props (which `Item` does not):

 * `row=true`
 * `wrap=true`
 * `alignItems='center'`
 * `display='flex'`

Our experience shows those are the most common configs, so we made them the defaults.

### Item

* any of the above
* `flex: Number/String/Boolean` - a number/string from 0 to *24* for the `flex` css property. `false` for `none`. Defaults to `1`.
* `flexGrow: Number/Boolean/String` - a number/string from 0 to *24* for `flex-grow`. Most of the times, using `flex` is just enough.
* `flexShrink: Number/String` - a value for the `flex-shrink` css property. From `0` to *`24`*.
* `flexBasis: String` - a value for the `flex-basis` css property. Valid values are: `0` (and `'none'`, which is the same), `'auto'`, `'content'`, `'fit-content'`, `'min-content'`, `'max-content'`, `'fit'`.


## Examples

```jsx

<Flex alignItems="start"> //or "flex-start"
  <Item flex={2}>
    content here
  </Item>
</Flex>

<Flex column wrap={false}>
  <Flex flex={false}>
    Flex also supports the `flex` prop
  </Flex>
  <Item flex={3} />
  <Item flex={12} />
</Flex>
```

## Development

```sh
$ git clone https://github.com/zippytech/react-flex.git
$ npm i
$ npm run dev
```

## Other

If you wish to use `index.scss`, you can import that directly.

Now navigate to [http://localhost:8181/dev.html](http://localhost:8181/dev.html), modify index.jsx and see the changes happen live in the browser.

## LICENSE

#### [Apache2](./LICENSE)
