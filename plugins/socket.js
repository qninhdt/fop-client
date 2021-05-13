import SocketIOClient from "socket.io-client"
import Vue from 'vue'

const socket = SocketIOClient("localhost:5000")

Vue.prototype.$socket = socket