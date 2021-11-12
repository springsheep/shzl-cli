/**
 * 表单域类型枚举
 */
enum ItemType  {
	// 普通输入框，默认此输入框
	INPUT_TEXT = 'text',
	// 下拉选择，可选参数 change(key,value,form) 事件
	SELECT =  'select',
	// 文件上传
	UPLOAD = 'upload',
	// 身份证输入框
	INPUT_IDCARD = 'idcard',
	// 插槽
	SLOT = 'slot'
}

/**
 * 下拉框类型枚举
 */
enum SelectMode {
	SINGLE_COLUMN = 'single-column', //单列模式
	MULTI_COLUMN = 'mutil-column', //多列模式
	MULTI_COLUMN_AUTO = 'mutil-column-auto' //多列联动模式
}

/**
 * 表单域属性定义
 */
interface ItemDefine {
	type: ItemType // 类型
	key: string //绑定的数据key
	required?: boolean //是否必输
	fieldType?: string // 校验表单值的数据类型，默认string，所以数字类型的必须设置，目前仅 required=true 时有效
	options?: { label: string, value: string }[] //下拉列表选项，当type为SELECT时才有
	mode?: SelectMode //（单选多选模式）参数，当type为SELECT时才有
	keys?: string[] //关联key，主要针对下拉框类型，保存关联数据
	action?: string //上传服务器地址
	dictId?: string //字段ID，当类型为Select时生效
	default?: boolean //当类型为Slot时生效，因为uniapp->weixin不支持动态传入slot名称，所以指定true时是默认插槽，false时为extra具名插槽
	// 小程序里面的props不支持传入function，所以删除
	//xStore?: function //下拉数据集合，当type为SELECT时才有，为一个promise对象

/**
 * 表单属性定义
 */
interface FormPropsDefine {
	list: ItemDefine[] //表单项
	formData: {[key: string]: any} //表单默认数据
	formLabelWidth?: string|number //表单提示文字宽度
	showRequiredStar?: boolean //表单项必填时是否显示星号
} 