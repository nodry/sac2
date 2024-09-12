(function () {
 const template = document.createElement('template')
 template.innerHTML = `
 <style>
 </style>
 <div id="root" style="width: 100%; height: 100%;">
 Hello WebComponent lkj001
 </div>
 `
 class Main extends HTMLElement {
 constructor () {
 super()
 this._shadowRoot = this.attachShadow({ mode: 'open' })
 this._shadowRoot.appendChild(template.content.cloneNode(true))
 this._root = this._shadowRoot.getElementById('root')
 }
 onCustomWidgetResize (width, height) {
	this.render();
}
onCustomWidgetBeforeUpdate (changedProps) {

}
onCustomWidgetAfterUpdate () {

}
onCustomWidgetDestroy () {

}

render () {
	this._root.textContent = `Hello Custom Widget clientWidth: ${this.clientWidth}, clientWidth: ${this.clientHeight}`
}
 }

 customElements.define('com-sap-sac-exercise-lkj001-main', Main)
 })()