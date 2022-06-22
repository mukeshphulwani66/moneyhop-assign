export const debounce = (func, delay) => {
    let debouncing
    return function() {
      const context = this
      const args = arguments
      clearTimeout(debouncing)
      debouncing = setTimeout(() => func.apply(context, args), delay)
    }
  }