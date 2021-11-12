// 表单类型
const FORM_ITEM_TYPE = {
	// 普通输入框，默认此输入框
	INPUT_TEXT: 'text',
	// 长文本内容
	INPUT_TEXTAREA: 'textarea',
	// 下拉选择，可选参数 change(key,value,form) 事件
	SELECT: 'select',
	// 文件上传
	UPLOAD: 'upload',
	// 身份证输入框
	INPUT_IDCARD: 'idcard',
	// 插槽
	SLOT: 'slot'
}

// 输入提示
const PLACEHOLDER_MAP = {
	[FORM_ITEM_TYPE.SELECT]: '请选择',
	[FORM_ITEM_TYPE.UPLOAD]: '请上传'
}

// 是选择器的表单类型
const SELECT_FORM_ITEM_LIST = [
	FORM_ITEM_TYPE.SELECT
]

// 可能是字典的表单类型
const DICT_ITEM_LIST = [
	FORM_ITEM_TYPE.SELECT
]


// 获取默认等输入提示
function getDefaultPlaceholder(type) {
	const desc = PLACEHOLDER_MAP[type]
	return desc || '请输入'
}

// 是否是选择类型的
function isSelectType(type) {
	return SELECT_FORM_ITEM_LIST.includes(type)
}

// 是否是字典类型的
function isDictType(type) {
	return DICT_ITEM_LIST.includes(type)
}


export {
	FORM_ITEM_TYPE,
	getDefaultPlaceholder,
	isSelectType,
	isDictType
}
