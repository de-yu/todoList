


 const reducer = (state={'value':0}, action) => {

  switch (action.type) {
    case 'SETNUM':
      return {'value':state['value']+action.num};
    default:
      return {'value':state['value']};
  }
}

export default reducer