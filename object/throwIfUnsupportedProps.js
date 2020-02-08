// Throw an error if objToCheck has props/keys that objWithAllowedProps does not have	
export const throwIfUnsupportedProps = (	
  objToCheck,	
  objWithAllowedProps,	
  additionalAllowedKeyNames = [],	
  messageWhenPropsUnsupportedPropsFound = ''	
) => {	
  const propsAllowed = [...Object.keys(objWithAllowedProps || {}), ...(additionalAllowedKeyNames || [])]	
  const propsToCheck = Object.keys(objToCheck || {})	
  const foundUnsupportedProps = propsToCheck.filter(key => !includes(propsAllowed, key))	

  if (foundUnsupportedProps.length) {	
    throw new Error(	
      `${messageWhenPropsUnsupportedPropsFound} The following props are not allowed: ${foundUnsupportedProps.join(	
        ', '	
      )}. The following props are allowed: ${propsAllowed.join(', ')}.`	
    )	
  }	
}
