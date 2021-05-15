import "./socket"
import "./custom-element"
import Vue from 'vue'

Vue.prototype.$is_in_box = (point, el) => {
    const rect = el.getBoundingClientRect()

    return (point[0] > rect.x) && (point[0] < rect.x + rect.width) 
        && (point[1] > rect.y) && (point[1] < rect.y + rect.height)
}