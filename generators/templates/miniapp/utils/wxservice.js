const testData = [{
	"id": "3266748823474521641",
	"title": "慈城镇",
	"address": "浙江省宁波市江北区 ",
	"tel": "",
	"category": "地名地址:行政地名",
	"type": 0,
	"location": {
		"lat": 29.974826,
		"lng": 121.447633
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "2199026967797",
	"title": "慈城[地铁站]",
	"address": "轨道交通4号线",
	"tel": "",
	"category": "基础设施:交通设施:地铁站",
	"type": 2,
	"location": {
		"lat": 29.975455,
		"lng": 121.450951
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "2199029405271",
	"title": "慈城[公交站]",
	"address": "337路,26路,惠农采摘2号专线,惠农采摘1号专线,337路江北高新园班次,微20路",
	"tel": "",
	"category": "基础设施:交通设施:公交车站",
	"type": 1,
	"location": {
		"lat": 29.975034,
		"lng": 121.453058
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "14552876573540388785",
	"title": "慈城古镇",
	"address": "浙江省宁波市江北区东城沿路88号",
	"tel": "0574-87572368",
	"category": "旅游景点:风景名胜",
	"type": 0,
	"location": {
		"lat": 29.98335,
		"lng": 121.4507
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "1724927387349417535",
	"title": "慈城古镇-孔庙公园",
	"address": "浙江省宁波市江北区慈城镇解放路8号慈城古镇",
	"tel": "0574-87573396",
	"category": "旅游景点:公园",
	"type": 0,
	"location": {
		"lat": 29.983719,
		"lng": 121.45159
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "5965314858879760252",
	"title": "慈城大桥",
	"address": "浙江省宁波市江北区 ",
	"tel": "",
	"category": "基础设施:道路附属:桥",
	"type": 0,
	"location": {
		"lat": 29.994861,
		"lng": 121.42068
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "1946730837216539910",
	"title": "慈城公园",
	"address": "浙江省宁波市江北区 ",
	"tel": "",
	"category": "旅游景点:风景名胜",
	"type": 0,
	"location": {
		"lat": 29.984335,
		"lng": 121.452104
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "5563480538156398405",
	"title": "慈城新城",
	"address": "浙江省宁波市江北区 ",
	"tel": "",
	"category": "地名地址:行政地名",
	"type": 0,
	"location": {
		"lat": 29.958437,
		"lng": 121.444671
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "17771924281385493955",
	"title": "慈城高中",
	"address": "浙江省宁波市江北区祝家街与西官山河路交叉口西南100米",
	"tel": "",
	"category": "教育学校:其它教育学校",
	"type": 0,
	"location": {
		"lat": 29.953476,
		"lng": 121.455443
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}, {
	"id": "6951563652762247374",
	"title": "慈湖人家(西区)",
	"address": "浙江省宁波市江北区慈城连接线附近",
	"tel": "",
	"category": "室内及附属设施:通行设施类:门/出入口",
	"type": 0,
	"location": {
		"lat": 29.976026,
		"lng": 121.463832
	},
	"ad_info": {
		"adcode": 330205,
		"province": "浙江省",
		"city": "宁波市",
		"district": "江北区"
	}
}]

/**
 * 微信服务-地址检索
 * 微信小程序环境调用启用真实api，h5环境启用数据结构一致的测试数据
 */
const getInputTipsAddress = (keyword = '慈城') => {
	// #ifdef MP-WEIXIN
	return wx.serviceMarket.invokeService({
		service: 'wxc1c68623b7bdea7b',
		api: "poiSearch",
		data: {
			keyword: keyword,
			boundary: 'region(宁波)'
		}
	}).then(res => {
		const {
			data
		} = res
		if (data.status === 0) {
			return Promise.resolve(data.data.map(item=>{
				// 有的时候address为空，所以将title赋值给address
				if(!item.address){
					item.address = item.title
				}
				return item
			}) || [])
		} else {
			return Promise.resolve([])
		}
	})
	// #endif

	// #ifdef H5
	return Promise.resolve(testData)
	// #endif
}

/**
 * 拟地址解析
 */
const getAddressByLocation = (latitude, longitude) => {
	// #ifdef H5
	return Promise.resolve({
		address: '浙江省宁波市江北区慈城连接线附近'
	})
	// #endif

	// #ifdef MP-WEIXIN
	const location = `${latitude},${longitude}`
	return wx.serviceMarket.invokeService({
		service: 'wxc1c68623b7bdea7b',
		api: "rgeoc",
		data: {
			location: location
		}
	}).then(res => {
		const {
			data
		} = res
		if (data.status === 0) {
			return Promise.resolve({
				address: data.result.address
			})
		} else {
			return Promise.resolve({
				address: ''
			})
		}
	})
	// #endif
}

export default getInputTipsAddress

export {
	getAddressByLocation,
	getInputTipsAddress
}
