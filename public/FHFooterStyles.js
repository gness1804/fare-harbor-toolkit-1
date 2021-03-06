var footerObj = FHConfig.config.toolDetails.footer;
var StickyDependentPosition;

(function dataValidationFooter() {

  if (typeof footerObj.isFooterSticky !== 'boolean') {
    throw new Error('The value of isFooterSticky should always be a boolean.')
  }

  if (footerObj.elements[0].doesItExist !== true || typeof footerObj.elements[0].doesItExist !== 'boolean') {
    throw new Error('The value of doesItExist for the element with id of "first" should always be the boolean value true.')
  }

  if (typeof footerObj.elements[1].doesItExist !== 'boolean' || typeof footerObj.elements[2].doesItExist !== 'boolean' || typeof footerObj.elements[3].doesItExist !== 'boolean') {
    throw new Error('The value of doesItExist must always be a boolean.')
  }

  if (typeof footerObj.elements[0].textContent !== 'string' || typeof footerObj.elements[1].textContent !== 'string' || typeof footerObj.elements[2].textContent !== 'string' || typeof footerObj.elements[3].textContent !== 'string') {
    throw new Error('The value of textContent must always be a string.')
  }

  if (footerObj.elements[0].linkTo === '') {
    throw new Error('Each element included in the footer must have a valid link. Check the linkTo property of each element.')
  }

  if (footerObj.elements[1].doesItExist === true && footerObj.elements[1].linkTo === '') {
    throw new Error('Each element included in the footer must have a valid link. Check the linkTo property of each element.')
  }

  if (footerObj.elements[2].doesItExist === true && footerObj.elements[2].linkTo === '') {
    throw new Error('Each element included in the footer must have a valid link. Check the linkTo property of each element.')
  }

  if (footerObj.elements[3].doesItExist === true && footerObj.elements[3].linkTo === '') {
    throw new Error('Each element included in the footer must have a valid link. Check the linkTo property of each element.')
  }

  if (footerObj.elements[1].doesItExist === false) {
    if (footerObj.elements[2].doesItExist || footerObj.elements[3].doesItExist) {
      throw new Error('Non-existing elements cannot be ordered before existing elements. Check the "doesItExist" properties of your elements.')
    }
  }

  if (footerObj.elements[2].doesItExist === false) {
    if (footerObj.elements[3].doesItExist) {
      throw new Error('Non-existing elements cannot be ordered before existing elements. Check the "doesItExist" properties of your elements.')
    }
  }

})()

var FHFooterStyles = {
  backgroundColor: footerObj.backgroundColor || '#88BCF8',
  height: 'auto',
  display: 'block',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderBottomWidth: '1px',
  borderLeftWidth: '1px',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderBottomStyle: 'solid',
  borderLeftStyle: 'solid',
  borderTopColor: footerObj.borders.borderTopColor || '#88BCF8',
  borderRightColor: footerObj.borders.borderRightColor || '#88BCF8',
  borderBottomColor: footerObj.borders.borderBottomColor || '#88BCF8',
  borderLeftColor: footerObj.borders.borderLeftColor || '#88BCF8',
  position: footerObj.isFooterSticky ? 'fixed' : 'static',
  bottom: footerObj.isFooterSticky ? '20px' : '',
  width: footerObj.isFooterSticky ? '100vw' : '',
  marginTop: footerObj.isFooterSticky ? '0' : '15px',
  marginRight: footerObj.isFooterSticky ? '0' : '10px',
  marginBottom: footerObj.isFooterSticky ? '0' : '15px',
  marginLeft: footerObj.isFooterSticky ? '0' : '10px',
}
