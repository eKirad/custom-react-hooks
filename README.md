# custom-react-hooks

A collection of useful custom react hooks for API data fetching, local storage usage, customized DOM manipulations, etc.

## Installation

One can install the hooks' collection as an NPM package as follows:

```
npm install simple-custom-react-hooks
```

## Description

### 1. `useEffectUpdate`

This custom hook covers the "missing" case of the build-in `useEffect()`[^1] hook of running only if an update occurs. That is, `useEffect` with and empty dependency array would run only once (as an effect of) after the initial render.
The `useEffectUpdate` custom hook can be seen as a hook that handles the "opposite" behaviour, namely, applying an effect only once an update (in any of the defined dependencies) occurs.

### 2. `useLocalStorage`

A custom hook that stores a state into the local storage[^2].

### 3. `useFetchAll`

A custom hook that performs an API fetch[^3] to retrive all the resources available at a given URL and persists the response in a local state.

### 4. `useFetchOne`

A custom hook that performs an API fetch[^3] to retrieve a single resource available at a given URL and persists the response in a local state.

### 5. `useFetchQuery`

A custom React Query (TanStack Query) -like hook that executes and async function and persists the response in a local state.

### 6. `useClickOutside`

A custom hook that detects a click that is performed outside of an HTML element. This might be especially handy when dealing with select/drop-down elements, when one would like to detect a user movement outside of the
eleemnt and perform certain actions (e.g. auto-close an opened select).

### 7. `useToggleBoolean`

A custom hook that toggles a boolean flag.

### 8. `useWindowWidth`

A custom hook that keeps track of the size of the DOM's window width.

### 9. `useWindowHeight`

A custom hook that keeps track of the size of the DOM's window height.

### 10. `useScrollPosition`

A custom hook that keeps track of the scroll position. 

### 11. `useDebounce`

A custom hook that updates a state value after some user-specified amount of time has passed. This might be especially useful for input elements that are coupled with some search functionality.

### 12. `usePreviousValue`

A custom hook that returns the previous value of a variable within a functional component (e.g. a local state) 

## Usage

### 1. `useEffectUpdate`

```js
const someProp = `foo`

useEffectUpdate({
    callback: () => {
        // Effect code goes here
    },
    dependencies: [someProp],
})
```

### 2. `useLocalStorage`

```js
const [localStorageValue, setLocalStorageValue] = useLocalStorage(`foo`)
...
setLocalStorageValue(`bar`)
```

### 3. `useFetchAll`

```js
const BASE_URL = `localhost:<PORT>`
const RESOURCE_PATH = `foo`

const [{ data, isError, isLoading }, { setQueryParameters, shouldFetchData }] = useFetchAll(BASE_URL}/${RESOURCE_PATH}`)
```

### 4. `useFetchOne`

```js
const BASE_URL = `localhost:<PORT>`
const RESOURCE_PATH = `foo`
const RESOURCE_ID = `123`

const [{ data, isError, isLoading }, { setQueryParameters, shouldFetchData }] = useFetchAll(BASE_URL}/${RESOURCE_PATH}/${RESOURCE_ID}`)
```

### 5. `useFetchQuery`

Note: keep in mind that this is a sample usage. The body of the `queryFn` can contain different logic, e.g. one can make an API call using an external library of own choice such as `axios`[^4].

```js
const URL = `localhost:<PORT>`
const queryKey = `foo`

const [{ data, isLoading, isError }] = useQuery({
    initialData: [],
    queryFn: async () => {
        const response = await fetch(`${URL}`)
        const responseData = await response.json()

        return responseData
    },
    queryKey: [queryKey],
})
```

### 6. `useClickOutside`

```js
const handleClickOutside = () => {
  // Outside click logic (e.g. close an opened select)
}
...
const ref = useClickOutside({ callback: handleClickOutside })
...
return (
  <select id="myDropdown" ref={ref}>
    <option value="option1">Option 1</option>
    <option value="option1">Option 1</option>
  </select>
)
```

### 7. `useToggleBoolean`

```js
const [booleanValue, toggleBooleanValue] = useToggleBoolean(true)
...
// e.g. toggle the value once a click event occurs
const handleClick = () => { toggleBooleanValue() }
```

### 8. `useWindowWidth`

```js
const windowWidth = useWindowWidth() 
```

### 9. `useWindowHeight`

```js
const windowHeight = useWindowHeight() 
```

### 10. `useScrollPosition`

```js
const scrollPosition= useScrollPosition() 
```

### 11. `useDebounce`

```js
const value = useDebounce(inputValue, 100) 
```

### 12. `usePreviousValue`

```js
const [count, setCount] = useState(0)
...
const previousValue = usePreviousValue(count) // Would always the "previous" state 
```
<details>
  <summary>API</summary>
  
  ### 1. useEffectUpdate
  
  In the following `objArg: Args<T>` is used to describe the object that is passed to the hook.

```js
type = Args<T> = {
  dependencies: Array<T>
  callback: () => void
}
```

#### `objArg.dependencies`

Type: `Array<T>`

The array on which the effect depends.

#### `objArg.callback`

Type: `() => void`

The effect/function executed after an update in the dependency array occurs.

### 2. `useLocalStorage`

#### `key`

Type: `string`

The identifier to which the value that is stored corresponds to.

### 3. `useFetchAll`

#### `uri`

Type: `string`

#### `queryParams`

Type: `QueryParams`

Default value: `{ limit: 100 }: QueryParams`

```js
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

#### `initialData`

Type: `Array<T>`

Default value: `[]`

### 4. `useFetchOne`

#### `uri`

Type: `string`

#### `id`

Type: `string`

#### `initialData`

Type: `object`

### 5. `useFetchQuery`

In the following objArg: Args<T> is used to describe the object that is passed to the hook.

```js
type = Args<T> = {
  initialData: Array<T>
  queryKey: string
  callback: () => Promise<T>
}
```

#### `argObj.initialData`

Type: `Array<T>`

#### `argObj.queryKey`

Type: `Array<string>`

#### `queryFn`

Type: `() => Promise<T>`

### 6. `useClickOutside`

In the following objArg: Args is used to describe the object that is passed to the hook.

```js
type = Args = {
  callback: () => void
}
```

#### `argObj.callback`

Type: `() => void`

### 7. `useToggleBoolean`

#### `initialValue`

Type: `boolean`

### 8. `useWindowWidth`

#### `initialWindowWidth`

Type: `number`

### 9. `useWindowHeight`

#### `initialWindowHeight`

Type: `number`

### 10. `useScrollPosition`

#### `initialScrollPosition`

Type: `number`

### 11. `useDebounce`

##### `value`

Type: `string`

#### `delay`

Type: `number`

### 12. `usePreviousValue`

##### `value`

Type: `JSValueType = string | boolean | number`

</details>

[^1]: React `useEffect` - [React use effect hook](https://react.dev/reference/react/useEffect)
[^2]: MDN documentation about local storage - [Local Storage MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[^3]: MDN fetch API - [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
[^4]: axios GitHub - [axios GitHub repository](https://github.com/axios/axios)
