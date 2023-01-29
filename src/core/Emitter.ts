type CallbackFunction = () => any

interface IListener {
  eventName?: Array<CallbackFunction>
}

export class Emitter {
  listeners: IListener

  // table.emit('table:select', () => {})
  emit(eventName: string, ...args: any[]) {
    if (!Array.isArray(this.listeners[eventName])) {
      return false
    }
    this.listeners[eventName].forEach((listener: CallbackFunction) => {
      (listener as any)(...args)
    })

    return true
  }

  // formula.subsribe('table:select', () => {})
  subscribe(eventName: string, fn: CallbackFunction) {
    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName].push(fn)

    return () => {
      this.listeners[eventName] = this.listeners[eventName].filter((item: CallbackFunction) => item != fn)
    }
  }
}

// const unsub = emitter.subscribe('event:event1', () => {console.log()});
// emit('event:event1', 55);
// unsub()
