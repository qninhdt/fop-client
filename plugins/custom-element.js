import Vue from 'vue'
import VueCustomElenemt from 'vue-custom-element'

import Hoverable from '../components/elements/hoverable.vue'
import Draggble from  '../components/elements/draggable.vue'
import Scrollable from  '../components/elements/scrollable.vue'
import Text from  '../components/elements/text.vue'
import Dropzone from '../components/elements/dropzone.vue'
import DragItem from '../components/elements/dragitem.vue'
import Quiz from "../components/elements/quiz.vue"

Vue.use(VueCustomElenemt)

Vue.customElement('v-hoverable', Hoverable)
Vue.customElement('v-draggable', Draggble)
Vue.customElement('v-scrollable', Scrollable)
Vue.customElement('v-text', Text)
Vue.customElement('v-dropzone', Dropzone)
Vue.customElement('v-dragitem', DragItem)
Vue.customElement('v-quiz',Quiz)
