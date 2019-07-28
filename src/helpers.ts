export function removeQueryParams () {
  window.history.replaceState({}, document.title, '/');
}

export function delay (timeMs: number, result?: any) {
  return new Promise(resolve =>
    setTimeout(() => resolve(result), timeMs)
  )
}
