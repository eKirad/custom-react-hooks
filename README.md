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

## Usage

### 1. `useEffectOnUpdateOnly`

```
useEffectOnUpdateOnly({ callback: () => {
   // Effect code goes here 
}, dependencies: [] }) // Dependencies for the effect have to be added to the array here
```
### 2. `useFetchAll`

```
const BASE_URL = `localhost:<PORT>`
const RESOURCE_PATH = `foo`

const [{ data, isError, isLoading }, { setQueryParameters, shouldFetchData }] = useFetchAll<any>(`${BASE_URL}/${RESOURCE_PATH}`)
```

## API

### 1. `useEffectOnUpdateOnly`
In the following `objArg: Args<T>` is used to describe the object that is passed to the hook.

```
type Args<T> = {
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

### 2. `useFetchAll`







