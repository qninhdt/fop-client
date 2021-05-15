import Vue from 'vue'
import VueCustomElenemt from 'vue-custom-element'

import Hoverable from '../components/elements/hoverable.vue'
import Draggble from  '../components/elements/draggable.vue'
import Scrollable from  '../components/elements/scrollable.vue'
import Text from  '../components/elements/text.vue'

Vue.use(VueCustomElenemt)

Vue.customElement('v-hoverable', Hoverable)
Vue.customElement('v-draggable', Draggble)
Vue.customElement('v-scrollable', Scrollable)
Vue.customElement('v-text', Text)
