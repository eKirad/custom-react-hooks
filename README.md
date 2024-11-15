# custom-react-hooks

A collection of useful custom react hooks.

## Installation

One can install the hooks' collection as an NPM package as follows:

```
npm install simple-custom-react-hooks
```

## Description

### 1. `useEffectOnUpdateOnly`

This custom hook covers the 'missing' case of the build-in `useEffect()` hook of running only if an update occurs. That is, `useEffect` with and empty dependency array would run only once (as an effect of) after the initial render.
The `useEffectOnUpdateOnly` custom hook can be seen as a hook that handles the "opposite" behaviour, namely, applying an effect only once an update (in any of the defined dependencies) occurs.

### 2. `useLocalStorage`

A custom hook that stores a state into the local storage[^1].

### 3. `useFetchAll`

A custom hook that performs an API fetch based on a given URL and persists the response in state.

## Usage

### 1. `useEffectOnUpdateOnly`

```
useEffectOnUpdateOnly({ callback: () => {
   // Effect code goes here
}, dependencies: [] }) // Dependencies for the effect have to be added to the array here
```

### 2. `useLocalStorage`

```
const [localStorageValue, setLocalStorageValue] = useLocalStorage(`foo`)
...
setLocalStorageValue(`bar`)
```

### 3. `useFetchAll`

```
const BASE_URL = `localhost:<PORT>`
const RESOURCE_PATH = `foo`

const [{ data, isError, isLoading }, { setQueryParameters, shouldFetchData }] = useFetchAll(BASE_URL}/${RESOURCE_PATH}`)
```


<details>
  <summary><h2>Test</h2></summary>

  This is the content under the collapsible **Test** heading. It will be hidden until the user clicks on the heading.

  - Bullet 1
  - Bullet 2
  - Bullet 3

  You can also include **Markdown** elements like code blocks:

  ```javascript
  console.log("This is a code block inside the collapsible section");
```
<details>

## API

	<summary>1. useEffectOnUpdateOnly>

	In the following `objArg: Args<T>` is used to describe the object that is passed to the hook.

	```
	type Args<T> = {
	    dependencies: Array<T>
	    callback: () => void
	}

	```
---
#### `objArg.dependencies`
Type: `Array<T>`

The array on which the effect depends.

---
#### `objArg.callback`
Type: `() => void`

The effect/function executed after an update in the dependency array occurs.
</details>



### 2. `useLocalStorage`
---
#### `key`
Type: `string`

### 3. `useFetchAll`
---
#### `uri`
Type: `string`

---
#### `queryParams`
Type: `QueryParams`

Default value: `{ limit: 100 }: QueryParams`

```
type QueryParams = {
    limit: number
    page?: number
    sort?: Sort
}

type Sort = {
    sortOrder: SortOrderEnum
    sortField: string
}

enum SortOrderEnum {
    asc = `ASC`,
    DESC = `DESC`
}
```
---
#### `initialData`
Type: `Array<T>`

Default value: []

[^1]: MDN documentation about local storage - [Local Storage MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
