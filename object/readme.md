# throwIfUnsupportedProps

## Example

```
import { throwIfUnsupportedProps } from 'justin-things-js-utils'
const defaults = {hey:'yo'}
const objToCheck = {hey: 'bye'}
// checks if props of the obj parameter are supported	
// To support props, the props must have a props set in defaults with a value	
export const checkIfPropsSupported = objToCheck => {	
  throwIfUnsupportedProps(	
    objToCheck,	
    defaults,	
    ['children', 'hidden'],	
    'Unsupported properties. To support these props, they must first be added ' +	
      "to this Layout's default styles and given a default value. Example - Layout " +	
      'defaults.js: export const defaultStyles = {aPropAddedToThemeWithADefault: ' +	
      "'#222222' } .Then they can be overriden using the Layout's element.Example: " +	
      '<Section aPropAddedToThemeWithADefault ="#828828"></Section>.'	
  )	

  return objToCheck	
}

```
