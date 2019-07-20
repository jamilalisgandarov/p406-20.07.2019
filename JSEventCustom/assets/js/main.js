function CustomEvents() {
  this.events = {
    'onDoorOpen': [],
    'onDoorClose': [],
  };

  this.addEventListener = function(eventName, fn) {
    if (this.events.hasOwnProperty(eventName)) {
      this.events[eventName].push(fn);
    } else {
      console.log('yoxdur');
    }
  }

  this.callEvent = function(eventName) {
    if (this.events.hasOwnProperty(eventName)) {
      this.events[eventName].forEach((eventCallbackFunction) => {
        eventCallbackFunction();
      });
    }
  }
}

var customEventInstance = new CustomEvents();

customEventInstance.addEventListener('onDoorOpen', () => console.log('Test 1'));
customEventInstance.addEventListener('onDoorOpen', () => console.log('Test 2'));
customEventInstance.addEventListener('onDoorOpen', () => console.log('Test 3'));
customEventInstance.addEventListener('onDoorOpen', () => console.log('Test 4'));
customEventInstance.addEventListener('onDoorOpen', () => console.log('Test 5'));

customEventInstance.addEventListener('onDoorClose', () => console.log('Test 2'));

customEventInstance.callEvent('onDoorOpen');
