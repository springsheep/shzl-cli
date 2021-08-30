import {
	createAPI
} from '../util'
import config from '../config'

const baseUrl = {
	mock: 'http://10.10.70.86:7300/mock/60a2083a74d4780037fda463/store-api',
	dev: 'http://10.10.77.194:8093',
	pre: '',
	prod: ''
} [config.env || 'mock']

export default createAPI(baseUrl)
