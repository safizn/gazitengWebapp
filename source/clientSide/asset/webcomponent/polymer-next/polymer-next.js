import { Element as PolymerElement } from '/asset/webcomponent/component.package/@polymer/polymer/polymer-element.js'
import css from './.css$convertTextToJSModule'
import html from './.html$convertTextToJSModule'

export class Element extends PolymerElement {
    static get is() { return 'polymer-next' }
    static get template() {
      return `<style>${css}</style>${html}`
  }
}

window.customElements.define(Element.is, Element)