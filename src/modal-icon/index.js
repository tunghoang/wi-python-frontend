import template from './template.html'
import './style.scss'

const name = 'modalIcon'

///////////////////////////////////////

// A Icon when is clicked show up a modal

/////////////////////////////////////
controller.$inject = []
function controller() {
  const self = this

  self.$onInit = function () {
    initState()
  }

  self.showModal = function () {
    self.modalStyle.display = 'block'
    if(self.iconOnClick && typeof self.iconOnClick === 'function') {
      self.iconOnClick()
    }
  }

  self.close = function () {
    self.modalStyle.display = 'none'
    if(self.onClose && typeof self.onClose === 'function') {
      self.onClose()
    }
  }

  self.closeByClickInChild = function() {
    if(self.allowCloseAfterClick) {
      self.close()
    }
  }

  function initState() {
    self.modalStyle = {
      display: 'none'
    }
  }
}

export default {
  name,
  options: {
    bindings: {
      modalName: '<',
      icon: '<',
      iconTitle: '<',
      iconOnClick: '<',
      // modalStyle: '<',
      allowCloseAfterClick: '<'
    },
    template,
    controller,
    controllerAs: 'self',
    transclude: true,
  }
}